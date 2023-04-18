import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  InputGroup,
  InputRightElement,
  Button,
  Textarea,
} from "@chakra-ui/react";

import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

import { useField } from "formik";
import React, { InputHTMLAttributes } from "react";

export const InputField = ({ textarea, label, ...props }) => {
  let height = "45px";
  let [field, { error }] = useField(props);
  let InputorTextArea = Input;
  if(textarea) {
    InputorTextArea = Textarea;
    height = "300px";
  }
  return (
    <FormControl isInvalid={!!error} display={'flex'} justifyContent={'center'} flexDir={'column'}>
      <FormLabel htmlFor={field.name} ml={4} fontSize={'md'} color={'button'}>{label}</FormLabel>
      <InputorTextArea
        {...field}
        {...props}
        id={field.name}
        h={height}
        placeholder={props.placeholder}
      />
      {error ? <FormErrorMessage color={"red"}>&#9888;{error}</FormErrorMessage> : null}
    </FormControl>
  );
};
