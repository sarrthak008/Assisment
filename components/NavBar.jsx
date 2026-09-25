"use client";

import React, { useEffect, useState } from "react";
import { useOpeartion } from "@/store/Operation";
import { useDebounce } from "@/utils/hooks";

const NavBar = () => {
  const { setSearch } = useOpeartion();

  const [input, setInput] = useState("");
  const debouncedValue = useDebounce(input, 500);

  useEffect(() => {
    setSearch(debouncedValue);
  }, [debouncedValue, setSearch]);

  return (
    <div className="h-16 w-full bg-white border-b border-gray-200 px-6 flex items-center justify-between sticky top-0 z-30">
      <div className="w-full max-w-sm relative">
        <i className="ri-search-line absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>

        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Search product..."
          className="w-full pl-10 text-black pr-3 py-2 rounded-lg border border-gray-300 outline-none focus:border-black"
        />
      </div>

      <button className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800">
        + Add Product
      </button>
    </div>
  );
};

export default NavBar;