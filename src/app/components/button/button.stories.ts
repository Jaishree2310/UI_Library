import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonComponent } from './button.component';

const meta: Meta<ButtonComponent> = {
  title: 'MyComponents/Button',
  component: ButtonComponent,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
    size: { control: 'radio', options: ['small', 'medium', 'large'] },
    primary: { control: 'boolean' },
    disabled: { control: 'boolean' },
    onClick: { action: 'clicked' },
  },
};

export default meta;
type Story = StoryObj<ButtonComponent>;

export const Primary: Story = {
  args: {
    primary: true,
    label: 'Primary Button',
  },
};

export const Secondary: Story = {
  args: {
    primary: false,
    label: 'Secondary Button',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Button',
    disabled: true,
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Large Button',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Small Button',
  },
};

export const CustomColor: Story = {
  args: {
    label: 'Custom Color',
    backgroundColor: '#FF69B4',
  },
};
