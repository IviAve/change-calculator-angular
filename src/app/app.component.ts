import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChangeCalculatorComponent } from './change-calculator/change-calculator.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ChangeCalculatorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'change-calculator-angular';
}
