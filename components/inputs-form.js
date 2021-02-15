import React from 'react';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Button,
  Input,
  FormHelperText,
} from '@chakra-ui/react';
import { useForm, Controller } from 'react-hook-form';

function InputsForm() {
  const {
    register, handleSubmit, control, watch, errors,
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl id="email" isInvalid={errors.MyCheckbox}>
        <FormLabel>Email address</FormLabel>

        <Controller
          name="MyCheckbox"
          control={control}
          defaultValue=""
          rules={{ required: 'Este campo é obrigatório', message: 'obrigatorio' }}
          render={(props) => <Input {...props} />} // props contains: onChange, onBlur and value
        />
        <FormErrorMessage>{errors.MyCheckbox?.message}</FormErrorMessage>
      </FormControl>
      <Button type="submit" colorScheme="blue">Button</Button>
    </form>
  );
}

export default InputsForm;
