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

    var sg = document.querySelectorAll('strong');

    sg.forEach(function (element) {
      element.classList.remove('attention');
      element.classList.add('attention');
    });

    document.getElementById('desc')?.classList.add('hidden');

    switch (true) {
      case this.result < 18.5:
        this.description = 'Insufficient Weight';
        break;
      case this.result < 24.9:
        this.description = 'Normal weight';
        sg.forEach(function (element) {
          element.classList.remove('attention');
          element.classList.add('normal');
        });
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
      case this.height == null || this.weight == null:
        document.getElementById('desc')?.classList.remove('hidden');
        this.description = 'Please enter both numbers';
        return;
        case this.height == 0 || this.weight == 0:
        document.getElementById('desc')?.classList.remove('hidden');
        this.description = 'Please enter both numbers';
        return;
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
