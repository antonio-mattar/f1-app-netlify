import React from "react";
import { useNavigate } from "react-router-dom";
import Header from './Header'
import Menu from './Menu';
import Footer from './Footer'
import StreamChangeButton from './StreamChangeButton';
import EmbedVideoPlayer from "./EmbedVideoPlayer";
import { ChakraProvider, Heading } from '@chakra-ui/react'
import Title from "./Title";
import M3U8Player from "./M3U8  Player";

const F1English = (props) => {

  return (
    <>
      <React.Fragment>
      <ChakraProvider>
    <Header />
    <Menu />
    <Title name='English' />
    <M3U8Player />
    <StreamChangeButton language='English' newlang='Arabic'/>
    <Footer/>
      </ChakraProvider>
    </React.Fragment>
    </>
  );
};

export default F1English;
