
'use client'
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const Page = () => {
    const [reelsData, setReelsData] = useState([]);
    const [status, setStatus] = useState('');
    const [message, setMessage] = useState(null);
    const params = useParams()

    useEffect(() => {
        console.log(params)
        const url = `https://instagram-scraper-api3.p.rapidapi.com/media_by_keyword?query=shoes ${params.id}`
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '14309f080emsh1a143040a00eebfp138897jsn308793904a82',
                'x-rapidapi-host': 'instagram-scraper-api3.p.rapidapi.com'
            }
        };

        const fetchData = async () => {
            try {
                const response = await fetch(url, options);
                const result = await response.json();
                setStatus(result.status);
                setMessage(result.message);
                setReelsData(result.data.media_grid.sections[0].layout_content.fill_items || []); // Set reels_media data if available
                console.log(result.data.media_grid.sections[0].layout_content.fill_items[0].media.owner.full_name)
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            {!reelsData.length && <div className="loading-screen">
                <div className="cup">
                    <div className="handle" />

                </div>
            </div>}
            <div className="reels-container grid gap-5 grid-cols-2">
                {reelsData.map((item, index) => (
                    <div key={index} className="reel-card space-y-4 shadow bg-white border rounded-xl p-4">
                        <p className='text-2xl font-semibold'>{item.media.owner.full_name}</p>
                        <p>{item.media.owner.username}</p>
                        <p>Verified: {item.media.owner.is_verified ? "Yes" : "No"}</p>
                        <Link target='_blank' className='bg-blue-500/20 text-blue-500 rounded-full p-1 px-3' href={`/influencer/account/${item.media.owner.username}`}>View profile</Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Page;
