import { createHashRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "./components/theme-provider";
import { Dashboard } from "./Views/Dashboard/Dashboard";
import { Settings } from "./Views/Settings/Settings";


const router = createHashRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/settings",
    element: <Settings/>,
  },
]);

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <main className="p-4 w-full">
        <RouterProvider router={router} />
        
      </main>
    </ThemeProvider> 
  )
}