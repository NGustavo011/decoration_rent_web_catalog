import { Categories, Products, Themes } from '@/services/manageData_api';
import { Flex, FormControl, Grid, GridItem, Image, Text, useDisclosure } from '@chakra-ui/react';
import { MutableRefObject, useRef, useState } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { InputFilter } from './InputFilter';
import { FilterItems } from './FilterItems';
import { ProductModal } from './ProductModal';

type ProductCardProps = {
    product: Products[0]
}

export const ProductCard = ({product}: ProductCardProps)=>{
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <>
            <ProductModal isOpen={isOpen} onClose={onClose} product={product} />
            <Flex onClick={onOpen} direction="column" border="1px solid" borderRadius="20px" overflow="hidden"  justifyContent="center" cursor="pointer" transition="all .2s ease-in-out" _hover={{transform: "scale(1.1)", backgroundColor: "grey", bgColor: "black", color:"white", paddingBottom: "5px"}} >
                <Image w="220px" h="220px" objectFit="cover" src={product._principalImage} />
                <Text textAlign="center" paddingBottom="5px">{product._name}</Text>
            </Flex>
        </>
    )
}