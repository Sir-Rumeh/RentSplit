import { Routes, Route, Navigate } from "react-router-dom";
import { Suspense } from "react";
import { appPages } from "./appRoutes";
import DashboardLayout from 'layouts/DashboardLayout';

const Loading = () => <div>Loading...</div>;

// Lazy imports for additional routes
// const Login = React.lazy(() => import("pages/Login"));
// const Notifications = React.lazy(() => import("pages/Notifications"));
// const Chats = React.lazy(() => import("pages/Chats"));

export default function AppRoutes() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route element={<DashboardLayout/>}>
          {appPages.map((route) => {
            return <Route key={route.path} path={route.path} element={route.element} />
          })}
          <Route key={"notifications"} path="/notifications" element={<>Notifications</>} />
          <Route key={"chats"} path="/chats" element={<>Chats</>} />
        </Route>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route key={"login"} path="/login" element={<>Login</>} />
      </Routes>
    </Suspense>
  );
}
