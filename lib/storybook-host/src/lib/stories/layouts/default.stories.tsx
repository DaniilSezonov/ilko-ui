import type { Meta } from '@storybook/react';
import { DefaultLayout } from  "@ilko/ui-kit"

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

export const Primary = {
  args: {
    text: '',
    padding: 0,
    disabled: false,
  },
};
