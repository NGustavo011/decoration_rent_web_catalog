import { Input, Stack, Text } from "@chakra-ui/react"
import { MutableRefObject } from "react";

type InputFilterProps = {
    title: string
    searchBar: MutableRefObject<HTMLInputElement>
}

export const InputFilter = ({title, searchBar}: InputFilterProps)=>{
    return(
        <>
            <Stack direction="column" spacing={2} margin="20px 0px 0px 0px" w="100%">
                <>
                    <Text fontSize="18px">{title}</Text>
                    <Input ref={searchBar}/>
                </>
            </Stack> 
        </>
    )
} 