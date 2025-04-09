   "use client";

   import React, { ReactNode, useEffect, useState } from "react";

   type Theme = "light" | "dark" | "system";

   export function ThemeProvider({ children }: { children: ReactNode }) {
   const [theme, setTheme] = useState<Theme>(() => {
      if (typeof window !== "undefined") {
         return (localStorage.getItem("theme") as Theme) || "system";
      }
      return "system";
   });

   useEffect(() => {
      const root = document.documentElement;
      console.log("root", root);
      const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      
      if (theme === "dark" || (theme === "system" && systemDark)) {
         root.classList.add("dark");
      } else {
         root.classList.remove("dark");
      }

      localStorage.setItem("theme", theme);
   }, [theme]);

   return (
      <ThemeContext.Provider value={{ theme, setTheme }}>
         {children}
      </ThemeContext.Provider>
   );
   }

   export const ThemeContext = React.createContext<{
   theme: Theme;
   setTheme: (theme: Theme) => void;
   } | null>(null);
