import Dashboard from "../pages/Dashboard";
import Expenses from "../pages/Expenses";
import History from "../pages/History";
import RoommatesList from "../pages/RoommatesList";
import Reminders from "../pages/Reminders";
import Settings from "../pages/Settings";

import { Home, FileText, Users, Bell, } from 'lucide-react';
import { RoutesType } from 'utils/interfaces';

export const appPages:RoutesType[] = [
  {
    path: "/dashboard",
    element: <Dashboard />,
    name: "Dashboard",
    icon: <Home />,
  },
  {
    path: "/expenses",
    element: <Expenses />,
    name: "Expenses",
    icon: <FileText />,
  },
  {
    path: "/history",
    element: <History />,
    name: "History",
     icon: <FileText />,
  },
  {
    path: "/roommates-list",
    element: <RoommatesList />,
    name: "RoommatesList",
    icon: <Users />,
  },
  {
    path: "/reminders",
    element: <Reminders />,
    name: "Reminders",
    icon: <Bell />,
  },
  {
    path: "/settings",
    element: <Settings />,
    name: "Settings",
    icon: <Bell />,
  }
];