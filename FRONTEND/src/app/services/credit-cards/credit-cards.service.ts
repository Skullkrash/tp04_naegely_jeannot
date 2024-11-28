import { effect, Injectable, signal, WritableSignal } from '@angular/core';
import { Signal } from '@angular/core';

export interface CreditCard {
  number: string;
  owner: string;
  expiryDate: string;
  ccv: string;
}

@Injectable({
  providedIn: 'root'
})
export class CreditCardsService {
  private creditCardsSignal: WritableSignal<CreditCard[]> = signal<CreditCard[]>([
    {
      number: '4234567890123456',
      owner: 'Danaé ALBRECHT--MARTIN',
      expiryDate: "12/2032",
      ccv: "123"
    },
    {
      number: '5234567890123456',
      owner: 'Jeannot NAEGELY',
      expiryDate: "03/2018",
      ccv: "421"
    },
  ]);
  
  constructor() { }

  public getCards() {
    return this.creditCardsSignal();
  }

  public addCard(newCard: CreditCard) {
    this.creditCardsSignal.update(cards => [...cards, newCard]);
  }

  public deleteCard(unwantedCard: CreditCard) {
    this.creditCardsSignal.update(cards => cards.filter((card) => { !(card === unwantedCard) }));
  }
}
