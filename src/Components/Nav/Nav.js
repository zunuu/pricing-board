import React, { useState } from 'react';
import Link from '../Link/Link';
import { MenuIcon, XIcon } from '@heroicons/react/solid'


const Nav = () => {
    const [open, setOpen] = useState(false)
    const routes = [
        { id: 1, name: "Home", link: "/Home" },
        { id: 2, name: "ABOUT", link: "/ABOUT" },
        { id: 3, name: "GALLERY", link: "/GALLERY" },
        { id: 4, name: "MORE", link: "/MORE" },
        { id: 5, name: "SIGN IN", link: "/SIGN IN" },
    ]
    return (
        <nav className='bg-teal-100'>
            <div onClick={() => setOpen(!open)} className='w-10 md:hidden '>
                {open ? <XIcon ></XIcon> : <MenuIcon></MenuIcon>}
            </div>
            <ul className={`md:flex justify-center bg-teal-100 md:static  w-full absolute duration-500 ${open ? 'top-8' : 'top-[-120px]'}`}>
                {
                    routes.map(route => <Link key={route.id}
                        routeeeeee={route}>


                    </Link>)
                }
            </ul>
        </nav>
    );
};

export default Nav;