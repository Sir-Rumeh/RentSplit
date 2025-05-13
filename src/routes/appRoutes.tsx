import Dashboard from "../pages/Dashboard";
import Expenses from "../pages/Expenses";
import History from "../pages/History";
import RoommatesList from "../pages/RoommatesList";
import Reminders from "../pages/Reminders";
// import Settings from "../pages/Settings";
import { Home, FileText, Users, Bell, } from 'lucide-react';
import { RoutesType } from 'utils/interfaces';
import {
  PieChart,
  // Settings2,
} from "lucide-react"

export const appPages:RoutesType[] = [
  {
    path: "/dashboard",
    url: "/dashboard",
    element: <Dashboard />,
    name: "Dashboard",
    title: "Dashboard",
    Icon: Home,
  },
  {
    path: "/expenses",
    url: "/expenses",
    element: <Expenses />,
    name: "Expenses",
    title: "Expenses",
    // Icon: <FileText />,
    Icon: PieChart ,
  },
  {
    path: "/history",
    url: "/history",
    element: <History />,
    name: "History",
    title: "History",
    Icon: FileText ,
  },
  {
    path: "/roommates-list",
    url: "/roommates-list",
    element: <RoommatesList />,
    name: "RoommatesList",
    title: "RoommatesList",
    Icon: Users ,
  },
  {
    path: "/reminders",
    url: "/reminders",
    element: <Reminders />,
    name: "Reminders",
    title: "Reminders",
    Icon: Bell ,
  },
  // {
  //   path: "/settings",
  //   url: "/settings",
  //   element: <Settings />,
  //   name: "Settings",
  //   title: "Settings",
  //   Icon: Settings2,
  // }
];