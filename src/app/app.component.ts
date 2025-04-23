import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HabitFormComponent } from './habit-form/habit-form.component';
import { HabitListComponent } from './habit-list/habit-list.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HabitFormComponent, HabitListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'testApp';
}
