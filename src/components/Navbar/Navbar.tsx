import { Settings } from "lucide-react"
import { ModeThemeToggle } from "./components/toggleTheme/ModeThemeToggle"
import { Link } from "react-router-dom"

export const Navbar = () => {

  return (
    <div className="flex justify-between items-center mb-8">
      <h1 className="text-xl font-extrabold">
        Dashboard
      </h1>
      <div className="flex">
      <ModeThemeToggle/>
      <Link to="/settings"><Settings/></Link>
      </div>
    </div>
  )
}
