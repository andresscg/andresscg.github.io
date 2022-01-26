import React from "react";
import { DiMongodb, DiNodejs, DiReact,DiCss3Full, DiJavascript1, DiHtml5, DiBootstrap} from "react-icons/di";
import {SiRedux} from "react-icons/si"
import {RiReactjsLine} from "react-icons/ri"
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've been working with a range of technologies in the web and mobile
      development world.
    </SectionText>
    <List>
      <ListItem>
        <DiMongodb size="5rem" />
        <ListTitle>MongoDB</ListTitle>
      </ListItem>
      <ListItem>
        <DiNodejs size="5rem" />
        <ListTitle>NodeJs</ListTitle>
      </ListItem>
      <ListItem>
        <DiReact size="5rem" />
        <ListTitle>React</ListTitle>
      </ListItem>
      <ListItem>
        <SiRedux size="4rem" />
        <ListTitle>Redux</ListTitle>
      </ListItem>
      <ListItem>
        <DiCss3Full size="5rem" />
        <ListTitle>CSS</ListTitle>
      </ListItem>
      <ListItem>
        <DiJavascript1 size="5rem" />
        <ListTitle>JavaScript</ListTitle>
      </ListItem>
      <ListItem>
        <DiHtml5 size="5rem" />
        <ListTitle>HTML</ListTitle>
      </ListItem>
      <ListItem>
        <DiBootstrap size="5rem" />
        <ListTitle>Bootstrap</ListTitle>
      </ListItem>
      <ListItem>
        <RiReactjsLine size="5rem" />
        <ListTitle>React Native</ListTitle>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
