import React, {useState} from "react";
import {Link} from "@inertiajs/react";
import {BiSolidUser, BiUser} from "react-icons/bi";


export const Navbar = () => {

    const links = [
        {
            id: 1,
            link: 'Projects',
            href: '#home'
        },
        {
            id: 2,
            link: 'Social Hub',
            href: '#about'
        },
        {
            id: 3,
            link: 'Affiliate',
            href: '#projects'
        },
        {
            id: 4,
            link: 'Documentation',
            href: '#contact'
        },
        {
            id: 5,
            link: 'Community',
            href: '#contact'
        },
    ]

    const [nav, setNav] = useState(true)

    return (

        <div className="flex justify-center items-center bg-neutral-800 h-16 mx-auto border-b border-b-neutral-700">
            <div className="w-[90%] 2xl:px-36 px-0 flex items-center justify-between">
                <div className="flex items-center">
                    <div className="w-[165px]">
                        <img srcSet="/img/logo-light.webp" alt=""/>
                    </div>
                    <div className="flex">
                        <ul className="mx-8">
                            {links.map(({id, link, href}) => (
                                <Link key={id} href={href} className="text-white text-sm font-bold p-2">
                                    {link}
                                </Link>
                            ))}
                        </ul>
                    </div>
                </div>
                <div>
                    <a href={route('short.index')} className="flex text-white items-center hover:bg-neutral-700 hover:transition-all p-2 rounded">
                        <BiSolidUser className="mr-2"/> My Account
                    </a>
                </div>
            </div>
        </div>
    )
}
