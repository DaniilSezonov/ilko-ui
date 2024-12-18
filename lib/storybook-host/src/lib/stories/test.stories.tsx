import type { Meta, StoryObj } from '@storybook/react';
import { TestCard } from  "@ilko/ui-kit"
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof TestCard> = {
  component: TestCard,
  title: 'TestCard',
};
export default meta;
type Story = StoryObj<typeof TestCard>;

export const Primary = {
  args: {
    text: '',
    padding: 0,
    disabled: false,
  },
};

export const Heading: Story = {
  args: {
    text: '',
    padding: 0,
    disabled: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to MyButton!/gi)).toBeTruthy();
  },
};