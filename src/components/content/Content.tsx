import { Categories, Products, Themes } from '@/services/manageData_api';
import { Button, Flex } from '@chakra-ui/react';
import { useState } from 'react';
import { TabSelect } from './TabSelect';
import { ProductList } from './ProductTab/ProductList';
import { ProductTab } from './ProductTab/ProductTab';
import { ThemeTab } from './ThemeTab/ThemeTab';
import { CategoryTab } from './CategoryTab/CategoryTab';
import { SideCart } from '../cart/SideCart';

type ContentProps = {
    categories: Categories,
    themes: Themes,
    products: Products
}

export type Tabs = "Themes" | "Categories" | "Products"

export const Content = ({categories, themes, products}: ContentProps)=>{
    const [tabSelected, setTabSelected] = useState<Tabs>("Themes");
    const [categoriesFilterDefault, setCategoriesFilterDefault] = useState("0");
    const [themesFilterDefault, setThemesFilterDefault] = useState("0");

    return (
        <>
            <Flex h="100%" flex={1} justifyContent="center" margin="60px 0px">
                <Flex w="700px" direction="column">
                    <TabSelect tabSelected={tabSelected} setTabSelected={setTabSelected} />
                    {
                        tabSelected === "Themes" && <ThemeTab themes={themes} setTabSelected={setTabSelected} setThemesFilterDefault={setThemesFilterDefault} setCategoriesFilterDefault={setCategoriesFilterDefault} /> ||
                        tabSelected === "Categories" && <CategoryTab categories={categories} setTabSelected={setTabSelected} setCategoriesFilterDefault={setCategoriesFilterDefault} setThemesFilterDefault={setThemesFilterDefault} />||
                        tabSelected === "Products" && <ProductTab categories={categories} themes={themes} products={products} categoriesFilterDefault={categoriesFilterDefault} themesFilterDefault={themesFilterDefault} />
                    } 
                </Flex>
            </Flex>
        </>
    )
}