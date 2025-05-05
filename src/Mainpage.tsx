import "@mantine/core/styles.css";
import { Container } from "@mantine/core";

import { TitleImage } from "./TitleImage";
import ReactMarkdown from "react-markdown";
import { longText } from "./Text";

export default function Main() {
  
  return <div>
    <TitleImage/>

    <Container size="lg">
        <ReactMarkdown>
        {longText}
        </ReactMarkdown>
    </Container>;
  </div>;
}
