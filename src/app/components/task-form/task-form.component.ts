import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Task } from '../../models/task.models';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css'
})
export class TaskFormComponent {

// Événement de sortie pour notifier l'ajout d'une nouvelle tâche
  @Output() taskAdded = new EventEmitter<Task>();

  // Formulaire de groupe pour gérer les champs du formulaire
  taskForm: FormGroup;

  // Constructeur pour initialiser le formulaire avec FormBuilder
  constructor(private fb: FormBuilder) {
    this.taskForm = this.fb.group({
      title: [''],
      description: [''],
      isVisible: [true]
    });
  }

  // Méthode appelée lors de la soumission du formulaire
  onSubmit() {
    if (this.taskForm.valid) {
      this.taskAdded.emit(this.taskForm.value);
      this.taskForm.reset({ isVisible: true });
    }
  }
}
