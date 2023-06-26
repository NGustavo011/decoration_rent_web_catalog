import { Categories, Products, Themes } from '@/services/manageData_api';
import { Flex, FormControl, Text } from '@chakra-ui/react';
import { MutableRefObject, useRef, useState } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { InputFilter } from './InputFilter';
import { FilterItems } from './FilterItems';
import { ProductList } from './ProductList';

type ContentProps = {
    categories: Categories,
    themes: Themes,
    products: Products
}

type EditProductDataFilters = {
    categoriesFilter: string,
    themesFilter: string,
}

export const Content = ({categories, themes, products}: ContentProps)=>{
    const [productsFiltered, setProductsFiltered] = useState(products);
    const searchBar = useRef<HTMLInputElement>();
    const methods = useForm<EditProductDataFilters>();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = methods;

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
            <Flex justifyContent="center" marginBottom="60px">
                <Flex w="700px" direction="column">
                    <Text textAlign="center" fontSize="40px" fontWeight="bold" marginBottom="20px">
                        Lista de produtos
                    </Text>
                    <FormProvider {...methods}>
                        <FormControl onChange={handleSubmit(onChange)}>
                            <InputFilter title="Busque por produtos" searchBar={searchBar as MutableRefObject<HTMLInputElement>} />
                            <FilterItems categories={categories} themes={themes} />
                        </FormControl>
                    </FormProvider>
                    <ProductList products={productsFiltered} />
                </Flex>
            </Flex>
        </>
    )
}