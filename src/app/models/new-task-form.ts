import { required, schema } from "@angular/forms/signals";

export interface NewTaskFormModel {
    title: string;
    summary: string;
    dueDate: Date;
}

export const initialFormNewTask: NewTaskFormModel = {
    title: '',
    summary: '',
    dueDate: new Date()
}

export const NewTaskFormSchema = schema<NewTaskFormModel>((rootPath) => {
    required(rootPath.title, { message: 'Titulo é obrigatório'});
    required(rootPath.dueDate, { message: 'Data de vencimento é obrigatória'});
})