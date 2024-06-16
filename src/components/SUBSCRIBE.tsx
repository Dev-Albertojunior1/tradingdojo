import React, { useState } from 'react';
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Spacer,
  Spinner,
  useToast,
} from '@chakra-ui/react';
import PrimaryInput from './Input/PrimaryInput';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com'; // Importa o emailjs-com para envio de email

// Inicializa o EmailJS com seu User ID
emailjs.init('oKBLjstJAP59fIaLb');

const MainContent = () => {
  const toast = useToast();
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsSubmitting(true);

    const serviceID = 'service_9hxd6do'; // Substitua pelo seu Service ID do EmailJS
    const templateID = 'template_jiaqf8e'; // Substitua pelo seu Template ID do EmailJS

    const templateParams = {
      name: firstName,
      email,
    };

    emailjs.send(serviceID, templateID, templateParams)
      .then((response: EmailJSResponseStatus) => {
        console.log('Email sent successfully!', response.status, response.text);
        toast({
          title: 'REGISTRATION SUCCESSFUL',
          description: 'Subscription successful! Thank you for subscribing, We will contact you Son.',
          status: 'success',
          duration: 5000,
          isClosable: true,
        });
        onClose(); // Fecha o modal após enviar os dados
      })
      .catch((error) => {
        console.error('Erro ao enviar email:', error);
        toast({
          title: 'Error ',
          description: 'Error subscribing , please try again',
          status: 'error',
          duration: 5000,
          isClosable: true,
        });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);

  return (
    <main className="main-content">
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Subscribe Here</ModalHeader>
          <ModalBody>
            <form onSubmit={onSubmit}>
              <PrimaryInput 
                value={firstName} 
                onChange={(event) => setFirstName(event.target.value)}
                name="firstName"
                label="First Name"
                placeholder="Type Here"
              />
              <Spacer height="4" />
              <PrimaryInput 
                value={email} 
                onChange={(event) => setEmail(event.target.value)}
                name="email"
                label="E-mail"
                placeholder="Type Here"
              />
              <ModalFooter>
                
                <Button colorScheme="green" type="submit" isLoading={isSubmitting}>
                  {isSubmitting ? <Spinner size="sm" /> : 'SUBSCRIBE'}
                </Button>

                <Button onClick={onClose}>Cancel</Button>
              </ModalFooter>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>

      <Button colorScheme="green" onClick={onOpen} mt={-100} alignSelf="flex-end" className='btn'>
        SUBSCRIBE HERE
      </Button>
    </main>
  );
};

export default MainContent;
