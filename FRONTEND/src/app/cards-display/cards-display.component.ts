import { Component } from '@angular/core';
import { CreditCardsService } from '../services/credit-cards/credit-cards.service';
import { PasswordPipe } from '../pipes/password/password.pipe';

@Component({
  selector: 'cards-display',
  standalone: true,
  imports: [PasswordPipe],
  templateUrl: './cards-display.component.html',
  styleUrl: './cards-display.component.scss'
})
export class CardsDisplayComponent {

  constructor (private creditCardService: CreditCardsService) { }

  get cards() {
    return this.creditCardService.getCards();
  }
}
