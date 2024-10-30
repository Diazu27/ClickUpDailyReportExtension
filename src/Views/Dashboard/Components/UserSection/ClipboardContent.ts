import {TimeEntry } from "@/interfaces/Request_interfaces";

export function getClipboardContent(TimeEntryData: TimeEntry[]) {
    const TodayDate = new Date();
    const TodayDateStr = TodayDate.toLocaleDateString('es-ES', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

    return `¡Buen día! Mis avances el día de hoy ${TodayDateStr} son:\n\n` +
           TimeEntryData.map((entry) => {
               return `- Atención a ticket "${entry.task.name}" (${entry.task_url})`;
           }).join('\n');
}


  