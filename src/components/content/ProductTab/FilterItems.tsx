import { Categories, Themes } from "@/services/manageData_api"
import { Stack } from "@chakra-ui/react"
import { SelectItem } from "./SelectItems"

type FilterItems = {
    categories: Categories,
    themes: Themes
}

type FilterItemsData = {
    categoriesFilter: string,
    themesFilter: string
}

export const FilterItems = ({categories, themes}: FilterItems)=>{
    return(
        <>
            <Stack direction={{base: "column", md: "row"}} spacing={8} margin="20px 0px 70px 0px" w="100%">
                <SelectItem id="categoriesFilter" items={categories} title="Categorias" placeholder="Todas" />
                <SelectItem id="themesFilter" items={themes} title="Temas" placeholder="Todos" />
            </Stack> 
        </>
    )
}