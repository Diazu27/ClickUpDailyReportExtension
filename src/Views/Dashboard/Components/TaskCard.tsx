import { Task } from '@/interfaces/Request_interfaces'
import { Badge } from '../../../components/ui/badge'
import { Card, CardDescription, CardHeader, CardTitle } from '../../../components/ui/card'

interface TaskCardProps {
  task:Task
}

export const TaskCard = ({task}:TaskCardProps) => {
  

  return (
    <Card className='mb-2 mx-2'>
      <CardHeader>
          <CardTitle className='flex items-center justify-between'>
            <h1>Card Title</h1>
            <Badge style={{backgroundColor:'#33a069'}} >Por aprobar soporte</Badge>
          </CardTitle>
          <CardDescription>Card Description</CardDescription>
      </CardHeader>
    </Card>
  )
}
