import { Component } from '@angular/core';
import { InputFormComponent } from './input-form/input-form.component';
import { CardsDisplayComponent } from './cards-display/cards-display.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [InputFormComponent, CardsDisplayComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'FRONTEND';
}
