import React, {useRef} from "react";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxCustom, Input, TextArea} from "./AcomplishmentsStyles";
import Button from "../../styles/GlobalComponents/Button";

const Acomplishments = () => (
  <Section>
    <SectionDivider />
    <br />
    <SectionTitle>Contact</SectionTitle>
    <Boxes>
      <Box>
        <BoxNum>Name</BoxNum>
        <Input type="text" name="user_name" />
      </Box>
      <Box>
        <BoxNum>Email</BoxNum>
        <Input type="email" name="user_email" />
      </Box>
      <BoxCustom>
        <BoxNum>Message</BoxNum>
        <TextArea name="message" />
      </BoxCustom>
      <Button>Send Message</Button>
    </Boxes>
  </Section>
);

export default Acomplishments;
