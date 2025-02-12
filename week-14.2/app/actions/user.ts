"use server"
import { NextResponse } from "next/server";
import client from "@/db"

export async function signup(
    firstName: string,
    lastName: string,
    email: string,
    password: string
) {
    // store the body in db
    try {
        const user = await client.user.create({
            data: {
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password
            }
        });

        return { message: "Signup Successful" };    
    }   
    catch(err: any) {
        console.log("error:", err);
        return { message: "Error while signing up", error: err.message };
    } 
}