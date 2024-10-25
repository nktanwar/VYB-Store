'use client';
import { useState } from 'react';

const DropdownButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          onClick={toggleDropdown}
          className="inline-flex justify-center w-full rounded-md  shadow-sm px-4 py-2 bg-primary text-white hover:bg-primary-dark "
        >
         
          <img
            src="/dropdown.svg" 
            alt="Dropdown Icon"
            className="-mr-1  h-[41px] w-[100px]" 
          />
        </button>
      </div>

      {isOpen && (
        <div className="absolute right-0 z-10 mt-2 w-30 h-50 rounded-lg shadow-lg bg-black   ">
          <div className="py-1" role="none">
            <a
              href="#"
              className="block px-4 py-2 text-md text-white "
            >
              Profile
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-md text-white "
            >
            Dashboard
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-md text-white "
            >
              My Store
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownButton;
