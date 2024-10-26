import React, { useState } from 'react';
import Image from 'next/image';
import DevModal from './dev-cmp/modal';
import { create_influencer } from '@/lib/actions/influencer';
import { toast } from 'sonner'; // Assuming you're using sonner for notifications



const InstaCard = ({ user}: { user: any; }) => {
  

  return (
    <div className='flex justify-center items-center h-full w-full mt-4 bg-gray-50 p-4'>
      <div className='instagrad p-2 rounded-md max-w-xl w-full'>
        <div className='bg-white rounded-xl border p-6 md:p-10 w-full'>
          {/* Previous JSX remains the same until the DevModal */}

          <div className='flex flex-col md:flex-row gap-8 items-center md:items-start'>
            {/* <Image
              src={"/api/placeholder/150/150"}
              alt={user.details.meta.accountName}
              height={150}
              width={150}
              className='rounded-full border-2 border-gray-200'
            /> */}
            
            <div className='flex-1'>
              {/* Username and Verify Badge */}
              <div className='flex items-center gap-2 mb-4'>
                <h1 className='text-xl font-medium'>{user.details.meta.username}</h1>
                {user.details.meta.isVerified && (
                  <span className='text-blue-500'>
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </span>
                )}
              </div>

              {/* Stats */}
              <div className='flex gap-6 mb-4 text-sm'>
                <span className='font-semibold'>
                  {user.details.stats.posts} posts
                </span>
                <span className='font-semibold'>
                  {user.details.stats.followers} followers
                </span>
                <span className='font-semibold'>
                  {user.details.stats.following} following
                </span>
              </div>

              {/* Bio */}
              <div className='space-y-1'>
                <h2 className='font-semibold'>{user.details.meta.accountName}</h2>
                <p className='whitespace-pre-wrap text-sm'>{user.details.meta.bio}</p>
              </div>
            </div>
          </div>

          {/* Posts Grid */}
          <div className='mt-10'>
            <h3 className='text-lg font-semibold mb-4'>Recent Posts</h3>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
              {user.details.posts.map((post :any, index: number) => (
                <div key={index} className='aspect-square relative rounded-lg overflow-hidden border'>
                  <Image
                    src={post.imageSrc}
                    alt={post.title}
                    fill
                    className='object-cover hover:opacity-90 transition-opacity'
                  />
                </div>
              ))}
            </div>
          </div>         
          
        </div>
      </div>
    </div>
  );
};

export default InstaCard;