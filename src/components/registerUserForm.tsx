import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Button,
} from "@chakra-ui/core";
import styled from "@emotion/styled";

const UserForm = styled.form`
  max-width: 450px;
  margin: 45px auto 0 auto;
`;

type TProps = {
  onChange: (userName: string) => void;
};

export const RegisterUserForm = (p: TProps) => {
  const [name, setName] = useState("");

  return (
    <UserForm
      id="register-user"
      onSubmit={() => {
        p.onChange(name);
      }}
    >
      <FormControl>
        <FormLabel htmlFor="username">Username</FormLabel>
        <Input
          type="text"
          id="username"
          aria-describedby="username-helper-text"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setName(e.target.value);
          }}
          value={name}
        />
        <FormHelperText id="username-helper-text">
          Please pick a unique username or we're both in trouble
        </FormHelperText>
      </FormControl>
      <Button type="submit" mt="4" variantColor="teal" size="md">
        Go chat!
      </Button>
    </UserForm>
  );
};
