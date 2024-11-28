import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'password',
  standalone: true
})
export class PasswordPipe implements PipeTransform {
  
  transform(value: string): string {
    if (!value) {
      return '';
    }
    return value.replace(/(\d*)(\d{4})/, '************$2');
  }

}
