// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-input',
//   imports: [],
//   templateUrl: './input.component.html',
//   styleUrl: './input.component.scss'
// })
// export class InputComponent {

// }


import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  @Input() placeholder = 'Enter text';
}
