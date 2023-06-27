import { Categories } from "@/services/manageData_api"
import { Flex, Text, keyframes, usePrefersReducedMotion } from "@chakra-ui/react"
import { Dispatch, SetStateAction } from "react"
import { Tabs } from "../Content"

type CategoryCardProps = {
    category: Categories[0],
    setTabSelected: Dispatch<SetStateAction<Tabs>>,
    setCategoriesFilterDefault: Dispatch<SetStateAction<string>>,
    setThemesFilterDefault: Dispatch<SetStateAction<string>>
}



export const CategoryCard = ({category, setTabSelected, setCategoriesFilterDefault, setThemesFilterDefault}: CategoryCardProps)=>{
    const selectCategory = ()=>{
        setThemesFilterDefault("0");
        setCategoriesFilterDefault(category._id);
        setTabSelected("Products");
    }
    return (
        <>
            <Flex bg="linear-gradient(-45deg, #00DECA 0%, #f22189 100%)" h="100%" maxH="100px" cursor="pointer" justifyContent="center" alignItems="center" padding="10px" borderRadius="5px" _hover={{
                opacity: "0.8"
            }} transition="ease-in-out .2s all" onClick={selectCategory}>
                <Text color="defaultWhite" fontWeight="bold" fontSize="34px" textAlign="center">{category._name}</Text>
            </Flex>
        </>
    )
}