import { CalendarCheck } from "lucide-react"
import { Navbar } from "../../components/Navbar/Navbar"
import { TaskCard } from "./Components/TaskCard"
import { useEffect, useState } from "react"
import { Teams, TimeEntry, User } from "@/interfaces/Request_interfaces"
import { UserSection } from "./Components/UserSection/UserSection"




export const Dashboard = () => {
  const [TeamData, setTeamData] = useState<Teams>({ id: '', name: '' });
  const [UserData, setUserData] = useState<User>({});
  const [TimeEntryData, setTimeEntryData] = useState<TimeEntry[]>([]);
  const ClickUpPersonalToken = localStorage.getItem("ClickUpPersonalToken") || '';
  const [TodayDate, setTodayDate] = useState(new Date());


  const fetchTeamData = async () => {
    try {
      const resp = await fetch(`https://api.clickup.com/api/v2/team`, {
        method: 'GET',
        headers: {
          Authorization: `${ClickUpPersonalToken}`
        }
      });
      const data = await resp.json();
      setTeamData(data.teams[0]);
    } catch (error) {
      console.error("Error fetching team data:", error);
    }
  };
  
  const fetchUserData = async () => {
    try {
      const resp = await fetch(`https://api.clickup.com/api/v2/user`, {
        method: 'GET',
        headers: {
          Authorization: `${ClickUpPersonalToken}`
        }
      });
      const data = await resp.json();
      setUserData(data.user);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };
  
  const fetchTaskData = async (teamId: string) => {
    try {
      const TodayDate = new Date();
      const InitialTime = TodayDate.setHours(0,0,0,0); 
      const FinalTime = TodayDate.setHours(23,59,59,999);

      const params = new URLSearchParams({
        start_date: InitialTime.toString(),
        end_date: FinalTime.toString()
      }).toString();


      const resp = await fetch(`https://api.clickup.com/api/v2/team/${teamId}/time_entries?${params}`, {
        method: 'GET',
        headers: {
          Authorization: `${ClickUpPersonalToken}`
        }
      });
      
      const data = await resp.json();
      setTimeEntryData(data.data);
    } catch (error) {
      console.error("Error fetching task data:", error);
    }
  };
  
  const fetchAllData = async () => {
    await fetchTeamData();
    await fetchUserData();
  };
  
  useEffect(() => {
    fetchAllData();
    setTodayDate(new Date());
  }, []);
  
  useEffect(() => {
    if (TeamData.id) {
      fetchTaskData(TeamData.id);
    }
  }, [TeamData]);
  

  return (
    <div className="w-full h-full flex flex-col">
    <Navbar />
    <UserSection TeamData={TeamData} UserData={UserData} />
    <div className="flex flex-col flex-grow">
        <div className="flex mb-4 mt-5 items-center justify-between">
            <div className="flex items-center">
            <CalendarCheck className="w-[18px] mr-2" />
            <h5 className="font-bold mb-1">Tus tareas de hoy</h5>
            </div>
            <div>
            <h6 className="text-[10px] font-light bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-lg uppercase">{TodayDate.toLocaleDateString("es-MX",{weekday:'short',day:'numeric', month:"short", year:"numeric"})}</h6>
            </div>
        </div>
        <div className="overflow-y-scroll max-h-[320px]"> {/* Ajusta la altura máxima según sea necesario */}
            {
                TimeEntryData.map((task) => (
                    <TaskCard task={task.task} task_url={task.task_url} key={task.id} />
                ))
            }
        </div>
    </div>
</div>

  )
}
