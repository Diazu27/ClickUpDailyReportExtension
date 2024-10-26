import { Moon, Sun } from "lucide-react"
import { useTheme } from "../../../theme-provider"


export function ModeThemeToggle() {
  const { theme, setTheme } = useTheme();


  const ChangeThemeMode = () =>{
    setTheme(theme === "dark" ? "light" : "dark");
  }

  return (
      <button className="flex" onClick={ChangeThemeMode}>  
          <Sun className="rotate-0 scale-100 transition-all mr-4 dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute rotate-90 scale-0 transition-all mr-4 dark:rotate-0 dark:scale-100" />
      </button>
  )
}
