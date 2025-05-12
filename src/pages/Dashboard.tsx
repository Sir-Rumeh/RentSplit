import React from 'react';
import DashboardLayout from '../layouts/DashboardLayout';

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {/* Replace these with components later */}
        <div className="bg-white dark:bg-[#1e1e1e] p-4 rounded shadow">Roommate Basics</div>
        <div className="bg-white dark:bg-[#1e1e1e] p-4 rounded shadow">Household Science</div>
        <div className="bg-white dark:bg-[#1e1e1e] p-4 rounded shadow">Global Finances</div>
        <div className="bg-white dark:bg-[#1e1e1e] p-4 rounded shadow">Document</div>
        <div className="bg-white dark:bg-[#1e1e1e] p-4 rounded shadow col-span-1 md:col-span-2">Your Plan</div>
        <div className="bg-white dark:bg-[#1e1e1e] p-4 rounded shadow">Transaction History</div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;