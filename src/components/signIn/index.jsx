import React, { useState } from "react";
import { 
  StyleSheet, 
  View, 
  Text, 
  SafeAreaView, 
  TextInput, 
  Alert,
  TouchableOpacity
} from 'react-native';

import Parse from "parse/react-native";
import 'react-native-get-random-values';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

export const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const navigation = useNavigation();
  const doLogin = async () => {
   
    try {
      if (
        !/^(?:[a-zA-Z0-9._-]+@(?:gmail|yahoo|outlook|hotmail|icloud|aol|protonmail|zoho|yandex|gmx|mail|tutanota|fastmail)\.com)$/.test(email)
      ) {
        Alert.alert(
            "Erro ⚠️",
            `"${createdUser.get("email")}", email deve conter um formato válido.`
          ); // Exibe erro de email inválido.
        return;
      }
      await Parse.User.logIn(email, password); 
      const CurrentUser = Parse.User.current();
      const username = CurrentUser.get("Username");
      Alert.alert(
        "Sucesso ✅",
        `Seja bem-vindo(a) "${username}", logado com sucesso.`
      );    
      navigation.navigate('comedouros', {screen: 'home'});
    } catch (error) {
      console.error('Erro ao cadastrar:', error);

      // Mostrar a mensagem de erro no modal
      Alert.alert(
        "Erro ❌",
        `Erro ao fazer cadastro.`
      );
    }
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <SafeAreaView style={styles.container__safe}>
      <View style={styles.container}>
      <Text style={styles.tittleStyle}>TechPet</Text>
    <TextInput
      style={styles.input}    
      value={email}
      placeholder={"Email"}
      onChangeText={(text) => setEmail(text)}
    />

  <TextInput
    style={styles.input} // Deixe esse input sem bordas arredondadas  
    value={password}
    placeholder={"Senha"}
    secureTextEntry={!isPasswordVisible}
    onChangeText={(text) => setPassword(text)}
  />
  <TouchableOpacity onPress={togglePasswordVisibility} style={styles.eyeIcon}>
    <Ionicons name={isPasswordVisible ? 'eye-off' : 'eye'} size={24} color='black' />
  </TouchableOpacity>  

    

    <TouchableOpacity style={styles.btnCadastrar} onPress={() => doLogin()}>
      <Text style={styles.txtcadastro}>Entrar</Text>
    </TouchableOpacity>
   <View style={{flexDirection: "row", justifyContent: 'center', paddingTop: 5}}>
    <Text> Não tem uma conta? </Text>
    <TouchableOpacity onPress={() => (navigation.navigate("cadastro"))}>
      <Text style={{color: "#499BE3"}}>Cadastrar</Text>  
    </TouchableOpacity>
   </View>
    

    </View>
  </SafeAreaView>
);
};

const styles = StyleSheet.create({
  input: {
    height: 45,
    width: "80%",
    borderRadius:20,
    marginBottom: 10,
    backgroundColor: "#e8e8e8",
    padding: 5,
    fontSize: 16,
  },
  input2: {
    height: 40,
    width: "80%",
    borderRadius:20,
    marginBottom: 10,
    backgroundColor: "#e8e8e8",
    padding: 5,
    fontSize: 16,
  },

  passwordInput: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    width: "80%",
    marginBottom: 10,
    backgroundColor: "#e8e8e8",
    padding: 5,
    borderRadius:20,
    fontSize: 16,
  },
  eyeIcon: {
    position: "absolute",
    right: 10,
    paddingTop: 65,
    paddingRight: 40,
    },

  tittleStyle: {
    fontSize: 35,
    fontWeight: 'bold', // Adiciona negrito ao texto
    textAlign: 'center', // Centraliza o texto
    marginBottom: 50, // Ajusta a margem superior para movê-lo para cima
    color: "#266F5F",
  },

  btnCadastrar:{
    backgroundColor: "#266F5F",
    height: 50,
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20
  
  },

txtSignIn:{
    marginTop: 10,
    fontSize: 15,
    color: "#266f5f",
    marginBottom:30
},

  txtcadastro: {
    color: "#FFF",
    fontSize: 16,
  },
    container__safe:{
        flex: 1
      },
      container: {
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
      }, 
});

export default LoginScreen;