import { Flex, Image } from "@chakra-ui/react"

export const Header = ()=>{
    return (
        <>
            <Flex bgColor="footerBg" justifyContent="center" padding="20px" marginBottom="20px">
                <Image w="200px" h="200px" src="logo.png" />
            </Flex>
        </>
    )
}