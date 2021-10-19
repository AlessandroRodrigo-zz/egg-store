import { useNavigation } from '@react-navigation/core';
import React, { useCallback, useState } from 'react';
import { Button, Div, Input, Text } from 'react-native-magnus';
import Firebase from '../../config/firebase';
import useToast from '../../hooks/toast';
import Container from '../../layouts/container';

export default function Login(): JSX.Element {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigator = useNavigation();
  const FirebaseAuth = Firebase.auth();

  const { showToast } = useToast();

  const handleSignIn = useCallback(async () => {
    try {
      const userCredential = await FirebaseAuth.signInWithEmailAndPassword(
        email,
        password,
      );

      console.log(userCredential);
    } catch (error) {
      console.error(error.message);
    }
  }, [FirebaseAuth, email, password]);

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

        <Div mt="2xl">
          <Text color="gray700" fontSize="sm">
            E-mail
          </Text>
          <Input
            mt="md"
            h={50}
            bg="white"
            borderColor="gray400"
            borderWidth={2}
            rounded="md"
            placeholder="E-mail"
            fontSize="lg"
            onChangeText={text => setEmail(text)}
          />
        </Div>

        <Div mt="xl">
          <Text color="gray700" fontSize="sm">
            Password
          </Text>
          <Input
            mt="md"
            h={50}
            borderColor="gray400"
            borderWidth={2}
            rounded="md"
            placeholder="Senha"
            secureTextEntry
            fontSize="lg"
            onChangeText={text => setPassword(text)}
          />
        </Div>

        <Button
          block
          bg="primary"
          rounded="md"
          mt="xl"
          fontWeight="bold"
          fontSize="xl"
          h={55}
          onPress={() => handleSignIn()}
        >
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
