import { Categories } from "@/services/manageData_api"
import { Grid, GridItem, Text } from "@chakra-ui/react"
import { Dispatch, SetStateAction } from "react"
import { Tabs } from "../Content"
import { CategoryCard } from "./CategoryCard"

type CategoryTabProps = {
    categories: Categories,
    setTabSelected: Dispatch<SetStateAction<Tabs>>,
    setCategoriesFilterDefault: Dispatch<SetStateAction<string>>,
    setThemesFilterDefault: Dispatch<SetStateAction<string>>
}

export const CategoryTab = ({categories, setTabSelected, setCategoriesFilterDefault, setThemesFilterDefault}: CategoryTabProps) =>{
    return(
        <>
            <Text textAlign="center" fontSize="40px" fontWeight="bold" marginBottom="20px">
                Lista de categorias
            </Text>
            <Grid templateColumns='repeat(3, 1fr)' gap={6}>
                {
                    categories.map((category)=>{
                        return <GridItem h="100px" key={category._id}><CategoryCard category={category} setTabSelected={setTabSelected} setCategoriesFilterDefault={setCategoriesFilterDefault} setThemesFilterDefault={setThemesFilterDefault}/></GridItem>
                    })
                }
            </Grid>
        </>
    )
}