import { Hono } from "hono";
import { client, databases } from "../Appwrite/appwrite";

const productRoute = new Hono();

productRoute.get('/all/:categoryId', async (c) => {
    const categoryId = c.req.param('categoryId');  // Get the categoryId path parameter
    console.log(categoryId);
    if (!categoryId) {
        return c.json({ error: 'Category ID is required' }, 400);
    }

    try {
        const response = await databases.listDocuments(
            String(process.env.APPWRITE_DB), 
            String(process.env.APPWRITE_PRODUCT)
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
        return c.json({ error: 'Unable to fetch products' }, 500);
    }
});

export default productRoute;
