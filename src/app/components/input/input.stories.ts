import { Meta, StoryFn } from '@storybook/angular';
import { InputComponent } from './input.component';

export default {
  title: 'Components/Input',
  component: InputComponent,
  tags: ['autodocs'],
} as Meta<InputComponent>;

const Template: StoryFn<InputComponent> = (args: InputComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Enter something...',
};

export const CustomPlaceholder = Template.bind({});
CustomPlaceholder.args = {
  placeholder: 'Search here...',
};
