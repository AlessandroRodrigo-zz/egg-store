import React from 'react';
import { Button, Div, Input, Text } from 'react-native-magnus';
import Container from '../../layouts/container';

export default function Login(): JSX.Element {
  return (
    <Container
      CustomContainerProps={{ justifyContent: 'center' }}
      shouldDisplayNavigationBackArrow
    >
      <Div>
        <Text color="primary" fontSize={48} fontWeight="600">
          Entrar
        </Text>

        <Input
          mt="2xl"
          borderColor="black"
          borderWidth={2}
          rounded="none"
          placeholder="E-mail"
          fontSize="lg"
        />
        <Input
          mt="md"
          borderColor="black"
          borderWidth={2}
          rounded="none"
          placeholder="Senha"
          secureTextEntry
          fontSize="lg"
        />

        <Button block bg="black" rounded="none" mt="xl" fontSize="xl" h={55}>
          Entrar
        </Button>
      </Div>
    </Container>
  );
}
