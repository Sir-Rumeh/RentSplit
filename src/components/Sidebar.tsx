import React from 'react';
import { Link } from 'react-router-dom';
import { appPages } from 'routes/appRoutes';

const Sidebar = () => {
    const activeRoute = (routeName: string) => {
    if (location.pathname.includes(routeName)) {
      return true;
    }
    return false;
  };
  return (
    <div className="w-64 bg-white dark:bg-[#1e1e1e] shadow h-full flex flex-col justify-between">
      <div>
        <div className="px-6 py-4 font-bold text-lg">Bill Splitting App</div>
        <ul className="space-y-2 px-4">
          {appPages.map(({ icon, name, path }) => {
            const isRouteActive = activeRoute(path);
            return ( <Link
              key={path}
              to={path}
              // onClick={(e) => {
              //   window.innerWidth < 1200 && closeSidebar(e);
              // }}v
            >
              <li key={name} className={`${isRouteActive ? "" : ""} flex items-center gap-3 p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer`}>
                {icon}
              <span>{name}</span>
            </li>
            </Link>)
          })}
        </ul>
      </div>
      <div className="px-6 py-4 text-sm">
        <button className="w-full text-left text-red-500 mt-2">Sign out</button>
      </div>
    </div>
  );
};
export default Sidebar