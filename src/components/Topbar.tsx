import React from 'react';

const Topbar = () => {
  return (
    <div className="bg-white dark:bg-[#1e1e1e] shadow px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-semibold">Dashboard</h1>
      <input
        type="text"
        placeholder="Search for expenses"
        className="px-4 py-2 border rounded w-1/3 dark:bg-[#2a2a2a] dark:text-white"
      />
    </div>
  );
};

export default Topbar;