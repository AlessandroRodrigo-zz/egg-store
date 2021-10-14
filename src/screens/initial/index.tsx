import { useNavigation } from '@react-navigation/core';
import React, { useCallback } from 'react';
import { ImageBackground } from 'react-native';
import { Button, Div } from 'react-native-magnus';

const Initial: React.FC = () => {
  const navigator = useNavigation();

  const handleRedirectToLogin = useCallback(() => {
    navigator.navigate('Login');
  }, [navigator]);

  return (
    <ImageBackground
      source={{
        uri: 'https://images.unsplash.com/photo-1571028634586-ae87c1a42432?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=686&q=80',
      }}
      style={{ height: '100%' }}
    >
      <Div justifyContent="flex-end" flex={1}>
        <Div bg="white" p={32} roundedTop={8} flexDir="row">
          <Button
            bg="white"
            borderWidth={2}
            borderColor="black"
            color="black"
            rounded="none"
            flex={1}
            onPress={() => handleRedirectToLogin()}
          >
            Entrar
          </Button>
          <Button
            bg="black"
            rounded="none"
            borderWidth={2}
            borderColor="black"
            flex={1}
            ml="xl"
          >
            Cadastrar
          </Button>
        </Div>
      </Div>
    </ImageBackground>
  );
};

export default Initial;
