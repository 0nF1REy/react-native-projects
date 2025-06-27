import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #f2f2f2;
  padding: 40px 25px 0 25px;
`;

export const LogoContainer = styled.View`
  align-items: center;
  margin-bottom: 35px;
`;

export const LogoImage = styled.Image`
  width: 200px;
  height: 200px;
  resize-mode: contain;
  border-radius: 25px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.12);
  elevation: 6;
`;

export const Label = styled.Text`
  font-size: 24px;
  font-weight: 700;
  color: #222831;
  margin-bottom: 15px;
  letter-spacing: 0.5px;
`;

export const Input = styled.TextInput`
  height: 50px;
  background-color: #fff;
  border: 1.8px solid #cbd5e1;
  border-radius: 10px;
  padding: 0 15px;
  font-size: 17px;
  color: #222831;
  margin-bottom: 15px;
  shadow-color: #000;
  shadow-offset: 0 2px;
  shadow-opacity: 0.06;
  shadow-radius: 5px;
  elevation: 2;
`;

export const Button = styled.TouchableOpacity`
  background-color: #3b82f6;
  padding: 14px;
  border-radius: 12px;
  align-items: center;
  margin-bottom: 25px;
  shadow-color: #3b82f6;
  shadow-offset: 0 8px;
  shadow-opacity: 0.3;
  shadow-radius: 12px;
  elevation: 5;
  transition: background-color 0.3s ease;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 1.2px;
  text-transform: uppercase;
`;

export const LoadingIndicator = styled.ActivityIndicator`
  margin: 25px 0;
`;

export const ResultContainer = styled.View`
  margin-top: 25px;
  align-items: center;
  background-color: #ffffff;
  padding: 25px;
  border-radius: 16px;
  shadow-color: #000;
  shadow-offset: 0 4px;
  shadow-opacity: 0.1;
  shadow-radius: 10px;
  elevation: 6;
  width: 100%;
`;

export const PokemonImage = styled.Image`
  width: 120px;
  height: 140px;
  margin-bottom: 20px;
`;

export const ResultText = styled.Text`
  font-size: 19px;
  color: #222831;
  margin-bottom: 8px;
  font-weight: 600;
`;
