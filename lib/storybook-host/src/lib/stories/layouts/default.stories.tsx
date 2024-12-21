import type { Meta, StoryObj } from '@storybook/react';
import { DefaultLayout } from  "@ilko/ui-kit"
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof DefaultLayout> = {
  component: () => {
    return (
      <DefaultLayout>
        <div style={{backgroundColor: "#10101010"}}>1</div>
        <div style={{backgroundColor: "#F0000010"}}>2</div>
        <div style={{backgroundColor: "#001FF050"}}>3</div>
      </DefaultLayout>
    )
  },
  title: 'DefaultLayout',
};
export default meta;
type Story = StoryObj<typeof DefaultLayout>;

export const Primary = {
  args: {
    text: '',
    padding: 0,
    disabled: false,
  },
};

export const Heading: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to MyButton!/gi)).toBeTruthy();
  },
};