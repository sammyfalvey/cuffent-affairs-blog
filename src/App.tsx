import "@mantine/core/styles.css";
import { AppShell, MantineProvider, Image, Group, Button, Burger } from "@mantine/core";
import { theme } from "./theme";
import { useHeadroom, useMediaQuery } from "@mantine/hooks";
import Main from "./Mainpage";

export default function App() {
  const pinned = useHeadroom({ fixedAt: 100 });
 
  const isSmallScreen = useMediaQuery('(max-width: 700px)');
  
  return <MantineProvider theme={theme}>
      <AppShell
        header={{ height: "60px", collapsed: !pinned, offset: false }}
    >
      <AppShell.Header >
       <Group  p="10px" justify="space-between">
        <Image   w="60px" src="./assets/logo.png"></Image>
        { isSmallScreen ?
          <Burger p="0"></Burger>
        : <Group   gap="sm"  pr="15px">
          <Button  ff="outfit" fw="400" fz="16px" variant="default" bd="none" >Research</Button>
          <Button   ff="outfit" fw="400" fz="16px" variant="default" bd="none" >Articles</Button>
          <Button  ff="outfit" fw="400" fz="16px" variant="default" bd="none" >About</Button>
          <Button   ff="outfit" fw="400" fz="16px" variant="default" bd="none" >Newsletter</Button>
        </Group>}
        </Group>
      </AppShell.Header>

      <AppShell.Main p="0px">
       <Main></Main>
      </AppShell.Main>

    </AppShell>
  </MantineProvider>;
}
