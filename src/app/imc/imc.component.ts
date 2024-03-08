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

  calculate() {
    this.result = this.weight / (this.height * this.height);

    switch (true) {
      case this.result < 18.5:
        alert('Insufficient Weight');
        break;
      case this.result < 24.9:
        alert('Normal weight');
        break;
      case this.result < 26.9:
        alert('Overweight grade I');
        break;
      case this.result < 29.9:
        alert('Overweight grade II (pre-obesity)');
        break;
      case this.result < 34.9:
        alert('Type I obesity');
        break;
      case this.result < 39.9:
        alert('Type II obesity');
        break;
      case this.result < 49.9:
        alert('Type III obesity (morbid)');
        break;
      case this.result > 50:
        alert('Type VI obesity (extreme)');
        break;
      default:
        break;
    }
  }
}
