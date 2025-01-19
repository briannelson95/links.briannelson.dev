import React from 'react'
import Intro from './Intro'
import Links from './Links'
import BlueskyIcon from './icons/BlueskyIcon'
import GlobeIcon from './icons/GlobeIcon'
import PixelfedIcon from './icons/PixelfedIcon'
import GithubIcon from './icons/GithubIcon'

const links = [
    {
        title: "Website",
        link: "https://briannelson.dev",
        icon: <GlobeIcon />,
    },
    {
        title: "Bluesky",
        link: "https://briannelson95.bsky.social",
        icon: <BlueskyIcon />,
    },
    {
        title: "Pixelfed",
        link: "https://pixelfed.social/briannelson",
        icon: <PixelfedIcon />,
    },
    {
        title: "GitHub",
        link: "https://github.com/briannelson95",
        icon: <GithubIcon />,
    },
]

export default function FullProfile() {
    return (
        <div className='my-20 flex flex-col items-center mx-20 gap-4'>
            <Intro />
            <section className='flex flex-col w-full'>
                {links.map((item) => (
                    <Links key={item.title} {...item} />
                ))}
            </section>
        </div>
    )
}
