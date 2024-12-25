import type { Meta } from '@storybook/react';
import { TestCard } from '@ilko/ui-kit';

const meta: Meta<typeof TestCard> = {
  component: TestCard,
  title: 'TestCard',
};
export default meta;

export const Primary = {
  args: {
    theme: '',
    padding: 0,
    disabled: false,
  },
};
