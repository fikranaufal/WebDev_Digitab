import { ProjectCollection } from "./models/project";
import { SimpleTask } from "./models/task";

function renderProjectOption(){
    const selectedProjectEl=document.getElementById('selectedProject')
    const ProjectsEl = document.getElementById('projects')

    const collection = new ProjectCollection()
    collection.renderAsSelectOptions(ProjectsEl as HTMLSelectElement)

    ProjectsEl?.addEventListener('change',(e:any)=>{
        const value = collection.findProjectById(e.target.value);

        if(selectedProjectEl){
            selectedProjectEl.innerText=value?.name || ''
        }
    })
}

function validationInputTask(){
    const inputTaskEl=document.getElementById('task');
    console.log(inputTaskEl)
    inputTaskEl?.addEventListener('change', (e:any)=>{
        const taskInputEl=document.getElementById('taskInput')
        if(taskInputEl){
            taskInputEl.innerText=e.target.value || ''
        }
    })
}

validationInputTask()
renderProjectOption()

const task = new SimpleTask(1)

console.log("task", task)
console.log("Create task", task.create("buat fitur crud task"));
console.log("get all tasks", task.getAll());
console.log("find my id", task.findById("1227f2cda1e23"));
console.log("delete task", task.delete("1227f2cda1e23"));
console.log("get all deleted task", task.getAll());