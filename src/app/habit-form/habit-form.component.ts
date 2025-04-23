import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HabitService } from '../services/habit.service';
import { Habit } from '../models/habit.model';

@Component({
  selector: 'app-habit-form',
  templateUrl: './habit-form.component.html',
  imports: [FormsModule],
})
export class HabitFormComponent {
  name: string = '';
  category: string = '';

  constructor(private habitService: HabitService) {}

  onSubmit() {
    const newHabit: Habit = {
      id: Date.now(),
      name: this.name,
      category: this.category,
      createdAt: new Date()
    };

    this.habitService.addHabit(newHabit);
    this.name = '';
    this.category = '';
  }
}
