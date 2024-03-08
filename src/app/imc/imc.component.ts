import { Component } from '@angular/core';

@Component({
  selector: 'app-imc',
  templateUrl: './imc.component.html',
  styleUrl: './imc.component.css',
})
export class IMCComponent {
  weight: any;
  height: any;
  result: any;
  description: string = '';




  calculate() {
    this.result = this.weight / (this.height * this.height);

    switch (true) {
      case this.result < 18.5:
        this.description = 'Insufficient Weight';
        break;
      case this.result < 24.9:
        this.description = 'Normal weight';
        break;
      case this.result < 26.9:
        this.description = 'Overweight grade I';
        break;
      case this.result < 29.9:
        this.description = 'Overweight grade II (pre-obesity)';
        break;
      case this.result < 34.9:
        this.description = 'Type I obesity';
        break;
      case this.result < 39.9:
        this.description = 'Type II obesity';
        break;
      case this.result < 49.9:
        this.description = 'Type III obesity (morbid)';
        break;
      case this.result > 50:
        this.description = 'Type VI obesity (extreme)';
        break;
      default:
        break;
    }

    this.result = this.result.toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
    document.getElementById('result')?.classList.remove('hidden');
  }
}
