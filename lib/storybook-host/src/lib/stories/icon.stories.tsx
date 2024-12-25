

import type { Meta } from '@storybook/react';
import { FontAwesomeIcon, RegularIcons } from '@ilko/ui-kit';

const meta: Meta<typeof FontAwesomeIcon> = {
  component: () => {
    return (
      <div style={{display: "flex", flexWrap: "wrap", gap: "1px"}}>
        {Object.keys(RegularIcons).map((iconName) =>
          <FontAwesomeIcon icon={RegularIcons[iconName]} />
        )}
      </div>
    )
  },
  title: 'FontAwesomeIcon',
};
export default meta;

export const Regular = {};
