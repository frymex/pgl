import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    FormLabel,
    Input,
    Button,
    useDisclosure,
    FormControl,
    Center
  } from '@chakra-ui/react'

import React from "react";


function InitialFocus() {
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
  
    return (
      <>
        <Center mt="0px">

  
<Button
onClick={onOpen}
 w="fit-content"
 rounded={'15px'}
p="4"
px="50px"
bg="blue.300"
borderRadius="10px"
m="0 auto"
mt="8"
fontWeight="bold"
color="white"
size="xl">

Начать работу


</Button>

</Center>  
  
        <Modal
        borderRadius='50px'

          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader><strong>Вход в панель</strong></ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Логин</FormLabel>
                <Input ref={initialRef} placeholder='Логин' />
              </FormControl>
  
              <FormControl mt={4}>
                <FormLabel>Пароль</FormLabel>
                <Input type="password" placeholder='Пароль' />
              </FormControl>
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}> 
                Войти
              </Button>
              <Button onClick={onClose}>Назад</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

export default InitialFocus;