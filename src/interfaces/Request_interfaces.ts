export interface Teams {
    name: string;
    id: string;
}

export interface TimeEntry {
    id: string
    task: Task
    wid: string
    user: User
    billable: boolean
    start: string
    end: string
    duration: string
    description: string
    tags: any[]
    source: string
    at: string
    is_locked: boolean
    approval_id: any
    task_location: TaskLocation
    task_url: string
  }
  
  export interface Task {
    id: string
    name: string
    status: Status
    custom_type: any
  }
  
  export interface Status {
    status: string
    color: string
    type: string
    orderindex: number
  }
  
  export interface User {
    id?: string | number
    username?: string
    email?: string
    color?: string
    initials?: string
    profilePicture?: any
  }
  
  export interface TaskLocation {
    list_id: string
    folder_id: string
    space_id: string
  }
  