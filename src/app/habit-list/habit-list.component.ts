import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HabitService } from '../services/habit.service';
import { Habit } from '../models/habit.model';

@Component({
  selector: 'app-habit-list',
  standalone: true,
  templateUrl: './habit-list.component.html',
  imports: [CommonModule],
})
export class HabitListComponent implements OnInit {
  habits: Habit[] = [];

  constructor(private habitService: HabitService) {}

  ngOnInit(): void {
    this.habits = this.habitService.getHabits();
  }
}
