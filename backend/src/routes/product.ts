import { Hono } from "hono";
import { client, databases } from "../Appwrite/appwrite";

const productRoute = new Hono();
productRoute.get('/all', async (c) => {
    try {
        const response = await databases.listDocuments(
            String(process.env.APPWRITE_DB), 
            String(process.env.APPWRITE_PRODUCT), 
        );

        if (response.documents.length === 0) {
            return c.json({ message: 'No products found in this category' }, 404);
        }

        // Group products by category, clean up category field
        const productsByCategory = response.documents.reduce((acc, product) => {
            const { Name: categoryName, $id: categoryId } = product.category;

            // Simplify product object
            const simplifiedProduct = {
                ...Object.fromEntries(
                    Object.entries(product).filter(([key]) => key === "$id" || !key.startsWith("$"))
                ),
                category: { Name: categoryName, $id: categoryId } // Retain essential category info
            };

            if (!acc[categoryName]) {
                acc[categoryName] = [];  // Initialize array if it doesn't exist
            }
            acc[categoryName].push(simplifiedProduct);  // Add simplified product to category array
            return acc;
        }, {});

        return c.json(productsByCategory);
    } catch (error) {
        console.log(error);
        return c.json({ error: 'Unable to fetch products' }, 500);
    }
});


productRoute.get('/stock-status', async (c) => {
    try {
        const response = await databases.listDocuments(
            String(process.env.APPWRITE_DB), 
            String(process.env.APPWRITE_PRODUCT), 
        );

        if (response.documents.length === 0) {
            return c.json({ message: 'No products found' }, 404);
        }

        // Calculate stock status
        const stockStatus = response.documents.reduce((acc, product) => {
            const stock = product.quantity ?? 0;

            if (stock === 0) {
                acc.outOfStock += 1;
            } else if (stock < 10) {
                acc.lowStock += 1;
            } else {
                acc.inStock += 1;
            }

            return acc;
        }, { inStock: 0, outOfStock: 0, lowStock: 0 });

        return c.json(stockStatus);
    } catch (error) {
        console.log(error);
        return c.json({ error: 'Unable to fetch stock status' }, 500);
    }
});

export default productRoute;
