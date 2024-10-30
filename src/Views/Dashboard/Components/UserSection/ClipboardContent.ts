import { Teams, User } from "@/interfaces/Request_interfaces";

export function getClipboardContent(UserData:User, TeamData:Teams) {
return `Hola! ${UserData.username} 
¡Estoy trabajando en ${TeamData?.name}!
  
  
  p`;
}
