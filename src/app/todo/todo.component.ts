import { DatePipe, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { InputTextModule } from "primeng/inputtext";

interface task{
  nameTask:string,
  dateTime?: Date,
}

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [FormsModule, CalendarModule, DatePipe, NgIf, InputTextModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})

//deadline

export class TodoComponent {
  newTask:string = '';
  tasksArray:task[] = [];
  date?: Date = new Date(); //shows today's date

  onNewTask()
  {
    if(this.newTask.trim() === '')

      {
        alert("You must write something!")
      }
    else{     
      this.tasksArray.push({nameTask: this.newTask, dateTime: this.date});
    }
    this.newTask = '';
  }
  onRemoveTask(id:number){

    this.tasksArray.splice(id,1);
  }


}
