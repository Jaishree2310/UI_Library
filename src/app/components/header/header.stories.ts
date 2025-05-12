import { Meta, StoryFn } from '@storybook/angular';
import { HeaderComponent } from './header.component';

export default {
  title: 'MyComponents/Header',
  component: HeaderComponent,
  tags: ['autodocs'],
} as Meta<HeaderComponent>;

const Template: StoryFn<HeaderComponent> = (args: HeaderComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  title: 'My Awesome App',
};
