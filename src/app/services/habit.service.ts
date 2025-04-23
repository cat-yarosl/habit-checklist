import { Injectable } from '@angular/core';
import { Habit } from '../models/habit.model';

@Injectable({
  providedIn: 'root'
})
export class HabitService {
  private habits: Habit[] = [];

  constructor() { }

  getHabits(): Habit[] {
    return this.habits;
  }

  addHabit(habit: Habit): void {
    this.habits.push(habit);
  }
}
