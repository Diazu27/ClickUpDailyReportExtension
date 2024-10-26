import { Badge } from '../../../components/ui/badge'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../../../components/ui/card'

enum TaskStatus {
  'Por aprobar soporte',
  'Notificar ventas',
  'Por aprobar cliente',
  'Por aprobar IR',
  'Parado',
  'En proceso desarrollo',
  'Reportado desarrollo',
}

export const TaskCard = () => {
  

  return (
    <Card>
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
