// src/app/page.js
import React from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import HomePage from '../components/HomePage';

const DestinationList = dynamic(() => import('../components/DestinationList'), { ssr: false });

const Page = () => {
    return (
        <div>
            <Navbar />
            <HomePage />
            <DestinationList />
        </div>
    );
};

export default Page;