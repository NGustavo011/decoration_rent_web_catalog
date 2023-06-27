import { Themes } from "@/services/manageData_api"
import { Flex, Text, keyframes, usePrefersReducedMotion } from "@chakra-ui/react"
import { Dispatch, SetStateAction } from "react"
import { Tabs } from "../Content"

type ThemeCardProps = {
    theme: Themes[0],
    setTabSelected: Dispatch<SetStateAction<Tabs>>,
    setThemesFilterDefault: Dispatch<SetStateAction<string>>,
    setCategoriesFilterDefault: Dispatch<SetStateAction<string>>
}



export const ThemeCard = ({theme, setTabSelected, setThemesFilterDefault, setCategoriesFilterDefault}: ThemeCardProps)=>{
    const selectTheme = ()=>{
        setCategoriesFilterDefault("0");
        setThemesFilterDefault(theme._id);
        setTabSelected("Products");
    }
    return (
        <>
            <Flex bg="linear-gradient(-45deg, #f89b29 0%, #f22189 100%)" h="100%" maxH="100px" cursor="pointer" justifyContent="center" alignItems="center" padding="10px" borderRadius="5px" _hover={{
                opacity: "0.8"
            }} transition="ease-in-out .2s all" onClick={selectTheme}>
                <Text color="defaultWhite" fontWeight="bold" fontSize="34px" textAlign="center">{theme._name}</Text>
            </Flex>
        </>
    )
}