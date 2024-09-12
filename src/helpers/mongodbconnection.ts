import { MongoClient } from "mongodb";

const uri = "mongodb://localhost:27017"
const DBName = "COLOURS"

const client = new MongoClient(uri)

export function mongoDBConnect(name:string) {
    const db = client.db(name);
    return db;    
}

export function getCollection(name:string) {
    let db = mongoDBConnect(DBName)
    let collection = db.collection(name);
    return collection; 
}
