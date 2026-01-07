import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { ChangeCalculatorComponent } from './app/change-calculator/change-calculator.component';

bootstrapApplication(ChangeCalculatorComponent, appConfig)
  .catch((err) => console.error(err));
