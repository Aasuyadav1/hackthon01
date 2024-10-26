'use client'
import React, { Usable, useEffect, useState } from 'react'
import InstaCard from '@/components/insta-card'
import { getUser } from '@/lib/actions/services'


interface PageProps {
  params: Usable<{
    username: string;
  }>
}

const Page: React.FC<PageProps> = ({ params }) => {
    const p = React.use<{username: string}>(params)
  const [userData, setUserData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const response = await getUser(p.username);
       if(response){
        setUserData(response)
       }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch user data');
      } finally {
        setIsLoading(false);
      }
    };

    if (p.username) {
      fetchUserData();
    }
  }, [p.username]);

  if (isLoading) {
    return (
      <div className="min-h-screen grid place-content-center">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-[#F05161] border-t-transparent"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen grid place-content-center">
        <div className="text-red-500 text-center">
          <h2 className="text-2xl font-bold mb-2">Error</h2>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-2">
       <h1 className='text-2xl font-bold text-center mt-5'>User info</h1>
      {userData ? (
        <InstaCard user={userData} />
      ) : (
        <div className="text-center">
          <p>No user data found</p>
        </div>
      )}
    </div>
  );
}

export default Page;