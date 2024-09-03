import { db } from "@/lib/database";
import type { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from "next/server";



export async function GET() {
    try {

        const users = await db.ping.findMany();
        console.log('Users:', users);

  
        return NextResponse.json(users)
        
    } 
    catch (error) 
    {
        return NextResponse.json({
            error:Error
        })
    } finally {
      await db.$disconnect();
    }
  }
  