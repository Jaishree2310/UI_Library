import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'storybook-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() label = 'Button';
  @Input() backgroundColor = '';
  @Input() primary = false;
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() disabled = false;

  @Output() onClick = new EventEmitter<Event>();

  public get classes(): string[] {
    const mode = this.primary ? 'storybook-button--primary' : 'storybook-button--secondary';
    return ['storybook-button', `storybook-button--${this.size}`, mode];
  }
}
