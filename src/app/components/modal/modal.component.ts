// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-modal',
//   imports: [],
//   templateUrl: './modal.component.html',
//   styleUrl: './modal.component.scss'
// })
// export class ModalComponent {

// }


import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  @Input() visible = false;
  @Input() title = 'Modal Title';
}
