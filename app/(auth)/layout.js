import DropdownButton from "./Dropdown";
import SearchBar from "./Searchbar";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center w-full px-4 py-5">
      {/* Left Section: Logo & Search Bar */}
      <div className="flex items-center gap-5">
        {/* Logo */}
        <div className="pt-1">
          <img src="/logo.png" alt="logo" className="w-12 h-auto" />
        </div>

        {/* Search Bar (Hidden on small screens, visible on medium and up) */}
        <div className="hidden md:block pt-1">
          <SearchBar />
        </div>
      </div>

      {/* Center Section: Links (Hidden on small screens, shown on medium and up) */}
      <div className="hidden md:flex gap-x-8 text-white font-semibold text-[16px] lg:text-[27px] pt-2">
        <div>For Creator</div>
        <div>Merchandise</div>
        <div>Brand</div>
        <div>Digital</div>
      </div>

      {/* Right Section: Dropdown Button */}
      <div className="flex items-center">
        <DropdownButton />
      </div>

      {/* Mobile Nav for smaller screens */}
      <div className="block md:hidden text-white">
        {/* This could be a mobile menu toggle (like a hamburger icon) */}
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
    </div>
  );
}
