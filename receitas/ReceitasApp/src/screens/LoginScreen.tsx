import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import { signIn, signUp } from '../services/auth';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);

  const handleAuth = async () => {
    try {
      if (isSignUp) {
        await signUp(email, password);
        Alert.alert('Cadastro realizado com sucesso!');
      } else {
        await signIn(email, password);
        Alert.alert('Login realizado com sucesso!');
      }
    } catch (error) {
      Alert.alert('Erro', error.message);
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title={isSignUp ? "Cadastrar" : "Entrar"} onPress={handleAuth} />
      <Button title={isSignUp ? "Já tem uma conta? Entrar" : "Não tem uma conta? Cadastrar"} onPress={() => setIsSignUp(!isSignUp)} />
    </View>
  );
};

export default LoginScreen;