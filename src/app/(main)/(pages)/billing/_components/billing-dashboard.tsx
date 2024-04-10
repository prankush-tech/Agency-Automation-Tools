'use client'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useBilling } from '../../../../../../billing-providers'
import { SubscriptionCard } from './subscriptionCard'
import CreditTracker from './creditTracker'


type Props = {}

const BillingDashboard = (props: Props) => {
  const { credits, tier } = useBilling()
  const [stripeProducts, setStripeProducts] = useState<any>([])
  const [loading, setLoading] = useState<boolean>(false)

  const onStripeProducts = async () => {
    setLoading(true)
    const { data } = await axios.get('/api/payment')
    if (data) {
      setStripeProducts(data)
      setLoading(false)
    }
  }

  useEffect(() => {
    onStripeProducts()
  }, [])

  const onPayment = async (id: string) => {
    const { data } = await axios.post(
      '/api/payment',
      {
        priceId: id,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
    window.location.assign(data)
  }

  return (
    <>
              <CreditTracker
                tier={tier}
                credits={parseInt(credits)}
              />
        
          <div className="flex gap-5 p-6">
            <SubscriptionCard
              onPayment={onPayment}
              tier={tier}
              products={stripeProducts}
            />
          </div>
 
    </>
  )
}

export default BillingDashboard