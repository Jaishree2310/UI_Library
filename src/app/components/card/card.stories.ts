// import { Meta, Story } from '@storybook/angular';
import { Meta, StoryFn } from '@storybook/angular';

import { CardComponent } from './card.component';

export default {
  title: 'Components/Card',
  component: CardComponent,
  tags: ['autodocs'],
} as Meta;

const Template: StoryFn<CardComponent> = (args: CardComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  title: 'Storybook Card',
  content: 'This is a simple card layout used for showcasing Storybook component.',
};
