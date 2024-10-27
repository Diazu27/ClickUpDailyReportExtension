import { ChevronLeft } from "lucide-react"
import { Link } from "react-router-dom"
import { Input } from "../../components/ui/input"
import { Label } from "@radix-ui/react-label"
import { Button } from "../../components/ui/button"
import { useEffect, useState } from "react"

export const Settings = () => {
    const [ClickUpPersonalToken, setClickUpPersonalToken] = useState('');

    useEffect(() => { setClickUpPersonalToken(localStorage.getItem("ClickUpPersonalToken") || '') }, []);

    const SaveClickUpPersonalToken = () => {
        localStorage.setItem("ClickUpPersonalToken", ClickUpPersonalToken);
    }


  return (
    <>
        <div className="flex items-center mb-8">
            <Link to="/"><ChevronLeft className="mr-4"/></Link>
            <h1 className="text-xl font-extrabold">Settings</h1>
        </div>

        <div>
         <Label htmlFor="email">Personal ClickUp token</Label>
         <Input type="email" className="my-2" id="ClickUpPersonalToken" value={ClickUpPersonalToken}   
         onChange={(e) => setClickUpPersonalToken(e.target.value)}
         placeholder="pk_xxxxxxxxxxxxxx" />
         <Button type="submit" className="mt-5" onClick={SaveClickUpPersonalToken}>Guardar</Button>
        </div>
    </>
  )
}
