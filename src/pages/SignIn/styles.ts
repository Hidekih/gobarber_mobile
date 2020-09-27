import styled from 'styled-components/native';
import { getBottomSpace, isIphoneX } from 'react-native-iphone-x-helper';
import { Form } from '@unform/mobile';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 36px;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: #f4ede8;
  font-family: 'RobotoSlab-Medium';
  margin: 48px 0 16px;
`;

export const ForgotPassWord = styled.TouchableOpacity`
  margin-top: 24px;
`;

export const ForgotPassWordText = styled.Text`
  color: #f4ede8;
  font-family: 'RobotoSlab-Regular';
  font-size: 14px;
`;

// Cuidado com esse form.
export const UnForm = styled(Form)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const CreateAccountButton = styled.TouchableOpacity`
  left: 0;
  bottom: 0;
  right: 0;
  background: #312e38;
  border-top-width: 2px;
  border-color: #232129;
  padding: 16px 0 ${isIphoneX() ? getBottomSpace() : 16}px;

  flex-direction: row;
  justify-content: center;
`;

export const CreateAccountButtonText = styled.Text`
  color: #ff9000;
  font-family: 'RobotoSlab-Regular';
  font-size: 14px;
  margin-left: 16px;
`;
/// /////////////// 6:21
