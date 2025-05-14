import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgIf } from '@angular/common'; // Use NgIf instead of CommonModule

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NgIf], 
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() title: string = 'Card Title';
  @Input() content: string = 'Card content goes here.';
  @Input() imageUrl?: string;
  @Input() clickable: boolean = false;

  @Output() cardClick = new EventEmitter<void>(); 
  onCardClick() {
    if (this.clickable) {
      this.cardClick.emit();
    }
  }
}
