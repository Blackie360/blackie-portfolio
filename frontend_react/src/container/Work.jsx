import React from 'react';

const workItems = [
  {
    title: 'Project 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae ex non erat efficitur cursus.',
    imageSrc: "../assets/routerx.jpg", // Replace with your image path
  },
  {
    title: 'Project 2',
    description: 'Sed ut turpis et nulla accumsan semper. Vestibulum gravida tincidunt justo, at auctor libero.',
    imageSrc: "../assets/routerx.jpg",   // Replace with your image path
  },
  {
    title: 'Project 3',
    description: 'Fusce eget fringilla ex. Nulla facilisi. Vestibulum facilisis volutpat turpis vitae facilisis.',
    imageSrc: "frontend_react/src/assets/project3-image.jpg",  // Replace with your image path
  },
  {
    title: 'Project 4',
    description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
    imageSrc: "frontend_react/src/assets/project4-image.jpg", // Replace with your image path
  },
];

const Work = () => {
  return (
    <div className="bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {workItems.map((item, index, imageSrc) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
            <img
              src={item.imageSrc}
              alt={item.title}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
