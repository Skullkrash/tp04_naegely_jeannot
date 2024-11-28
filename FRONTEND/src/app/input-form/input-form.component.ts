import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule, FormsModule, FormControl  } from '@angular/forms';
import { DateMonthValidator } from '../shared/date-month.validator';
import { CreditCardsService, CreditCard } from '../services/credit-cards/credit-cards.service';
import { ContainsErrorDirective } from '../directives/contains-error/contains-error.directive';

@Component({
  selector: 'input-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, ContainsErrorDirective],
  providers: [DateMonthValidator],
  templateUrl: './input-form.component.html',
  styleUrl: './input-form.component.scss'
})
export class InputFormComponent {
  public credit_card_form: FormGroup;
  
  data_resume_visible: boolean = false;

  constructor(private formBuilder: FormBuilder, private creditCardsService: CreditCardsService) {
    this.credit_card_form = this.formBuilder.group({
      number: new FormControl('', [Validators.required, Validators.pattern('[0-9]*'), Validators.minLength(16), Validators.maxLength(16)]),
      owner: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z \-éèêàâçîïôûùäëïöü]+$')]),
      expiryDate: new FormControl('', [Validators.required, DateMonthValidator.dateMonthValidator]),
      ccv: new FormControl('', [Validators.required, Validators.pattern('[0-9]*'), Validators.minLength(3), Validators.maxLength(3)]),
    });
  }

  public number() {
    return this.credit_card_form.get('number');
  }

  public owner() {
    return this.credit_card_form.get('owner');
  }

  public expiryDate() {
    return this.credit_card_form.get('expiryDate');
  }

  public ccv() {
    return this.credit_card_form.get('ccv');
  }
  
  public onSubmit() {
    let newCard: CreditCard = { number: this.number()?.value, owner: this.owner()?.value, expiryDate: this.expiryDate()?.value, ccv: this.ccv()?.value};
    this.creditCardsService.addCard(newCard);
    this.credit_card_form.reset();
  }
}
