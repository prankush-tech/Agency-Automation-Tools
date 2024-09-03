import React from 'react'
import Stripe from 'stripe'
import { currentUser } from '@clerk/nextjs'
import { db } from '@/lib/database'
import BillingDashboard from './_components/billing-dashboard'

type Props = {
    searchParams?: { [key: string]: string | undefined }
}


const page = async (props: Props) => {

    const { session_id } = props.searchParams ?? {
        session_id: '',
    }

    if (session_id) {
        const stripe = new Stripe(process.env.STRIPE_SECRET!, {
            typescript: true,
            apiVersion: '2023-10-16',
        })
        const session = await stripe.checkout.sessions.listLineItems(session_id)
        const user = await currentUser()

        if (user) {
            await db.user.update({
                where: {
                    clerkId: user.id,
                },
                data: {
                    tier: session.data[0].description,
                    credits:
                        session.data[0].description == 'Unlimited'
                            ? 'Unlimited'
                            : session.data[0].description == 'Pro'
                                ? '100'
                                : '10',
                },
            })
        }
    }



    return (
        <div className="felx felx-col gap-4 relative">
            <h1 className="text-xl lg:text-2xl sticky top-0 z-[10] p-4 bg-background/50 backdrop-blur-lg flex items-center border-t border-x-2 font-bold rounded-t-2xl border-b">
                Payments
            </h1>
            <BillingDashboard />
        </div>
    )
}

export default page