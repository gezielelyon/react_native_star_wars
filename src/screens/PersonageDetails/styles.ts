import {ScrollView} from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #231c2e;
  align-items: flex-start;
`;

export const ScrolView = styled(ScrollView)`
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

export const BoxInfoEspecific = styled.TouchableOpacity`
  background-color: #3a3049;
  height: 55px;
  width: 100%;
  border-width: 2px;
  border-color: #aaa0bb;
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 15px;
`;

export const Name = styled.Text`
  font-family: 'Roboto-Bold';
  font-size: 22px;
  color: #fff;
`;
