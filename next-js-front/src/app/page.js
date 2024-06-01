import React from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
const DestinationList = dynamic(() => import('../components/DestinationList'), { ssr: false });


const Page = () => {
  
  // Mark this component as a client-side component
  return (
    <div>
      <h1>Welcome to Travel App</h1>
      <DestinationList />
      <nav>
                <Link href="/login">Login</Link>
                <Link href="/signup">Sign Up</Link>
            </nav>
    </div>
  );
}
export default Page;