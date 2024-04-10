'use server'

import { db } from '@/lib/database'
import { currentUser } from '@clerk/nextjs'

export const onPaymentDetails = async () => {
  const user = await currentUser()

  if (user) {
    const connection = await db.user.findFirst({
      where: {
        clerkId: user.id,
      },
      select: {
        tier: true,
        credits: true,
      },
    })

    if (user) {
      return connection
    }
  }
}