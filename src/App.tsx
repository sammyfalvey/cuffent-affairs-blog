import "@mantine/core/styles.css";
import { AppShell, MantineProvider } from "@mantine/core";
import { theme } from "./theme";
import { useHeadroom } from "@mantine/hooks";
import Main from "./Mainpage";

export default function App() {
  const pinned = useHeadroom({ fixedAt: 100 });
 
  
  return <MantineProvider theme={theme}>
      <AppShell
        header={{ height: 60, collapsed: !pinned, offset: false }}
      padding="md"
      w="100%"
    >
      <AppShell.Header>
        <div>Logo</div>
      </AppShell.Header>

      <AppShell.Main p="0px">
       <Main></Main>
      </AppShell.Main>

    </AppShell>
  </MantineProvider>;
}
