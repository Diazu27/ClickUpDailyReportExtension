import { BriefcaseBusiness, Clipboard } from 'lucide-react'
import { AvatarUser } from './components/AvatarUser'
import { Teams, TimeEntry, User } from '@/interfaces/Request_interfaces';
import { getClipboardContent } from './ClipboardContent';
interface UserSectionProps {
    TeamData: Teams;
    UserData:User;
    TimeEntryData:TimeEntry[];
}

export const UserSection = ({TeamData, UserData,TimeEntryData}:UserSectionProps) => {
  const CopyToClipboard = () => {
    navigator.clipboard.writeText(getClipboardContent(TimeEntryData));
  }

  return (
    <div className='flex items-center justify-between'>
        <div className='flex'>
          <AvatarUser UserData={UserData} />
          <div >
              <h4 className="text-md font-bold">¡Hola! {UserData.username} </h4>
              <span className="text-sm flex items-center"><BriefcaseBusiness className="w-[16px] mr-2" />{TeamData?.name}</span>  
          </div> 
        </div>
        <Clipboard className='mx-6 cursor-pointer' onClick={CopyToClipboard}/>
        
    </div>
  )
}
