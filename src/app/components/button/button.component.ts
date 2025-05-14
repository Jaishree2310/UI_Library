import {Component, Input, Output, EventEmitter, signal, computed, effect} from '@angular/core';
import { NgClass, NgStyle } from '@angular/common';

@Component({
  selector: 'storybook-button',
  standalone: true,
  imports: [NgClass, NgStyle],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  // Inputs still need to use @Input()
  @Input() label = 'Button';
  @Input() backgroundColor = '';
  @Input() primary = false;
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() disabled = false;

  @Output() onClick = new EventEmitter<Event>();

  // Signal for internal state
  clickedCount = signal(0);

  // Computed signal for class list (auto-updates if dependencies change)
  classes = computed(() => {
    const mode = this.primary
      ? 'storybook-button--primary'
      : 'storybook-button--secondary';
    return ['storybook-button', `storybook-button--${this.size}`, mode];
  });

  // Optional effect for logging or reactions
  constructor() {
    effect(() => {
      console.log(`Button clicked ${this.clickedCount()} times`);
    });
  }

  handleClick(event: Event): void {
    this.clickedCount.update((count) => count + 1);
    this.onClick.emit(event);
  }
}
