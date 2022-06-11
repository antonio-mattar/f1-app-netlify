import React, { useState } from 'react';
import { Button, Center } from '@chakra-ui/react'
import { useNavigate } from "react-router-dom";

const StreamChangeButton = (props) => {
    const [Language,setLanguage] = useState(props.language);
    const navigate = useNavigate();
    function ChangeStreamLanguage() {
    if (props.newlang === "English") {
        navigate("/");
        setLanguage("Arabic");
        
    }
    else if (props.newlang === "Arabic") { 
        navigate("/arabic");
        setLanguage("English");
        
    
 }
    }
    return (
        <Center>
    <Button colorScheme='blue' justifySelf={"center"} onClick={() => ChangeStreamLanguage()} margin='2.5'>Change to {props.newlang} </Button>
        </Center>
        
    );
}

export default StreamChangeButton;