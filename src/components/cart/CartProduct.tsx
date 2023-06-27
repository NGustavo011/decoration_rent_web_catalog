import { Flex, Image, Text } from "@chakra-ui/react"

type CartProductProps = {
    name: string,
    principalImage: string
}

export const CartProduct = ({name, principalImage}: CartProductProps)=>{
    return(
        <>
            <Flex width="220px" direction="column" justifyContent="center" border="1px solid" borderRadius="20px" overflow="hidden">
                <Image w="220px" h="220px" objectFit="cover" src={principalImage} />
                <Text textAlign="center">{name}</Text>
            </Flex>
        </>
    )
}