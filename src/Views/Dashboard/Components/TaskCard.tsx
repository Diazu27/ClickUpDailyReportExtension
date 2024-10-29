import { Task } from '@/interfaces/Request_interfaces'
import { Badge } from '../../../components/ui/badge'
import { Card, CardDescription, CardHeader, CardTitle } from '../../../components/ui/card'
import { SquareArrowOutUpRight } from 'lucide-react'

interface TaskCardProps {
  task:Task,
  task_url:string
}

export const TaskCard = ({task,task_url}:TaskCardProps) => {
  

  return (
    <Card className='mb-2 mx-2'>
      <CardHeader>
          <CardTitle className='flex items-center justify-between'>
            <h1 className='text-sm'>{task.name}</h1>
          </CardTitle>
          <CardDescription className='flex justify-between'>
          <Badge style={{backgroundColor:task.status.color}} className='font-bold text-white text-[10px]' >{task.status.status.toUpperCase()}</Badge>
          <a href={task_url} target="_blank">
            <SquareArrowOutUpRight className='cursor-pointer w-[18px]'/>
          </a>
          </CardDescription>
      </CardHeader>
    </Card>
  )
}
