"use client";

import { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";
import { Button } from "components/components/ui/button";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const themeCtx = useContext(ThemeContext);
  if (!themeCtx) return null;
  
  const { theme, setTheme } = themeCtx;

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Button className='absolute right-5 bottom-5' variant="ghost" size="icon" onClick={toggleTheme}>
      {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className={`h-5 w-5 text-[#1e1e1e]`} />}
    </Button>
  );
}
