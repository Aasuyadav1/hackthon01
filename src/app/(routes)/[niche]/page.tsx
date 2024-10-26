'use client'
import React, { useEffect, useState } from 'react';

const InstagramPage = ({ params }: { params: string }) => {
  const [data, setData] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchInstagramData = async () => {
      const url = `https://instagram-scraper-api3.p.rapidapi.com/media_by_keyword?query=${params}`;
      const options = {
        method: 'GET',
        headers: {
          'x-rapidapi-key': 'b5761ad85bmshc01544d0ec7e6a5p116457jsn6d89064ed9a2',
          'x-rapidapi-host': 'instagram-scraper-api3.p.rapidapi.com'
        }
      };

      try {
        const response = await fetch(url, options);
        const result = await response.text();
        setData(result);
        // console.log(result.data.media_grid)
      } catch (err: any) {
        setError(`Error fetching data: ${err.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchInstagramData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>Instagram Media by Keyword</h1>
      <pre>{data}</pre>
    </div>
  );
};

export default InstagramPage;
