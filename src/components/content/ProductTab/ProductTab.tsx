import { Flex, FormControl, Spinner, Text } from "@chakra-ui/react"
import { FormProvider, SubmitHandler, useForm } from "react-hook-form"
import { InputFilter } from "./InputFilter"
import { FilterItems } from "./FilterItems"
import { ProductList } from "./ProductList"
import { MutableRefObject, useEffect, useRef, useState } from "react"
import { Categories, Products, Themes } from "@/services/manageData_api"

type ProductTabProps = {
    categories: Categories,
    themes: Themes,
    products: Products,
    categoriesFilterDefault: string,
    themesFilterDefault: string
}

type EditProductDataFilters = {
    categoriesFilter: string,
    themesFilter: string,
}

export const ProductTab = ({categories, themes, products, categoriesFilterDefault, themesFilterDefault}: ProductTabProps) => {
    const [productsLoader, setProductsLoader] = useState(true);
    const [productsFiltered, setProductsFiltered] = useState(products);
    const searchBar = useRef<HTMLInputElement>();
    const methods = useForm<EditProductDataFilters>({
        defaultValues: {
            categoriesFilter: categoriesFilterDefault,
            themesFilter: themesFilterDefault
        }
    });
    const {
        register,
        handleSubmit,
        formState: { errors },    
    } = methods;

    useEffect(()=>{
        filterProduct(categoriesFilterDefault, themesFilterDefault, "");
        setProductsLoader(false);
    }, [])

    const filterProduct = (categoryId: string, themeId: string, inputFilterValue: string)=>{
        let productsFiltered = products;
        if(categoryId!="0"){
            productsFiltered = productsFiltered.filter((product)=>(
                product._category._id == categoryId
            ))
        }
        if(themeId!="0"){
            productsFiltered = productsFiltered.filter((product)=>(
                product._theme._id == themeId
            ))
        }
        if(inputFilterValue){
            productsFiltered = productsFiltered.filter((product)=>(
                product._name.toUpperCase().includes(inputFilterValue.toUpperCase())
            ))
        }
        setProductsFiltered(productsFiltered);
    }
    const onChange: SubmitHandler<EditProductDataFilters> = async ({categoriesFilter, themesFilter}) => {
        if(searchBar.current)
            filterProduct(categoriesFilter, themesFilter, searchBar.current.value);
    };
    return (
        <>
            <Text textAlign="center" fontSize="40px" fontWeight="bold" marginBottom="20px">
                Lista de produtos
            </Text>
            {
                !productsLoader
                ?
                <>
                    <FormProvider {...methods}>
                        <FormControl onChange={handleSubmit(onChange)}>
                            <InputFilter title="Busque por produtos" searchBar={searchBar as MutableRefObject<HTMLInputElement>} />
                            <FilterItems categories={categories} themes={themes} />
                        </FormControl>
                    </FormProvider>
                    <ProductList products={productsFiltered} />
                </>
                :
                <>
                    <Flex h="100%" justifyContent="center" alignItems="center">
                        <Spinner
                            thickness='4px'
                            speed='0.65s'
                            emptyColor='gray.200'
                            color='loaderColor'
                            size='xl'
                        />
                    </Flex>
                </>
            }
            
        </>
    )
}