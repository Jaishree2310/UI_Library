import { Meta, StoryObj } from '@storybook/angular';
import { CardComponent } from './card.component';

const meta: Meta<CardComponent> = {
  title: 'MyComponents/Card',
  component: CardComponent,
  tags: ['autodocs'],
  // Include action logging for outputs
  argTypes: {
    cardClick: { action: 'card clicked!' },
  },
};

export default meta;

type Story = StoryObj<CardComponent>;

export const Default: Story = {
  args: {
    title: 'Default Card',
    content: 'This is a basic card without an image or click action.',
  },
};

export const WithImage: Story = {
  args: {
    title: 'Card With Image',
    content: 'This card includes an image at the top.',
    imageUrl: 'https://picsum.photos/id/237/300/200',
  },
};

export const Clickable: Story = {
  args: {
    title: 'Clickable Card',
    content: 'Clicking this card will trigger an event.',
    imageUrl: 'https://picsum.photos/id/237/300/200',
    clickable: true,
  },
};
