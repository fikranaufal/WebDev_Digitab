import { generateId } from "../utilities";
import { Task } from "../abstract";

export class SimpleTask extends Task {
    public create(task: string){
        const newtask = {
            id: generateId(),
            task
        }
        
        this._tasks.push(newtask)
        return newtask
        }

    public update(taskId: string, task: string){
        const currentTask = this.findById(taskId);
        if (currentTask) {
            currentTask.task = task;
            return currentTask
        }

        throw Error("task not found")
    }
}