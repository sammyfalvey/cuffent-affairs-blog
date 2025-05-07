import {Image, Title, Group, Stack, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

export function TitleImage() {
    const isSmallScreen = useMediaQuery('(max-width: 700px)');

    return  <div>
        <Group  pb="30px" pt="90px" px = "50px" bg="gray.1" align="top" justify="space-between">
            <Stack gap="0px" w = {isSmallScreen ? "100%" : "45%" }   miw="280px">
                <Title fz="54px" fw="600" order={1}> What Happened to Climate Concern in America? </Title>
                <Title fz="18px" pt="30px" pb="6px" fw="400"  order={2}>Sammy Falvey</Title>
                <Title fz="18px" fw="400" order={3}>May 5, 2025</Title>
            </Stack>
            <Stack gap="0px" w = {isSmallScreen ? "100%" : "50%" } >
                <Image src='./assets/trump_drill_baby_drill.webp'/>
               <Text ta="right" ff="Outfit" pt="5px" size="12px">Donald Trump on the campaign trail with message "drill baby drill," source: <a href="https://apnews.com/article/trump-energy-dominance-burgum-oil-council-24529ef90795fb854e4eb35f75c18247">Associated Press</a></Text>
            </Stack>
        </Group>
    </div>;
  
}