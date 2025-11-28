"use client";

import * as React from "react";
import { Moon, Sun, Monitor } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const [mounted, setMounted] = React.useState(false);
  const { theme, setTheme } = useTheme();

  // Avoid hydration mismatch
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button
        variant="ghost"
        size="icon"
        className="h-9 w-9 border-2 border-border"
        aria-label="Toggle theme"
      >
        <Sun className="h-4 w-4" strokeWidth={3} />
      </Button>
    );
  }

  const cycleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else if (theme === "dark") {
      setTheme("system");
    } else {
      setTheme("light");
    }
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={cycleTheme}
      className="h-9 w-9 border-2 border-border hover:border-primary hover:bg-primary/10 transition-colors"
      aria-label={`Current theme: ${theme}. Click to change.`}
    >
      {theme === "light" && <Sun className="h-4 w-4 text-primary" strokeWidth={3} />}
      {theme === "dark" && <Moon className="h-4 w-4 text-primary" strokeWidth={3} />}
      {theme === "system" && <Monitor className="h-4 w-4 text-primary" strokeWidth={3} />}
    </Button>
  );
}

// Alternative: Dropdown theme toggle for more explicit control
export function ThemeToggleDropdown() {
  const [mounted, setMounted] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);
  const { theme, setTheme } = useTheme();

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button
        variant="ghost"
        size="icon"
        className="h-9 w-9 border-2 border-border"
        aria-label="Toggle theme"
      >
        <Sun className="h-4 w-4" strokeWidth={3} />
      </Button>
    );
  }

  return (
    <div className="relative">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsOpen(!isOpen)}
        className="h-9 w-9 border-2 border-border hover:border-primary hover:bg-primary/10 transition-colors"
        aria-label="Toggle theme menu"
        aria-expanded={isOpen}
      >
        {theme === "light" && <Sun className="h-4 w-4 text-primary" strokeWidth={3} />}
        {theme === "dark" && <Moon className="h-4 w-4 text-primary" strokeWidth={3} />}
        {theme === "system" && <Monitor className="h-4 w-4 text-primary" strokeWidth={3} />}
      </Button>

      {isOpen && (
        <>
          {/* Backdrop to close dropdown */}
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />

          <div className="absolute right-0 top-full mt-2 z-50 w-36 bg-card border-2 border-border shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <div className="p-1">
              <button
                onClick={() => {
                  setTheme("light");
                  setIsOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-3 py-2 text-sm font-bold hover:bg-primary/10 transition-colors ${
                  theme === "light" ? "bg-primary/10 text-primary" : ""
                }`}
              >
                <Sun className="h-4 w-4" strokeWidth={3} />
                Light
              </button>
              <button
                onClick={() => {
                  setTheme("dark");
                  setIsOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-3 py-2 text-sm font-bold hover:bg-primary/10 transition-colors ${
                  theme === "dark" ? "bg-primary/10 text-primary" : ""
                }`}
              >
                <Moon className="h-4 w-4" strokeWidth={3} />
                Dark
              </button>
              <button
                onClick={() => {
                  setTheme("system");
                  setIsOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-3 py-2 text-sm font-bold hover:bg-primary/10 transition-colors ${
                  theme === "system" ? "bg-primary/10 text-primary" : ""
                }`}
              >
                <Monitor className="h-4 w-4" strokeWidth={3} />
                System
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
