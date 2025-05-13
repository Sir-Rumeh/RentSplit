
// import { Routes, Route, Navigate } from "react-router-dom";
// import { appPages } from './appRoutes';


// export default function AppRoutes() {
//   return (
//     <Routes>
//       {appPages.map((page, idx) => (
//         <Route key={idx} path={page.path} element={page.element} />
//       ))}
//       <Route path="/" element={<Navigate to="/login" replace />} />
      // <Route key={"login"} path="/login" element={<>Login</>} />
      // <Route key={"notifications"} path="/notifications" element={<>Notifications</>} />
      // <Route key={"chats"} path="/chats" element={<>Chats</>} />
//     </Routes>
//   );
// }

import { Routes, Route, Navigate } from "react-router-dom";
import React, { Suspense } from "react";
import { appPages } from "./appRoutes";

// Fallback UI while loading lazily imported components
const Loading = () => <div>Loading...</div>;

// Lazy imports for additional routes
// const Login = React.lazy(() => import("pages/Login"));
// const Notifications = React.lazy(() => import("pages/Notifications"));
// const Chats = React.lazy(() => import("pages/Chats"));

export default function AppRoutes() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        {appPages.map((page, idx,) => {
          const Element = page.element
          return <Route key={idx} path={page.path} element={Element} />
        })}

        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route key={"login"} path="/login" element={<>Login</>} />
      <Route key={"notifications"} path="/notifications" element={<>Notifications</>} />
      <Route key={"chats"} path="/chats" element={<>Chats</>} />
      </Routes>
    </Suspense>
  );
}
