import { NextRequest, NextResponse } from "next/server";
import client from "@/db"

export function GET() {
    // database logic
    return Response.json({
        email: "manishprasad@gmail.com",
        name: "Manish Prasad"
    });
}

export async function POST(req: NextRequest) {
    // extract the body
    const body = await req.json();

    // store the body in db
    try {
        const user = await client.user.create({
            data: {
                firstName: body.firstName,
                lastName: body.lastName,
                email: body.email,
                password: body.password
            }
        });
        // header 
        // console.log(req.headers.get("Authorization"));

        // // query parameters
        // console.log(req.nextUrl.searchParams.get("name"));

        return NextResponse.json({
            message: "Signup Successful"
        });    
    }   catch(err: any) {
            console.log("error:", err);
            return NextResponse.json({
                message: "Error while signing up", error: err.message
            }, {status: 500});
    } 
}