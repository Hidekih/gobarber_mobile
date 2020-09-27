import React from 'react';

import { Container, Title, Description, SmallButton } from './styles';

const SignUpSuccessful: React.FC = () => (
  <Container>
    <Title>Cadastro Concluido!</Title>
    <Description>Agora é só fazer seu login.</Description>
    <SmallButton onPress={() => {}}>Ok</SmallButton>
  </Container>
);

export default SignUpSuccessful;
