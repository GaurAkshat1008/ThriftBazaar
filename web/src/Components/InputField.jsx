import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
} from "@chakra-ui/react";

import { useField } from "formik";
import React, { InputHTMLAttributes } from "react";

export const InputField = ({ label, ...props }) => {
  let height = "45px";
  let [field, { error }] = useField(props);
  return (
    <FormControl isInvalid={!!error}>
      <FormLabel htmlFor={field.name}>{label}</FormLabel>
      <Input
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
