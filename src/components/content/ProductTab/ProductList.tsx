import { Categories, Products, Themes } from '@/services/manageData_api';
import { Flex, FormControl, Grid, GridItem, Text } from '@chakra-ui/react';
import { MutableRefObject, useRef, useState } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { InputFilter } from './InputFilter';
import { FilterItems } from './FilterItems';
import { ProductCard } from './ProductCard';

type ProductListProps = {
    products: Products
}

export const ProductList = ({products}: ProductListProps)=>{
    return (
        <>
            <Grid templateColumns='repeat(3, 1fr)' gap={6}>
                {
                    products.map((product)=>{
                        return <GridItem key={product._id}><ProductCard product={product}/></GridItem>
                    })
                }
            </Grid>
        </>
    )
}