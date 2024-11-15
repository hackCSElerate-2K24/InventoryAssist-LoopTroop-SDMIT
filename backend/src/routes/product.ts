import { Hono } from "hono";
import { client, databases } from "../Appwrite/appwrite";


const productRoute = new Hono();
productRoute.get('/products/:categoryId', async (c) => {
    const categoryId = c.req.param('categoryId');  // Get the categoryId path parameter

    if (!categoryId) {
        return c.json({ error: 'Category ID is required' }, 400);
    }

    try {
        const response = await databases.listDocuments(
            String(process.env.APPWRITE_DB_ID), 
            String(process.env.APPWRITE_PRODUCTS_COLLECTION), 
            [
                {
                    key: 'categoryId',
                    value: categoryId,
                    operator: 'equal',
                },
            ]
        );

        if (response.documents.length === 0) {
            return c.json({ message: 'No products found in this category' }, 404);
        }

        return c.json(response.documents);
    } catch (error) {
        return c.json({ error: 'Unable to fetch products' }, 500);
    }
});