import React from 'react';
import { Home, FileText, Users, Bell, } from 'lucide-react';

const menuItems = [
  { icon: <Home />, label: 'Dashboard' },
  { icon: <FileText />, label: 'Expenses' },
  { icon: <FileText />, label: 'History' },
  { icon: <Users />, label: 'Roommates List' },
  { icon: <Bell />, label: 'Reminders' },
];

const Sidebar = () => {
  return (
    <div className="w-64 bg-white dark:bg-[#1e1e1e] shadow h-full flex flex-col justify-between">
      <div>
        <div className="px-6 py-4 font-bold text-lg">Bill Splitting App</div>
        <ul className="space-y-2 px-4">
          {menuItems.map(({ icon, label }) => (
            <li key={label} className="flex items-center gap-3 p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer">
              {icon}
              <span>{label}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="px-6 py-4 text-sm">
        <button className="w-full text-left">Preferences</button>
        <button className="w-full text-left text-red-500 mt-2">Sign out</button>
      </div>
    </div>
  );
};
export default Sidebar