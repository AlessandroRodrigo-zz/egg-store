import { useNavigation } from '@react-navigation/core';
import React, { useCallback } from 'react';
import { Button, Div, Icon, Image, Text } from 'react-native-magnus';
import Firebase from 'firebase/app';
import useToast from '../../hooks/useToast';
import useUser from '../../hooks/useUser';
import AuthService from '../../../services/AuthService';

const Initial: React.FC = () => {
  const navigator = useNavigation();
  const { showToast } = useToast();
  const { signIn } = useUser();

  const handleGoogleSignIn = useCallback(async () => {
    try {
      const { user } =
        (await AuthService.signInWithGoogle()) ||
        ({} as Firebase.auth.UserCredential);

      signIn({
        email: user?.email || '',
        id: user?.uid,
        imageProfile: user?.photoURL || '',
        name: user?.displayName || '',
      });

      showToast('Bem vindo!', 'success');
    } catch (error) {
      showToast('Não conseguimos te conectar com sua conta Google', 'error');
    }
  }, [showToast, signIn]);

  const handleFacebookSignIn = useCallback(async () => {
    try {
      const { user } =
        (await AuthService.signInWithFacebook()) ||
        ({} as Firebase.auth.UserCredential);

      signIn({
        email: user?.email || '',
        id: user?.uid,
        imageProfile: user?.photoURL || '',
        name: user?.displayName || '',
      });
      showToast('Bem vindo!', 'success');
    } catch (error) {
      showToast(
        'Não conseguimos te conectar com sua conta do Facebook',
        'error',
      );
    }
  }, [showToast, signIn]);

  const handleRedirectToLogin = useCallback(() => {
    navigator.navigate('Login');
  }, [navigator]);

  const handleRedirectToSignUp = useCallback(() => {
    navigator.navigate('SignUp');
  }, [navigator]);

  return (
    <Div justifyContent="space-between" flex={1}>
      <Div p={32} alignItems="center" flex={1} justifyContent="center">
        <Image
          source={{
            uri: 'https://cdn-icons.flaticon.com/png/512/2268/premium/2268874.png?token=exp=1634257412~hmac=ce578b083208fb7bd4640ccff42f3d91',
          }}
          h={72}
          w={72}
        />
        <Text fontSize="6xl" fontWeight="bold" color="gray700">
          eggstore
        </Text>
      </Div>
      <Div p={32} alignItems="center">
        <Text
          fontWeight="bold"
          color="gray700"
          opacity={0.7}
          fontSize={18}
          w="50%"
          textAlign="center"
        >
          Compre por aqui, receba na sua casa!
        </Text>

        <Button
          mt="xl"
          bg="primary"
          borderWidth={2}
          borderColor="primary"
          color="white"
          rounded="md"
          block
          fontWeight="bold"
          onPress={() => handleRedirectToLogin()}
          h={55}
        >
          Entrar
        </Button>
        <Button
          mt="lg"
          bg="white"
          rounded="md"
          borderWidth={2}
          color="gray700"
          fontWeight="bold"
          borderColor="gray300"
          block
          onPress={() => handleRedirectToSignUp()}
          h={55}
        >
          Cadastrar
        </Button>

        <Div flexDir="row" alignItems="center" my="lg">
          <Div h={1} w="100%" flex={1} bg="gray500" />
          <Text fontSize="sm" mx="sm" color="gray700">
            Continue com
          </Text>
          <Div h={1} w="100%" flex={1} bg="gray500" />
        </Div>

        <Div flexDir="row">
          <Button
            bg="white"
            rounded="md"
            borderWidth={2}
            borderColor="gray300"
            h={55}
            flex={1}
            onPress={() => handleGoogleSignIn()}
          >
            <Icon name="google" />
          </Button>

          <Button
            bg="white"
            rounded="md"
            borderWidth={2}
            borderColor="gray300"
            h={55}
            flex={1}
            ml="md"
            onPress={() => handleFacebookSignIn()}
          >
            <Icon name="facebook" fontFamily="FontAwesome" />
          </Button>
        </Div>
      </Div>
    </Div>
  );
};

export default Initial;
