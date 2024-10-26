'use client'

import React, { useState } from 'react';


const Faqdown = ({ques,ans}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border border-gray-300 bg-white rounded-xl p-4 mb-4">
      <div
        onClick={toggleOpen}
        className="flex justify-between items-center cursor-pointer"
      >
        <span className="text-md font-semibold">
         {ques}
        </span>
        <span className="ml-4 text-xl">{isOpen ? '-' : '+'}</span>
      </div>
      {isOpen && (
        <div className="mt-2 bg-white p-2 rounded-lg shadow">
          <p>{ans}</p>
        </div>
      )}
    </div>
  );
};

export default Faqdown;
