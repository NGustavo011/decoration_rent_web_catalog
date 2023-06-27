import { Button, Flex, Link, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Stack, Text } from "@chakra-ui/react"
import { ProductImageCarousel } from "./ProductImageCarousel"
import { Products } from "@/services/manageData_api"
import { BsWhatsapp } from "react-icons/bs"
import useCart from "@/hooks/cart/useCart"

type ProductModalProps = {
    isOpen: boolean,  
    onClose: ()=>void,
    product: Products[0]
}

export const ProductModal = ({isOpen, onClose, product}: ProductModalProps) => {
    const cart = useCart();

    const addItemInCart = ()=>{
        cart.addItem(product);
    }

    return(
        <>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent minW="600px">
                    <ModalHeader><Text textAlign="center" fontSize="30px" fontWeight="bold">{product._name}</Text></ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Stack spacing={5}>
                            <ProductImageCarousel cards={
                                [ product._principalImage, ...product._images]
                            } />
                            <Stack direction="row" justifyContent="space-between">
                                <Stack fontSize="20px" fontWeight="medium">
                                    <Text>Nome: {product._name}</Text>
                                    <Text>Categoria: {product._category._name}</Text>
                                    <Text>Tema: {product._theme._name}</Text>
                                </Stack>
                                <Flex>
                                    <Button h="100%" bgColor="footerBg" color="footerText" transition="ease-in-out .2s all" _hover={{bgColor: "footerBgHover"}} onClick={addItemInCart}>
                                        <Stack direction="row" spacing={2} alignItems="center">
                                            <Text>Adicionar ao carrinho</Text>
                                        </Stack>
                                    </Button>
                                </Flex>
                            </Stack>
                        </Stack>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}