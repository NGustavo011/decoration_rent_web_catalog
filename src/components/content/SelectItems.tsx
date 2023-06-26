import { Select, Stack, Text } from "@chakra-ui/react"
import { useFormContext } from 'react-hook-form';

type SelectItemProps = {
    id: string;
    title: string;
    placeholder?: string;
    items: {
        _id: string,
        _name: string,
        _description?: string,
        _creationDate?: string,
    }[];
  };

export const SelectItem = ({id, title, placeholder, items}: SelectItemProps) => {
    const {
        register,
        formState: { errors },
        setError,
        clearErrors,
    } = useFormContext();
    return (
        <>
            <Stack w="100%">
                <Text fontSize="18px">{title}</Text>
                <Select size="lg" {...register(id, {
                    required: true,
                })}>
                    {
                        placeholder?<option key={0} value={0}>{placeholder}</option>:<></>
                    }
                    {
                        items.map((item)=>(
                            <option key={item._id} value={item._id}>{item._name}</option>
                        ))
                    }
                </Select>
            </Stack>
        </>
    )
}