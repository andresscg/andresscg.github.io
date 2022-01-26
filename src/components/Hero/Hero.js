import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";
import {saveAs} from 'file-saver'

const Hero = () => {
  const saveFile = () => {
    saveAs('https://drive.google.com/file/d/1ECcaMzIXEvOED-4IVCooquV7Zcg78SlV/view?usp=sharing')
  }
  return(
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi There! I'm Andres, <br />A FullStack Developer
      </SectionTitle>
      <SectionText>
        Welcome to my portfolio! If you'd like to learn more about me and my work to get in touch with me, please keep scrolling!
      </SectionText>
      <Button onClick={saveFile}>
        Download CV
      </Button>
    </LeftSection>
  </Section>
  )
};

export default Hero;
