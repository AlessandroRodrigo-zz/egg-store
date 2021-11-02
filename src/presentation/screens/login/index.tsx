import { useNavigation } from '@react-navigation/core';
import { Formik } from 'formik';
import React, { useCallback, useMemo } from 'react';
import { Button, Div, Input, Text } from 'react-native-magnus';
import * as yup from 'yup';
import useFeedbackDialog from '@/presentation/hooks/useFeedbackDialog';
import AuthService from '../../../services/AuthService';
import useUser from '../../hooks/useUser';
import Container from '../../layouts/container';

const Login: React.FC = () => {
  const { signIn } = useUser();
  const navigator = useNavigation();
  const { showFeedbackDialog } = useFeedbackDialog();

  const handleSignIn = useCallback(
    async (email: string, password: string) => {
      try {
        const { user } = await AuthService.signInWithEmailAndPassword(
          email,
          password,
        );

        signIn({
          email: user?.email || '',
          id: user?.uid || '',
          imageProfile: user?.photoURL || '',
          name: user?.displayName || '',
        });

        showFeedbackDialog('Login realizado com sucesso!', 'success');
      } catch (error) {
        showFeedbackDialog('Não foi possível realizar o login', 'error');
      }
    },
    [showFeedbackDialog, signIn],
  );

  const validationSignInSchema = useMemo(() => {
    return yup.object().shape({
      email: yup
        .string()
        .email('Deve ser um e-mail válido')
        .required('Esse campo é obrigatório'),
      password: yup
        .string()
        .required('Esse campo é obrigatório')
        .min(6, 'A senha deve ter no mínimo 6 caracteres'),
    });
  }, []);

  const handleSignUpRedirect = useCallback(() => {
    navigator.navigate('SignUp');
  }, [navigator]);

  return (
    <Container
      customContainerProps={{ justifyContent: 'center' }}
      shouldDisplayNavigationBackArrow
    >
      <Div>
        <Text color="primary" fontSize={48} fontWeight="bold">
          Entrar
        </Text>

        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={validationSignInSchema}
          validateOnChange
          onSubmit={values => handleSignIn(values.email, values.password)}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
            isSubmitting,
          }) => (
            <>
              <Div mt="2xl">
                <Text color="gray700" fontSize="sm">
                  E-mail
                </Text>
                <Input
                  mt="md"
                  h={50}
                  bg="gray200"
                  rounded="md"
                  focusBorderColor="primary"
                  placeholder="E-mail"
                  fontSize="lg"
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                  keyboardType="email-address"
                />
                <Text color="red500" fontSize="sm" mt="sm">
                  {touched.email && errors.email}
                </Text>
              </Div>

              <Div mt="sm">
                <Text color="gray700" fontSize="sm">
                  Password
                </Text>
                <Input
                  mt="md"
                  h={50}
                  bg="gray200"
                  focusBorderColor="primary"
                  rounded="md"
                  placeholder="Senha"
                  secureTextEntry
                  fontSize="lg"
                  onBlur={handleBlur('password')}
                  onChangeText={handleChange('password')}
                  value={values.password}
                  keyboardType="default"
                />
                <Text color="red500" fontSize="sm" mt="sm">
                  {touched.password && errors.password}
                </Text>
              </Div>

              <Button
                block
                bg="primary"
                rounded="md"
                mt="xl"
                fontWeight="bold"
                fontSize="xl"
                h={55}
                onPress={() => handleSubmit()}
                loading={isSubmitting}
              >
                Entrar
              </Button>
              <Button
                block
                bg="transparent"
                color="gray600"
                rounded="md"
                mt="md"
                fontSize="xl"
                h={55}
                onPress={() => handleSignUpRedirect()}
              >
                Não possui conta?
              </Button>
            </>
          )}
        </Formik>
      </Div>
    </Container>
  );
};

export default Login;
