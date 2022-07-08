import { ChakraProvider, theme, Container, Box, Heading, Text,Divider, Stat,
  StatLabel,
  StatNumber,
  StatGroup, Stack, Button, Center } from '@chakra-ui/react';



import MainApp from './pages/MainApp';

import React from "react";

import {BrowserRouter, Route, Routes} from 'react-router-dom';




function App() {
  React.useEffect(() => {
		document.title = "FlyXRaid";
	}, []);

  return (
    
    <BrowserRouter>
      <ChakraProvider theme={theme}>

        <Routes>

          <Route path='/' element={MainApp} />

        </Routes>

        <MainApp />

    </ChakraProvider>
  </BrowserRouter>
  );
}

export default App;
