import { Component } from '@angular/core';
import { Task } from '../../models/task.models';
import { ReactiveFormsModule } from '@angular/forms';
import { TaskFormComponent } from '../task-form/task-form.component';
import { TaskItemComponent } from '../task-item/task-item.component';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [ReactiveFormsModule, TaskFormComponent, TaskItemComponent],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
  // Tableau pour maintenir la liste des tâches
  tasks: Task[] = [];

  // Méthode pour ajouter une tâche à la liste
  addTask(task: Task) {
    this.tasks.push(task);
  }

  // Méthode pour supprimer une tâche de la liste par son index
  removeTask(index: number) {
    this.tasks.splice(index, 1);
  }

}

//composant parent
