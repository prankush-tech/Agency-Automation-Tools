'use server'
import { db } from '@/lib/database'
import { auth } from '@clerk/nextjs'

export const getGoogleListener = async () => {
    const { userId } = auth()
  
    if (userId) {
      const listener = await db.user.findUnique({
        where: {
          clerkId: userId,
        },
        select: {
          googleResourceId: true,
        },
      })
  
      if (listener) return listener
    }
  }