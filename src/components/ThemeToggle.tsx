import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { cn } from "../utils/cn";

type Theme = "dark" | "light";
const KEY = "avenuebits-theme";

function readTheme(): Theme {
  try {
    const saved = localStorage.getItem(KEY);
    if (saved === "light" || saved === "dark") return saved;
  } catch {
    /* sin almacenamiento: usa el modo oscuro original */
  }
  return "dark";
}

/** Botón de modo diurno / nocturno. Aplica data-theme en <html>. */
export default function ThemeToggle({ className }: { className?: string }) {
  const [theme, setTheme] = useState<Theme>(readTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    try {
      localStorage.setItem(KEY, theme);
    } catch {
      /* ignorar */
    }
  }, [theme]);

  const isLight = theme === "light";
  return (
    <button
      type="button"
      onClick={() => setTheme(isLight ? "dark" : "light")}
      aria-pressed={isLight}
      aria-label={isLight ? "Cambiar a modo nocturno" : "Cambiar a modo diurno"}
      title={isLight ? "Modo nocturno" : "Modo diurno"}
      className={cn(
        "inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full glass text-white ring-focus transition-transform duration-150 ease-out active:scale-[0.94]",
        className
      )}
    >
      {isLight ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
    </button>
  );
}
