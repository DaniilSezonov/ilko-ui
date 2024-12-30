import type { Meta } from '@storybook/react';
import { DefaultLayout, MainMenu, DefaultHeader, FontAwesomeIcon, SolidIcons } from '@ilko/ui-kit';

const meta: Meta<{dataTheme: "default" | "another", error: boolean}> = {
  component: ({ dataTheme, error }) => {
    return (
      <DefaultLayout
        dataTheme={dataTheme}
        menuRender={(props) => <MainMenu {...props} />}
        headerRender={(props) => 
          <DefaultHeader
            {...props} 
            errorSection={
              () => <>
               {error && <FontAwesomeIcon 
                  icon={SolidIcons.faExclamationTriangle}
                  style={{
                    color: "#A40000",
                    width: "43.3%",
                    height: "100%",
                    display: "flex",
                    justifySelf: "center",
                  }}
                />
                }
              </>
            }
          />}
      >
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
    error: true,
  },
};
