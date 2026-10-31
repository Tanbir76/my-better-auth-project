import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "@better-auth/mongo-adapter";
const client = new MongoClient(process.env.BETTER_AUTH_DB_URL);
const db = client.db('better_db');
export const auth = betterAuth({
    emailAndPassword: {
        enabled: true,
        autoSignIn: false,
    },
     socialProviders: {
        google: { 
            clientId: process.env.BETTER_AUTH_DB_GOOGLE_CLIENT_ID, 
            clientSecret: process.env.BETTER_AUTH_DB_GOOGLE_CLIENT_SECRET, 
        }, 
    },
    database: mongodbAdapter(db),
});