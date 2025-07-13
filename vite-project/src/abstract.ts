export interface ITask {
    id: string;
    task: string;
}

export abstract class Task {
    protected projectId: number;
    protected _tasks: ITask[];

    constructor(projectId: number) {
        this.projectId = projectId
        this._tasks = [
            {id: '1227f2cda1e23', task: 'example task'}
        ];
    }

    public first() {
        return this._tasks[0]
    }

    public last() {
        return this._tasks[this._tasks.length - 1]
    }

    public findById(id: string){
        let result;

        for (let i = 0; i < this._tasks.length; i++){
            if (id == this._tasks[i].id){
                result = this._tasks[i]
            }
        }

        return result;
        // return this._tasks.find(task=> task.id == id)
    }

    public getAll(){
        return this._tasks
    }

    public delete(taskId: string) {
        const taskIndex = this._tasks.findIndex(task => task.id == taskId)
        return this._tasks.splice(taskIndex,1)
    }
}
