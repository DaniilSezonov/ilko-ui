

import type { Meta } from '@storybook/react';
import { FontAwesomeIcon, RegularIcons, SolidIcons } from '@ilko/ui-kit';

const meta: Meta<typeof FontAwesomeIcon> = {
  component: () => {
    return (
      <>
      <h1>REGULAR ICONS</h1>
      <div style={{display: "flex", flexWrap: "wrap", gap: "8px"}}>
        {Object.keys(RegularIcons).map((iconName) =>
          <FontAwesomeIcon icon={RegularIcons[iconName]} size='2xl' title={iconName}/>
        )}
      </div>
      <h1>SOLID ICONS</h1>
      <div style={{display: "flex", flexWrap: "wrap", gap: "8px"}}>
        {Object.keys(SolidIcons).map((iconName) =>
            <FontAwesomeIcon icon={SolidIcons[iconName]} size='2xl' title={iconName}/>
          )}
        </div>
      </>
    )
  },
  title: 'FontAwesomeIcon',
};
export default meta;

export const Regular = {};
