import React from 'react';

const AboutItem = ({
  id,
  image,
  icon,
  title,
  description,
}: {
  id: number;
  image: string;
  icon: string;
  title: string;
  description: string;
}) => {
  return (
    <div className="bg-white transform transition duration-700 hover:scale-105 p-6 rounded-2xl hover:shadow-xl">
      <div className="overflow-hidden rounded-2xl flex flex-grow">
        <img
          className="transform transition duration-700 hover:scale-125 w-full h-auto"
          src={image}
          alt={title}
        />
      </div>
      <div className="flex mt-6 space-x-3 ">
        <div>
          <img src={icon} alt={title} className="w-36" />
        </div>
        <div className="flex flex-col space-y-3">
          <h1 className="text-xl text-gray-800 poppins">{title}</h1>
          <p className="text-sm text-gray-500 poppins">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutItem;
