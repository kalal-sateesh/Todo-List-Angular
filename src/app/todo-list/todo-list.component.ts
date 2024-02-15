import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
  tasks=[
    {
      id:1,
      title:"The Dark Knight",
      checked:false
    },
    {
      id:2,
      title:"The Godfather",
      checked:false
    },
    {
      id:3,
      title:"Inception",
      checked:false
    },
    {
      id:4,
      title:"The Shawshank Redemption",
      checked:false
    },
    {
      id:5,
      title:"Forrest Gump",
      checked:false
    },
    {
      id:6,
      title:"The Lord of the Rings",
      checked:false
    },
    {
      id:7,
      title:"Angry Men",
      checked:false
    },
    {
      id:8,
      title:"Avatar",
      checked:false
    }
  ];
  
  newTask:string="";
  checked:boolean=false;
  editIndex: number | null = null;
  serchTask:string="";

  addTask(){
    if(this.editIndex !== null){
      this.tasks[this.editIndex].title = this.newTask
      this.newTask = ""
      this.editIndex=null
    }else{
      this.tasks.unshift({
        id:this.tasks.length+1,
        title:this.newTask,
        checked:this.checked
      })
      this.newTask=""
    }
  }

  editTask(task:string,index:number){
    this.newTask = task;
    this.editIndex = index;
  }

  deleteTask(task:number){
    this.tasks=this.tasks.filter((ele)=>ele.id!=task)
  }

  disableButton(){
    return this.editIndex !== null;
  }

  get searchedTask(){
    return this.tasks.filter(ele=>ele.title.toLowerCase().includes(this.serchTask.toLowerCase()))
  }
}
