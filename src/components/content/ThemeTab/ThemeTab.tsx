import { Themes } from "@/services/manageData_api"
import { Grid, GridItem, Text } from "@chakra-ui/react"
import { ThemeCard } from "./ThemeCard"
import { Dispatch, SetStateAction } from "react"
import { Tabs } from "../Content"

type ThemeTabProps = {
    themes: Themes,
    setTabSelected: Dispatch<SetStateAction<Tabs>>,
    setThemesFilterDefault: Dispatch<SetStateAction<string>>,
    setCategoriesFilterDefault: Dispatch<SetStateAction<string>>
}

export const ThemeTab = ({themes, setTabSelected, setThemesFilterDefault, setCategoriesFilterDefault}: ThemeTabProps) =>{
    return(
        <>
            <Text textAlign="center" fontSize="40px" fontWeight="bold" marginBottom="20px">
                Lista de temas
            </Text>
            <Grid templateColumns='repeat(3, 1fr)' gap={6}>
                {
                    themes.map((theme)=>{
                        return <GridItem h="100px" key={theme._id}><ThemeCard theme={theme} setTabSelected={setTabSelected} setThemesFilterDefault={setThemesFilterDefault} setCategoriesFilterDefault={setCategoriesFilterDefault}/></GridItem>
                    })
                }
            </Grid>
        </>
    )
}