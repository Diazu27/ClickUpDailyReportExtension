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
      const resp = await fetch(`https://api.clickup.com/api/v2/team/${teamId}/time_entries`, {
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
        <div className="flex mb-4 mt-5">
            <CalendarCheck className="w-[18px] mr-2" />
            <h5 className="font-bold mb-1">Tus tareas de hoy</h5>
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
