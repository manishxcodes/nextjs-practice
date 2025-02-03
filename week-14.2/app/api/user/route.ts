import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

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
    const user = await client.user.create({
        data: {
            firstName: body.firstName,
            lastName: body.lastName,
            email: body.email,
            password: body.password
        }
    })

    console.log(user.id);

    return NextResponse.json({
        message: "Signup Successful"
    });
}