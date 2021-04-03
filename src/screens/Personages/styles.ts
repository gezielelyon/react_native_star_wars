import {Modal} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #231c2e;
  align-items: flex-start;
`;

export const List = styled(FlatList)`
  flex: 1;
  width: 100%;
  padding: 20px 15px;
`;

export const Title = styled.Text`
  font-family: 'CaveatBrush-Regular';
  color: #aaa0bb;
  font-size: 20px;
  margin-bottom: 10px;
`;

export const ModalPayment = styled(Modal)``;

export const ContainerPayment = styled.View`
  flex: 1;
  background-color: #231c2e;
  align-items: center;
  justify-content: space-around;
  padding: 40px 15px 0 15px;
`;

export const ButtonViewPayment = styled.View`
  width: 100%;
  align-items: center;
`;

export const ButtonPayment = styled.TouchableOpacity`
  width: 100%;
  height: 55px;
  align-items: center;
  justify-content: center;
  background-color: #3a3049;
  border-radius: 50px;
`;

export const ButtonPaymentText = styled.Text`
  font-family: 'Roboto-Bold';
  color: #aaa0bb;
  font-size: 18px;
`;
