import React from 'react'
import Image from 'next/image'

const InstaCard = () => {
  return (
    <div className='flex justify-center items-center'>
        <div className='instagrad p-2 rounded-md grid place-content-center max-w-7xl w-full py-10 '>
            <div className='bg-white rounded-xl border px-20 py-4 w-full'>
                    <Image
                     src={"https://plus.unsplash.com/premium_photo-1676998930980-fc6d4922c0b7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"}
                     alt="insta"
                     height={1000}
                     width={1000}
                     className='max-w-[150px] aspect-square rounded-full  mx-auto'
                    />

                    <div className='mt-10 flex flex-col gap-2'>
                        <span className='flex gap-2'>
                            <p>Username:</p>
                            <p>Bhuvan Bam</p>
                        </span>
                        <span className='flex gap-2'>
                            <p>Username:</p>
                            <p>Bhuvan Bam</p>
                        </span>
                        <span className='flex gap-2'>
                            <p>Username:</p>
                            <p>Bhuvan Bam</p>
                        </span>
                        <span className='flex gap-2'>
                            <p>Username:</p>
                            <p>Bhuvan Bam</p>
                        </span>
                        <span className='flex gap-2'>
                            <p>Username:</p>
                            <p>Bhuvan Bam</p>
                        </span>
                        <span className='flex gap-2'>
                            <p>Username:</p>
                            <p>Bhuvan Bam</p>
                        </span>
                    </div>

                    <button className='text-xl font-medium border border-[#4463DB] bg-white w-full rounded-full py-2 mt-10'>Confirm</button>
               
            </div>
        </div>
    </div>
  )
}

export default InstaCard