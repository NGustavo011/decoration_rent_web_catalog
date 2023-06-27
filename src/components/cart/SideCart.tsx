import useCart from '@/hooks/cart/useCart';
import {
    Button,
    Flex,
    Icon,
    IconButton,
    Spinner,
    Stack,
    Text,
} from '@chakra-ui/react';
import { Router, useRouter } from 'next/router';
import React, { useState } from 'react';
import { MdClose } from 'react-icons/md';
import { toast } from 'react-toastify';
import { CartProduct } from './CartProduct';
import { CartBody } from './CartBody';
  
  type SideCartProps = {
    isOpen: boolean;
    setIsOpen: (params: boolean) => void;
  };
  
  export const SideCart = ({ isOpen, setIsOpen }: SideCartProps) => {
    return (
      <>
        <Flex
          className="sidecart"
          width="100%"
          minHeight="100vh"
          height="100%"
          position="fixed"
          top="0px"
          zIndex={isOpen ? '3' : '-1'}
          bg="rgba(0,0,0,0.4)"
          opacity={isOpen ? '1' : '0'}
          transition="0.2s ease-in-out"
          onClick={() => {
            setIsOpen(false);
          }}
        >
          <Flex
            position="absolute"
            height="100%"
            width={{ base: '100%', md: '500px' }}
            right={isOpen ? '0px' : '-500px'}
            bg="defaultWhite"
            align="center"
            justify="space-between"
            direction="column"
            opacity="1"
            overflow="scroll"
            transition="0.2s ease-in-out"
            onClick={(e: React.MouseEvent<HTMLDivElement>) => {
              e.stopPropagation();
            }}
          >
            <Stack spacing={10} direction="column" w="100%" margin="20px 0px" justifyContent="center" alignItems="center">
                <Flex align="center">
                      <IconButton
                        aria-label="Close side cart"
                        color="defaultBlack"
                        bg="defaultWhite"
                        border="1px solid #000000"
                        borderRadius="full"
                        transition="0.2s ease-in-out"
                        _hover={{ bg: "defaultBlack", color: "defaultWhite" }}
                        onClick={() => setIsOpen(false)}
                      >
                        <Icon as={MdClose}></Icon>
                      </IconButton>
                </Flex>
                <Text color="primary" fontSize="40px" fontWeight="semibold" textAlign="center">
                  Carrinho
                </Text>
            </Stack>
            <CartBody />
          </Flex>
        </Flex>
      </>
    );
  };
  