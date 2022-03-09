import { Task } from './task';
import { Model } from 'mongoose';
export declare class TaskService {
    private readonly taskModel;
    constructor(taskModel: Model<Task>);
    getAll(): Promise<(Task & {
        _id: any;
    })[]>;
    getById(id: string): Promise<Task & {
        _id: any;
    }>;
    create(task: Task): Promise<Task & {
        _id: any;
    }>;
    update(id: string, task: Task): Promise<Task & {
        _id: any;
    }>;
    delete(id: string): Promise<import("mongodb").DeleteResult>;
}
