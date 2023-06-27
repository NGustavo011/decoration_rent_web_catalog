import { Button, Flex, Image, Text } from "@chakra-ui/react"
import { SideCart } from "./cart/SideCart"
import { useState } from "react";
import { BsCart2 } from "react-icons/bs";

export const Header = ()=>{
    const [cartIsOpen, setCartIsOpen] = useState(false);
    const toggleCart = () => {
        setCartIsOpen(!cartIsOpen);
    };

    return (
        <>
            <Flex bgColor="footerBg" justifyContent="center" padding="20px" marginBottom="20px">
                <Image w="200px" h="200px" src="logo.png" />
                <Button
                    position="absolute"
                    bg="linear-gradient(-45deg, #f89b29 0%, #f22189 100%)"
                    width="60px"
                    height="60px"
                    borderRadius="full"
                    top="20px"
                    right="60px"
                    zIndex="2"
                    _hover={{
                        opacity: "0.8"
                    }} 
                    transition="ease-in-out .2s all"
                    onClick={toggleCart}
                >
                    <Text color="defaultWhite" fontWeight="bold" fontSize="30px" textAlign="center">
                        <BsCart2 />
                    </Text>
                </Button>
            </Flex>
            <SideCart isOpen={cartIsOpen} setIsOpen={setCartIsOpen} />
        </>
    )
}