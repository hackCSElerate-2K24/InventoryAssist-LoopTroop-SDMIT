import { Hono } from "hono";
import { client, databases } from "../Appwrite/appwrite";

const categoryRoute = new Hono();

categoryRoute.get('/all', async (c) => {
    try {

        const response = await databases.listDocuments(
            String(process.env.APPWRITe_DB), 
            String(process.env.APPWRITE_CATEGORY_COL)
        );
        console.log(response);
        const categoryNames = response.documents.map((doc: { Name: string }) => doc.Name);
        
        return c.json(categoryNames); 
    } catch (error) {
        return c.json({ error: error }, 500); 
    }
});






export default categoryRoute;