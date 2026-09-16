"use client";

export default function SearchBar() {
  return (
    <section className="bg-gradient-to-b from-[#FFF0E8] to-[#FFA8BF] pt-2 pb-6 px-4 sm:px-6 relative z-10">
      <div className="container mx-auto max-w-xl">
        <div className="relative flex items-center bg-white rounded-full shadow-md hover:shadow-lg transition-shadow p-1 pl-5">
          {/* Search Icon */}
          <div className="mr-3 flex items-center text-[#E91E8C]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          {/* Input */}
          <input
            type="text"
            placeholder="Search for burgers, shakes, desserts..."
            className="flex-1 py-2.5 text-gray-700 text-xs sm:text-sm font-medium outline-none bg-transparent placeholder:text-gray-400 placeholder:font-normal"
          />

          {/* Filter Button */}
          <button
            aria-label="Filter"
            className="w-10 h-10 bg-[#E91E8C] hover:bg-[#D81B60] transition-colors flex items-center justify-center rounded-full shadow flex-shrink-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L13 13.414V19a1 1 0 01-.553.894l-4 2A1 1 0 017 21v-7.586L3.293 6.707A1 1 0 013 6V4z"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
