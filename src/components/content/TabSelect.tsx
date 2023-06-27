import { Stack, Text } from "@chakra-ui/react"
import { Dispatch, SetStateAction } from "react"
import { Tabs } from "./Content"

type TabSelectProps = {
    tabSelected: Tabs,
    setTabSelected: Dispatch<SetStateAction<Tabs>>
}

export const TabSelect = ({tabSelected, setTabSelected}: TabSelectProps) => {
    return (
        <>
            <Stack direction="row" justifyContent="space-around" fontWeight="bold" fontSize="30px" marginBottom="80px">
                <Text onClick={()=>setTabSelected("Themes")} color={tabSelected==="Themes"?"tabTextHover":"none"} textDecoration={tabSelected==="Themes"?"underline":"none"} cursor="pointer" transition="ease-in-out .2s all" _hover={{ color: "tabTextHover", textDecoration: "underline" }}>Temas</Text>
                <Text onClick={()=>setTabSelected("Categories")} color={tabSelected==="Categories"?"tabTextHover":"none"} textDecoration={tabSelected==="Categories"?"underline":"none"} cursor="pointer" transition="ease-in-out .2s all" _hover={{ color: "tabTextHover", textDecoration: "underline" }}>Categorias</Text>
                <Text onClick={()=>setTabSelected("Products")} color={tabSelected==="Products"?"tabTextHover":"none"} textDecoration={tabSelected==="Products"?"underline":"none"} cursor="pointer" transition="ease-in-out .2s all" _hover={{ color: "tabTextHover", textDecoration: "underline" }}>Produtos</Text>
            </Stack>
        </>
    )
}