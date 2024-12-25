import type { Meta } from '@storybook/react';
import { DefaultLayout } from '@ilko/ui-kit';

const meta: Meta<typeof DefaultLayout> = {
  component: ({ dataTheme }) => {
    return (
      <DefaultLayout dataTheme={dataTheme}>
        <div style={{ backgroundColor: '#10101010' }}>1</div>
        <div style={{ backgroundColor: '#F0000010' }}>2</div>
        <div style={{ backgroundColor: '#001FF050' }}>3</div>
      </DefaultLayout>
    );
  },
  argTypes: {
    dataTheme: {
      options: ['default', 'another'],
      control: {
        type: 'radio',
      },
    },
  },
  title: 'DefaultLayout',
};
export default meta;

export const Primary = {
  args: {
    dataTheme: 'default',
  },
};
