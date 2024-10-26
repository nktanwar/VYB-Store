import DropdownButton from "./Dropdown";
import SearchBar from "./Searchbar";
import Image from "next/image";
export default function Navbar() {
    return (
        <div className="flex flex-wrap justify-between w-full pt-5 gap-x-4 md:gap-x-16 md:px-6">
          
            <div className="flex items-center gap-2">
              
                <div className=" md:ml-0">
                    <Image src="/logo.png" alt="logo" className="w-28 md:w-auto"
                    height={28}
                    width={26} />
                </div>

               
                <div className="md:pt-3 flex-grow">
                    <SearchBar />
                </div>
            </div>

           
            <div className="hidden md:flex gap-x-8 text-white font-semibold text-[27px] pt-3">
                <div>For Creator</div>
                <div>Merchandise</div>
                <div>Brand</div>
                <div>Digital</div>
            </div>

            <div className="block md:hidden text-white mr-3 mt-5">
                    <button>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                </div>


            <div className="hidden md:flex items-center space-x-4">
               
                <DropdownButton />

              
                
            </div>
        </div>
    );
}
