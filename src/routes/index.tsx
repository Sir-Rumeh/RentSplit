
import { Routes, Route, Navigate } from "react-router-dom";
import { appPages } from './appRoutes';


export default function AppRoutes() {
  return (
    <Routes>
      {appPages.map((page, idx) => (
        <Route key={idx} path={page.path} element={page.element} />
      ))}
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      <Route key={"notifications"} path="/notifications" element={<>Notifications</>} />
      <Route key={"chats"} path="/chats" element={<>Chats</>} />
    </Routes>
  );
}