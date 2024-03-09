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
  imagePath: string = '../assets/imcImages/IMC.jpg';

  calculate() {
    this.result = this.weight / (this.height * this.height);

    var sg = document.querySelectorAll('strong');

    document.getElementById('desc')?.classList.add('hidden');

    switch (true) {
      case this.result < 18.5:
        sg.forEach(function (element) {
          element.classList.remove('previous-class');
          element.classList.add('red');
        });
        this.description = 'Insufficient Weight';
        this.imagePath = '../assets/imcImages/Insufficient Weightt.jpg';
        break;
      case this.result < 24.9:
        this.description = 'Normal weight';
        sg.forEach(function (element) {
          element.classList.remove('previous-class');
          element.classList.add('green');
        });
        this.imagePath = '../assets/imcImages/Normal weightt.jpg';
        break;
      case this.result < 26.9:
        sg.forEach(function (element) {
          element.classList.remove('previous-class');
          element.classList.add('purple');
        });
        this.description = 'Overweight grade I';
        this.imagePath = '../assets/imcImages/Overweight grade I.jpg';
        break;
      case this.result < 29.9:
        sg.forEach(function (element) {
          element.classList.remove('previous-class');
          element.classList.add('yellow');
        });
        this.description = 'Overweight grade II (pre-obesity)';
        this.imagePath =
          '../assets/imcImages/Overweight grade II (pre-obesity).jpg';
        break;
      case this.result < 34.9:
        sg.forEach(function (element) {
          element.classList.remove('previous-class');
          element.classList.add('blue');
        });
        this.description = 'Type I obesity';
        this.imagePath = '../assets/imcImages/Type I obesity.jpg';
        break;
      case this.result < 39.9:
        sg.forEach(function (element) {
          element.classList.remove('previous-class');
          element.classList.add('orange');
        });
        this.description = 'Type II obesity';
        this.imagePath = '../assets/imcImages/Type II obesity .jpg';
        break;
      case this.result < 49.9:
        sg.forEach(function (element) {
          element.classList.remove('previous-class');
          element.classList.add('gray');
        });
        this.description = 'Type III obesity (morbid)';
        this.imagePath = '../assets/imcImages/Type III obesity (morbid).jpg';
        break;
      case this.result > 50:
        sg.forEach(function (element) {
          element.classList.remove('previous-class');
          element.classList.add('brown');
        });
        this.description = 'Type VI obesity (extreme)';
        this.imagePath = '../assets/imcImages/Type VI obesity (extreme).jpg';
        break;
      case this.height == null ||
        this.weight == null ||
        this.height === 0 ||
        this.weight === 0:
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

    setTimeout(() => {
      this.reset();
    }, 5000);

    document.getElementById('result')?.classList.remove('hidden');
  }
  reset(){
    this.height = null;
    this.weight = null;
    this.result = null;
    this.description = '';
    this.imagePath = '../assets/imcImages/IMC.jpg';

    var sg = document.querySelectorAll('strong');
    sg.forEach(function(element){
      element.classList.remove('previous-class', 'red', 'green', 'purple', 'yellow', 'blue', 'orange', 'gray', 'brown');
  });

  document.getElementById('desc')?.classList.add('hidden');
  document.getElementById('result')?.classList.add('hidden');

  }
}
