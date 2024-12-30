import { DefaultLayout, DefaultHeader, MainMenu, FontAwesomeIcon, SolidIcons } from "@ilko/ui-kit";

export default function About() {
  const error = true;
  return (
    <DefaultLayout        
      menuRender={(props) => <MainMenu {...props} />}
      headerRender={(props) => 
        <DefaultHeader
          {...props} 
          errorSection={
            () => 
            <>
              {error && <FontAwesomeIcon 
                  icon={SolidIcons.faExclamationTriangle}
                  style={{
                    color: "#A40000",
                    width: "43.3%",
                    height: "100%",
                    display: "flex",
                    justifySelf: "center",
                  }}
                />}
            </>
          }
        />}>
      Index
    </DefaultLayout>
  )
}