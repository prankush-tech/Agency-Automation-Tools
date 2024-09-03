import React from 'react'
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
  } from "@/components/ui/card"
import { DollarSign } from 'lucide-react';
type Props = {}

const mainData = [{
    title: "Title",
    description: "Deploy your new project "
}, {
    title: "Another Title",
    description: "Another Description"
}, {
    title: "Yet Another Title",
    description: "Yet Another Description"
}, {
    title: "One More Title",
    description: "One More Description"
},
 {
    title: "One More Title",
    description: "One More Description"
},
];

const CardDashboard = (props: Props) => {
  return (
   
    <div className="flex flex-wrap xl:flex-nowrap w-full justify-center items-center gap-4 py-3 px-3">
    {mainData.map((eachcard,index)=>{
        return(
            <Card key={index} className="w-[350px] py-3">
                <CardHeader>
                    <span className=' flex justify-between '>
                    <CardDescription>{eachcard.description}</CardDescription>
                    <DollarSign  />
                    </span>
                    <CardTitle className='md:text-xl'>{eachcard.title}</CardTitle>
                    <CardDescription>{eachcard.description}</CardDescription>
                </CardHeader>
            </Card>
        )
    })}

    </div>
  )
}

export default CardDashboard