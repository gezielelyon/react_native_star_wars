import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  background-color: #3a3049;
  height: 90px;
  width: 100%;
  border-width: 2px;
  border-color: #aaa0bb;
  border-radius: 10px;
  padding: 15px;
  margin-bottom: 15px;
`;

export const Name = styled.Text`
  font-family: 'Roboto-Bold';
  font-size: 22px;
  color: #fff;
`;

export const BoxInfoDetails = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Description = styled.Text`
  margin-right: 15px;
  margin-top: 5px;
  font-family: 'CaveatBrush-Regular';
  color: #aaa0bb;
  font-size: 18px;
`;
