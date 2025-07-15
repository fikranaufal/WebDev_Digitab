import type { IProject, ProjectStatus } from "../interface";
import projects from "../projects.json"
import { Task } from "../abstract"
import { generateId } from "../utilities";

export class Project extends Task{
    public id: number;
    public name: string;
    public status: ProjectStatus;
    public manHour: number;

    constructor(data:Project){
        super(data.id);

        this.id=data.id;
        this.name=data.name;
        this.status=data.status;
        this.manHour=data.manHour;
    }

    public create(task: string) {
        const newtask = {
            id: generateId(),
            task 
        }

        this._tasks.push(newtask)
    }

    public update(taskId: string, task: string) {
        const currentTask = this.findById(taskId);
        if (currentTask) {
            currentTask.task = task;
        }

        throw Error("task not found")
    }
}

export class ProjectCollection{
    renderAsSelectOptions(selectEl:HTMLSelectElement){
        projects.forEach(project => {
            const projectOption=document.createElement('option')
            projectOption.value=project.id.toString()

            projectOption.innerText=project.name
            selectEl?.append(projectOption)
        })
    }
    findProjectById(id:number|string){
        return projects.find(pr=>pr.id==id)
    }
}