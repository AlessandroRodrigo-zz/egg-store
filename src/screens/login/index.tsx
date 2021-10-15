import { useNavigation } from '@react-navigation/core';
import React, { useCallback } from 'react';
import { Button, Div, Input, Text } from 'react-native-magnus';
import Container from '../../layouts/container';

export default function Login(): JSX.Element {
  const navigator = useNavigation();

  const handleSignUpRedirect = useCallback(() => {
    navigator.navigate('SignUp');
  }, [navigator]);

  return (
    <Container
      customContainerProps={{ justifyContent: 'center' }}
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
          rounded="md"
          placeholder="E-mail"
          fontSize="lg"
        />
        <Input
          mt="md"
          borderColor="black"
          borderWidth={2}
          rounded="md"
          placeholder="Senha"
          secureTextEntry
          fontSize="lg"
        />

        <Button block bg="black" rounded="md" mt="xl" fontSize="xl" h={55}>
          Entrar
        </Button>
        <Button
          block
          bg="transparent"
          color="black"
          rounded="md"
          mt="md"
          fontSize="xl"
          h={55}
          onPress={() => handleSignUpRedirect()}
        >
          Não possui conta?
        </Button>
      </Div>
    </Container>
  );
}
