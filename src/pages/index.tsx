import type { GetServerSideProps, NextPage } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Categories, Products, Themes, manageData_api } from '@/services/manageData_api';
import { Content } from '@/components/content/Content';
import { Flex } from '@chakra-ui/react';
import { SideCart } from '@/components/cart/SideCart';

type HomeProps = {
    categories: Categories,
    themes: Themes,
    products: Products
}

const Home: NextPage<HomeProps> = ({categories, themes, products}: HomeProps) => {
  return(
    <>
      <Flex direction="column" w="100%" h="100%" minH="100vh" justifyContent="space-between">
        <Header />
        <Content categories={categories} themes={themes} products={products} />
        <Footer />
      </Flex>
    </>
  )
};

export default Home;

const getAllCategories = async(): Promise<Categories>=>{
    const response = await manageData_api.get('category');
    if(response.status !==200 || !response.data)
        throw Error(response.data.message)
    return response.data;
}

const getAllThemes = async(): Promise<Themes>=>{
    const response = await manageData_api.get('theme');
    if(response.status !==200 || !response.data)
        throw Error(response.data.message)
    return response.data;
}

const getAllProducts = async(): Promise<Products>=>{
    const response = await manageData_api.get('product/active');
    if(response.status !==200 || !response.data)
        throw Error(response.data.message)
    return response.data;
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  
    const categories = await getAllCategories();
    const themes = await getAllThemes();
    const products = await getAllProducts();

    return {
        props: {
            categories,
            themes,
            products
        },
    };
};