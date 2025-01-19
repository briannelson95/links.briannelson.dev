import Image from 'next/image'
import React from 'react'

const infoJson = {
    name: "Brian Nelson",
    bio: "Self-taught developer, and self-hoster. I enjoy hiking and hanging out with my dog 🐕",
    image: "/me.webp"
}

export default function Intro() {
    return (
        <div className='flex flex-col gap-4 items-center'>
            <Image
                src={infoJson.image}
                height={1000}
                width={1000}
                alt={`image of ${infoJson.name}`}
                className='object-cover object-center w-32 aspect-square rounded-full'
            />
            <h1 className='text-3xl font-semibold'>{infoJson.name}</h1>
            <p className='text-center'>{infoJson.bio}</p>
        </div>
    )
}
