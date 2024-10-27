import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"
import { User } from "@/interfaces/Request_interfaces"
  
 interface AvatarUserProps {
  UserData: User;
 }

  export function AvatarUser({UserData}:AvatarUserProps) {

    const getInitials = (username:string) => {
      return username
        .split(' ') 
        .map(word => word[0])
        .join('') 
        .toUpperCase(); 
    };

    return (
      <Avatar className="mr-4">
        <AvatarImage src={UserData.profilePicture} alt="@shadcn" />
        <AvatarFallback style={{backgroundColor:UserData.color}} className="font-bold">{getInitials(UserData.username)}</AvatarFallback>
      </Avatar>
    )
  }
  