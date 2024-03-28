import React from 'react'

type Props = {
    text:string
}

const Button = (props: Props) => {
    return (
        <div className="w-full flex justify-center items-center pb-12">

        <button className="px-24 py-6 rounded-full bg-[#e2f24b] font-bold text-neutral-900 text-xl tracking-widest uppercase transform hover:bg-neutral-900 hover:text-neutral-50 transition-colors duration-400 dark:hover:bg-neutral-50 dark:hover:text-neutral-900">
            {props.text}
        </button>


        </div>
    )
}

export default Button