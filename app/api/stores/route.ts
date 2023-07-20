import prismadb from "@/lib/prismaDb";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const { userId } = auth();
        const body = await req.json();
        const { name } = body;
        if (!userId){
            return new NextResponse("Unauthorized", { status: 401 });
        }
        if (!name){
            return new NextResponse("Missing name", { status: 400 });
        }
        const store = await prismadb.store.create({
                data: {
                    name,
                    userID: userId as string,
                }})
        return NextResponse.json(store);
    } catch (error) {
        console.log("[STORE_POST]", error);
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}
