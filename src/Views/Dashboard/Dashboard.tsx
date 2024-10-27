import { CalendarCheck } from "lucide-react"
import { Navbar } from "../../components/Navbar/Navbar"
import { TaskCard } from "./Components/TaskCard"
import { useEffect, useState } from "react"
import { Teams, User } from "@/interfaces/Request_interfaces"
import { UserSection } from "./Components/UserSection/UserSection"




export const Dashboard = () => {

  const [TeamData, setTeamData] = useState<Teams>({id: '', name: ''});
  const [UserData, setUserData] = useState<User>({id: '', username: '', color: '', profilePicture: ''});
  const ClickUpPersonalToken = localStorage.getItem("ClickUpPersonalToken") || '';

  const fetchTeamData = async () => {
    try {
      const resp = await fetch(
        `https://api.clickup.com/api/v2/team`,
        {
          method: 'GET',
          headers: {
            Authorization: `${ClickUpPersonalToken}`
          }
        }
      );
      const TeamData = await resp.json();
      setTeamData(TeamData.teams[0]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchUserData = async () => {
    try {
      const resp = await fetch(
        `https://api.clickup.com/api/v2/user`,
        {
          method: 'GET',
          headers: {
            Authorization: `${ClickUpPersonalToken}`
          }
        }
      );
      const UserData = await resp.json();
      setUserData(UserData.user);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };


  useEffect(() => {
    fetchTeamData();
    fetchUserData();
  }, []);


  return (
    <div className="w-full">
        <Navbar />
       
        <div className="">
           <UserSection TeamData={TeamData} UserData={UserData}/>
            <div className="flex mb-4 mt-10">
              <CalendarCheck className="w-[18px] mr-2" />
              <h5 className="font-bold mb-2">Tus tareas de hoy</h5>
            </div>
            <div>
                <TaskCard/>
            </div>
        </div>

    </div>
  )
}
