import useCart from "@/hooks/cart/useCart"
import { Button, Flex, FormControl, Icon, IconButton, Input, Link, Stack, Text } from "@chakra-ui/react"
import { MdClose } from "react-icons/md"
import { CartProduct } from "./CartProduct";
import { toast } from "react-toastify";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";

type CartBodyFormData = {
    name: string,
    date: string
}

export const CartBody = ()=>{
    const cart = useCart();
    const methods = useForm<CartBodyFormData>({
        reValidateMode: 'onChange',
        defaultValues: {
            name: "",
            date: ""
        }
    });
    const {
        handleSubmit,
        formState: { errors },
        setError,
        reset,
        register
    } = methods;

    const cleanOrder = () => {
        reset();
        cart.clean();
        toast.success('Carrinho limpo com sucesso!');
    };
  
    const finalizeOrder: SubmitHandler<CartBodyFormData> = async ({ name, date }) => {
      cart.finalize(name, date);
    };

    return (
        <>
            <Flex
              height="100%"
              width={{
                base: '330px',
                sm: '380px',
                md: '420px',
              }}
              direction="column"
            >
              <Flex
                direction="column"
                gap={5}
                overflowY="auto"
                alignItems="center"
                scrollPadding="none"
                sx={{
                  '&::-webkit-scrollbar': {
                    width: '4px',
                  },
                  '&::-webkit-scrollbar-track': {
                    width: '6px',
                  },
                  '&::-webkit-scrollbar-thumb': {
                    background: 'primary',
                    borderRadius: '24px',
                  },
                }}
              >
                {cart.products.map((item) => (
                  <CartProduct
                    key={item._id}
                    name={item._name}
                    principalImage={item._principalImage}
                  />
                ))}
              </Flex>
              <Flex>
                <FormProvider {...methods}>
                    <FormControl as="form" isRequired flex="1" display="flex" justifyContent="center" alignItems="center" onSubmit={handleSubmit(finalizeOrder)}>
                        <Stack spacing={1} direction="column" w="100%">
                            <Stack display="flex" direction="column" spacing={3} marginTop="40px">
                                <Stack>
                                    <Text>Insira seu nome completo</Text>
                                    <Input 
                                        {...register("name", {
                                            required: true,
                                        })}
                                        required={true}
                                        placeholder="Nome"
                                        size="lg" 
                                    />
                                </Stack>
                                <Stack>
                                    <Text>Insira a data que deseja reservar os produtos</Text>
                                    <Input 
                                        {...register("date", {
                                            required: true,
                                        })} required={true} type="date" size="lg"
                                    />
                                </Stack>
                            </Stack>
                            <Flex direction="column" marginBottom="30px">
                                <Flex justify="space-between" marginTop="20px">
                                    <Button
                                        bg="defaultRed"
                                        _hover={{ bg: 'defaultRedHover' }}
                                        transition="ease-in-out .2s all"
                                        color="defaultWhite"
                                        width={{ base: '100px', sm: '185px', md: '205px' }}
                                        height="60px"
                                        fontSize={{ base: '18px', sm: '22px' }}
                                        onClick={cleanOrder}
                                    >
                                        Limpar carrinho
                                    </Button>
                                    <Button
                                        bg="defaultBlack"
                                        _hover={{
                                        bg: "defaultBlackHover"
                                        }} 
                                        transition="ease-in-out .2s all"
                                        color="defaultWhite"
                                        width={{ base: '150px', sm: '185px', md: '205px' }}
                                        height="60px"
                                        fontSize={{ base: '18px', sm: '22px' }}
                                        isDisabled={cart.productsLength === 0}
                                        type="submit"
                                    >
                                        Finalizar pedido
                                    </Button>
                                </Flex>
                            </Flex>
                        </Stack>
                    </FormControl>
                </FormProvider>
              </Flex>
            </Flex>
        </>
    )
}