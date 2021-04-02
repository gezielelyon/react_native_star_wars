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
