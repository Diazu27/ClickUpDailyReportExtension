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
    return (
      <Avatar className="mr-4">
        <AvatarImage src={UserData.profilePicture} alt="@shadcn" />
        <AvatarFallback style={{backgroundColor:UserData.color}} className="font-bold">{UserData.initials}</AvatarFallback>
      </Avatar>
    )
  }
  