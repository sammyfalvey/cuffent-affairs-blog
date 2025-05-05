import {Image, Title, Group, Stack } from "@mantine/core";

export function TitleImage() {

  return  <div>
        <Group  pb="30px" pt="90px" px = "50px" bg="gray.1" align="top" justify="space-between">
            <Stack gap="0px" w="30%" miw="375px">
                <Title fz="52px" fw="600" order={1}> What Happened to Climate Concern in America? </Title>
                <Title pt="30px" pb="10px" fw="400"  order={2}>Sammy Falvey</Title>
                <Title fw="400" order={3}>May 5, 2025</Title>
            </Stack>
            <Image w = "59%" src='./assets/trump_drill_baby_drill.jpeg'/>
        </Group>
    </div>;
  
}