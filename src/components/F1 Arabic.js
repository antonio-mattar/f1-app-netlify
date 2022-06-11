import React from "react";
import { useNavigate } from "react-router-dom";
import Header from './Header'
import Menu from './Menu';
import Title from "./Title";
import Footer from './Footer'
import StreamChangeButton from './StreamChangeButton';
import EmbedVideoPlayer from "./EmbedVideoPlayer";
import { ChakraProvider } from '@chakra-ui/react'

const F1Arabic = (props) => {

  return (
    <>
      <React.Fragment>
      <ChakraProvider>
    <Header />
    <Menu />
    <Title name='Arabic' />
    <EmbedVideoPlayer/>
    <StreamChangeButton language='Arabic' newlang='English'/>
    <Footer/>
      </ChakraProvider>
    </React.Fragment>
    </>
  );
};

export default F1Arabic;