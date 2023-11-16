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

export const SignUpScreen = () => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const navigation = useNavigation();
  const doCadastrar = async () => {
   
    try {
      // Validações
      if (username.length < 3) {
        Alert.alert(
            "Erro ⚠️",
            `"${username}", Nome de usuário deve ter mais de 3 letras.`
          );//Exibe erro de nnome de usuário com menos de 3 letras.
        return;
      }
      if (!/^[a-zA-Z0-9]+$/.test(username)) {
        Alert.alert(
            "Erro ⚠️",
            `"${email}", Nome de usuário não deve ter caracteres especiais.`
          ); // Exibe erro de nome de usuário com caracteres especiais.
        return;
      }
      if (
        !/^(?:[a-zA-Z0-9._-]+@(?:gmail|yahoo|outlook|hotmail|icloud|aol|protonmail|zoho|yandex|gmx|mail|tutanota|fastmail)\.com)$/.test(email)
      ) {
        Alert.alert(
            "Erro ⚠️",
            `"${createdUser.get("email")}", email deve conter um formato válido.`
          ); // Exibe erro de email inválido.
        return;
      }
      
      const user = new Parse.User();
      user.set('username', username);
      user.set('password', password);
      user.set('email', email);

      let userResult = await user.signUp();
      console.log('User signed up', userResult);
      Alert.alert(
        "Sucesso ✅",
        `Seja bem-vindo(a) ${username}, usuário cadastrado com sucesso.`
      );
      navigation.navigate('login');
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
      value={username}
      placeholder={"Seu apelido ou nome"}
      onChangeText={(text) => setUsername(text)}
      autoCapitalize={"none"}
    />
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

    

    <TouchableOpacity style={styles.btnCadastrar} onPress={() => doCadastrar()}>
      <Text style={styles.txtcadastro}>Cadastrar</Text>
    </TouchableOpacity>
   <View style={{flexDirection: "row", justifyContent: 'center', paddingTop: 5}}>
    <Text> Já tem uma conta? </Text>
    <TouchableOpacity onPress={() => (navigation.navigate("login"))}>
      <Text style={{color: "#499BE3"}}>Entrar</Text>  
    </TouchableOpacity>
   </View>
    

    </View>
  </SafeAreaView>
);
};

const styles = StyleSheet.create({
  input: {
    height: 50,
    width: "80%",
    borderRadius:20,
    marginBottom: 10,
    backgroundColor: "#e8e8e8",
    padding: 5,
    fontSize: 16,
  },
  input2: {
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
    paddingTop: 130,
    paddingRight: 40
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

export default SignUpScreen;