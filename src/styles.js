import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`;

export const Img = styled.Image`
  width: 230px;
  height: 230px;
`;

export const TextoFrase = styled.Text`
  font-size: 20px;
  color: #dd7b22;
  margin: 30px;
  font-style: italic;
  text-align: center;
`;

export const Botao = styled.TouchableOpacity`
  width: 230px;
  height: 50px;
  border-width: 2px;
  border-color: #dd7b22;
  border-radius: 25px;
  margin-bottom: 10px;
  justify-content: center;
  align-items: center;
`;

export const BtnArea = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const BtnTexto = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #dd7b22;
`;
