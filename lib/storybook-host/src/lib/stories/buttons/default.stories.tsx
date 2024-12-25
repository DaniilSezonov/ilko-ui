import type { Meta } from '@storybook/react';
import { DefaultButton } from '@ilko/ui-kit';

const meta: Meta<typeof DefaultButton> = {
  component: ({ children, type }) => <DefaultButton type={type}>{children}</DefaultButton>,
  title: 'DefaultButton',
  argTypes: {
    type: {
      options: ['primary', 'inverse'],
      control: {
        type: 'radio',
      },
    },
  },
};
export default meta;
export const Primary = {
  args: {
    type: 'primary',
    children: "Button",
  },
};
