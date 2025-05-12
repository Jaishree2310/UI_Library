import { Meta, StoryFn } from '@storybook/angular';
import { ModalComponent } from './modal.component';

export default {
  title: 'MyComponents/Modal',
  component: ModalComponent,
  tags: ['autodocs'],
} as Meta<ModalComponent>;

const Template: StoryFn<ModalComponent> = (args: ModalComponent) => ({
  props: args,
  template: `
    <app-modal [visible]="visible" [title]="title">
      <p>This is a modal content area.</p>
    </app-modal>
  `,
});

export const Visible = Template.bind({});
Visible.args = {
  visible: true,
  title: 'Visible Modal',
};

export const Hidden = Template.bind({});
Hidden.args = {
  visible: false,
  title: 'Hidden Modal',
};
