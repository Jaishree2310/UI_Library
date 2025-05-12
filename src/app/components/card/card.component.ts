import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-card',
  standalone: true, 
  imports: [CommonModule], 
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
