import { db } from "@/lib/database";
import { NextResponse } from "next/server";

export async function GET() {
    const ping = await db.ping.findMany();

    const sanitizedPing = ping.map(item => ({
        ...item,
        // Assuming `id` is the field with BigInt, adjust this according to your schema
        id: item.id.toString(),
    }));

    console.log("Ping:", sanitizedPing);

    return NextResponse.json(sanitizedPing);
}
