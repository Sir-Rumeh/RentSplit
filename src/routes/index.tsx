import Dashboard from "../pages/Dashboard";
import Expenses from "../pages/Expenses";
import History from "../pages/History";
import RoommatesList from "../pages/RoommatesList";
import Reminders from "../pages/Reminders";
import Settings from "../pages/Settings";
import { Routes, Route, Navigate } from "react-router-dom";


export const appPages = [
  {
    path: "/dashboard",
    element: <Dashboard />,
    name: "Dashboard"
  },
  {
    path: "/expenses",
    element: <Expenses />,
    name: "Expenses"
  },
  {
    path: "/history",
    element: <History />,
    name: "History"
  },
  {
    path: "/roommates-list",
    element: <RoommatesList />,
    name: "RoommatesList"
  },
  {
    path: "/reminders",
    element: <Reminders />,
    name: "Reminders"
  },
  {
    path: "/settings",
    element: <Settings />,
    name: "Settings"
  }
];


export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      {appPages.map((page, idx) => (
        <Route key={idx} path={page.path} element={page.element} />
      ))}

    </Routes>
  );
}