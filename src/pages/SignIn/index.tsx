import React from 'react';
import { Image, View } from 'react-native';

import logoImg from '../../assets/logo.png';

import Input from '../../components/Input';

import { Container, Title, Form } from './styles';

const SignIn: React.FC = () => {
  const ficaAiReturn =
    'Sem uma variavel aqui o negocio some por causa do eslint';
  return (
    <Container>
      <Image source={logoImg} />
      <View>
        <Title>Faça seu login</Title>
      </View>
      <Form>
        <Input />
        <Input />
      </Form>
    </Container>
  );
};

export default SignIn;