'use client';
import React from 'react';
import Link from 'next/link';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/login">Login</Link></li>
                <li><Link href="/signup">Sign Up</Link></li>
               {/* <li><Link href="/itinerary">Create Itinerary</Link></li> */}
            </ul>
            <style jsx>{`
                nav {
                    background: #333;
                    color: white;
                    padding: 1rem;
                }
                ul {
                    list-style: none;
                    display: flex;
                    justify-content: space-around;
                }
                li {
                    margin: 0 1rem;
                }
                a {
                    color: white;
                    text-decoration: none;
                }
            `}</style>
        </nav>
    );
};

export default Navbar;