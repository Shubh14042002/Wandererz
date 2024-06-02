'use client';
import React from 'react';
import Link from 'next/link';

const HomePage = () => {
    return (
        <div className="home-container">
            <h1>Welcome to the Itinerary Planner</h1>
            <p>Plan your trips with ease and convenience!</p>
            <div className="buttons">
                <Link href="/login"><button>Login</button></Link>
                <Link href="/signup"><button>Sign Up</button></Link>
                {/* <Link href="/itinerary"><button>Create Itinerary</button></Link> */}
            </div>
            <style jsx>{`
                .home-container {
                    text-align: center;
                    margin: 50px;
                }
                .buttons {
                    margin-top: 20px;
                }
                button {
                    margin: 0 10px;
                    padding: 10px 20px;
                    font-size: 16px;
                    cursor: pointer;
                }
            `}</style>
        </div>
    );
};
export default HomePage;