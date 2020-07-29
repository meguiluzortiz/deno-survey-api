import { MongoClient } from "./deps.ts";

const dbUri = Deno.env.get("MONGO_URI")!;
const client = new MongoClient();
client.connectWithUri(dbUri);

const db = client.database("deno_survey");
export const usersCollection = db.collection("users");
