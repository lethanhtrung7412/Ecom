import mongoose from "mongoose";

export function countConnect() {
    const numberOfConnection = mongoose.connections.length;
    return numberOfConnection    
}       

