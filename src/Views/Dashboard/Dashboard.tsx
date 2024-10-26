import { CalendarCheck } from "lucide-react"
import { Navbar } from "../../components/Navbar/Navbar"
import { TaskCard } from "./Components/TaskCard"

export const Dashboard = () => {
  return (
    <div className="w-full">
        <Navbar />

        <div className="">
            <div className="flex mb-4">
              <CalendarCheck className="w-[18px] mr-2" />
              <h5 className="font-bold mb-2">Tareas de hoy</h5>
            </div>
            <div>
                <TaskCard/>
            </div>
        </div>

    </div>
  )
}
