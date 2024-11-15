import { Client, Databases } from 'node-appwrite';
import { configDotenv } from 'dotenv';


configDotenv();

const createAppwriteClient = () => {
    const client = new Client();

    client
        .setEndpoint(String(process.env.APPWRITE_URL))
        .setProject(String(process.env.APPWRITE_PROJECT))
        .setKey(String(process.env.APPWRITE_API));

    const databases = new Databases(client); 

    return { client, databases }; 
};

export const { client, databases } = createAppwriteClient();

