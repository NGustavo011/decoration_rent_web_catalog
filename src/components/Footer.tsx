import { Flex, Image, Link, Stack, Text } from "@chakra-ui/react"
import { BsInstagram, BsWhatsapp } from "react-icons/bs"

export const Footer = ()=>{
    return (
        <>
            <Flex w="100%"  backgroundColor="footerBg" color="footerText" direction={{base: "column", md: "row"}} justifyContent="space-around" padding="15px 0px">
                <Stack spacing={3} direction="column">
                    <Text fontSize="24px" fontWeight="medium">Empresa</Text>
                    <Stack spacing={1}>
                        <Text>Marcela decorações</Text>
                        <Text>CNPJ: 15.436.940/0001-03</Text>
                    </Stack>
                </Stack>
                <Stack spacing={3} direction="column">
                    <Text fontSize="24px" fontWeight="medium">Localização</Text>
                    <Stack spacing={1}>
                        <Text>Rua Antônio Francisco Leonor, n°102</Text>
                        <Text>Capela do Alto - SP</Text>
                        <Text>Brasil</Text>
                    </Stack>
                </Stack>
                <Stack spacing={3} direction="column">
                    <Text fontSize="24px" fontWeight="medium">Entre em contato</Text>
                    <Stack fontSize="22px" spacing={4} direction="row" justifyContent="center">
                        <Link href="https://www.instagram.com/madecoracoes.capela/" transition="ease-in-out 0.2s" isExternal _hover={{color: "instagramHover"}}>
                            <BsInstagram />
                        </Link>
                        <Link href="https://wa.me/5515996746250" isExternal transition="ease-in-out 0.2s" _hover={{color: "whatsappHover"}}>
                            <BsWhatsapp />
                        </Link>
                    </Stack>
                </Stack>
                <Stack spacing={3} direction="column">
                    <Text fontSize="24px" fontWeight="medium">Desenvolvido por</Text>
                    <Text>Gustavo Nogueira</Text>
                </Stack>
            </Flex>
        </>
    )
}