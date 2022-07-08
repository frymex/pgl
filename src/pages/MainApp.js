import { ChakraProvider, theme, Container, Box, Heading, Text,Divider, Stat,
    StatLabel,
    StatNumber,
    StatGroup, Stack, Button, Center } from '@chakra-ui/react';
    
import Modal from './Modal';
  
function MainApp() {
    return (
      <ChakraProvider theme={theme}>
      <Container maxW="6xl">
  
          <Box zIndex={99} paddingBottom={[5, 10]}>
  
    <Box maxW="2xl" m="0 auto">
      <Heading as="h1" textAlign="center" fontSize="7xl" mt="100px">
        FlyXRaid
      </Heading>
  
      <Text fontSize="xl" textAlign="center" mt="50px">
       Система ддос-спам атак в <strong>Telegram</strong> чаты. Мы – FlyXRaid имеем более 10 тысяч 
       уникальных <strong>Telegram</strong> аккаунтов, на нашем счету более 10 атакованных чатов
      </Text>
         </Box>
        <Heading as="h2" textAlign="center" fontSize="5xl" mt="50px">
  
                Наши успехи
  
        </Heading><br></br>
  
        <StatGroup bgSize={'xl'}>
        <Stack direction={['row']} spacing='50px'>
  
    <Stat textAlign="center" m="0 auto" minH='2xL'>
      <StatLabel color={'green.400'}>Аккаунтов</StatLabel>
      <StatNumber >30,457</StatNumber>
      
    </Stat>
    <Stat textAlign="center">
      <StatLabel color={'green.400'}>Пользователей</StatLabel>
      <StatNumber>15</StatNumber>
    </Stat>
    </Stack>
  </StatGroup>
          </Box>
  
          <Modal/>        
  
          
  
      </Container><br/><br/>
    </ChakraProvider>
    );
  }
  
export default MainApp;
  