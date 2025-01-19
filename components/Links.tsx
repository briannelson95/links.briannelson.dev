import Link from 'next/link'
import React from 'react'

type Links = {
    title: string
    link: string
    icon?: React.ReactNode
}

export default function Links(props: Links) {
    return (
        <Link
            href={props.link}
            target="_blank"
            className="flex items-center justify-center gap-2 w-full text-center my-3 p-4 
                       overflow-hidden text-gray-900 font-semibold
                       bg-gradient-to-br from-teal-400 to-indigo-400
                       hover:from-indigo-500 hover:to-teal-500
                       transition-all duration-300"
        >
            {props.icon && props.icon}
            <span>{props.title}</span>
        </Link>
    )
}
