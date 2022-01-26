import React, { useRef } from "react";
import emailjs from '@emailjs/browser'
import {toast} from 'react-toastify'

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  Box,
  Boxes,
  BoxNum,
  BoxCustom,
  Input,
  TextArea,
  FormButton
} from "./ContactStyles";

const Contact = () => {
  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_1w1vq9q', 'template_wjzvmdv', form.current, 'user_4khb3vLRwVTYaM61nsKmL')
      .then((result) => {
        console.log(result.text);
        toast.success('Message sent, we will be soon in touch!', {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
        form.current.reset()
      }, (err) => {
        console.log(err.text);
        toast.error('Ups! Problem sending message, please try again.', {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
      })
  }
  return (
    <Section>
      <SectionDivider />
      <br />
      <SectionTitle>Contact</SectionTitle>
      <Boxes ref={form} onSubmit={sendEmail} autoComplete="nope">
        <Box>
          <BoxNum>Name</BoxNum>
          <Input type="text" name="user_name" autoComplete="off" />
        </Box>
        <Box>
          <BoxNum>Email</BoxNum>
          <Input type="email" name="user_email" autoComplete="none" />
        </Box>
        <BoxCustom>
          <BoxNum>Message</BoxNum>
          <TextArea name="message" />
        </BoxCustom>
        <FormButton type="submit" value="Send Message" />
        <input type="text" autoComplete="on" style={{display: 'none'}} />
      </Boxes>
    </Section>
  );
};

export default Contact;
