import styled from 'styled-components';
import Button from '../../components/Button';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  color: #f4ede8;
  font-family: 'RobotoSlab-Medium';
  font-size: 34px;
  margin: 48px 0 16px;
`;

export const Description = styled.Text`
  font-size: 16px;
  color: #999591;
  font-family: 'RobotoSlab-Regular';
`;

export const SmallButton = styled(Button)`
  width: 100px;
`;
