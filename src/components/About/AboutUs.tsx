import React, { useEffect, useState } from 'react';
import AboutItem from './AboutItem';
import axios from 'axios';

type AboutData = {
  id: number;
  title: string;
  description: string;
  icon: string;
  image: string;
};

const AboutUs = () => {
  const [aboutData, setAboutData] = useState<AboutData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/about-us.json');
        setAboutData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="max-w-screen-xl mx-auto my-12 px-6">
      <h1 className="text-4xl poppins pb-4">Why you choose us</h1>
      <p className="text-gray-500 text-sm poppins sm:w-2/4 w-full">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-8">
        {aboutData.map((item) => (
          <AboutItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
