import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../models/task.models';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent {

  // Propriété d'entrée pour recevoir les détails de la tâche
  @Input() task!: Task;

  // Événement de sortie pour notifier la suppression de la tâche
  @Output() taskDeleted = new EventEmitter<void>();

  // Méthode pour émettre l'événement de suppression de la tâche
  deleteTask() {
    this.taskDeleted.emit();
  }
}
