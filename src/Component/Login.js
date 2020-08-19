import React, { useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,Image, TouchableOpacity
} from 'react-native';
import styles from '../Styles/Splash_Login_Signupstyle'

import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons'
import LinearGradient from 'react-native-linear-gradient'

import  FloatingLabel from 'react-native-floating-labels'
import firebase from '../Firebase/Firebase'

const Login  = ({navigation}) => {
  
  const [Email ,SetEmail] = useState('')
  const [Password,SetPassword] = useState('')
  handlelogin =async()=>  {
  
    try {
     
      const response = await firebase.auth().signInWithEmailAndPassword(Email, Password)
       if(response.user){
         navigation.navigate('M')
       }
        
  } catch (e) {
      alert(e)
      
  }
  } 
  
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={'rgb(14,23,30)'} />
    
      <ScrollView style={styles.container}>
        <View >
          <Text style={styles.heading}>Login</Text>
          <Text style={styles.heading1}>Please Sign in to continue</Text>
          </View>
        
    
        <View>
        <FloatingLabel
        
            labelStyle={styles.labelInput}
            inputStyle={styles.input}
            onChangeText={email => SetEmail(email)}
            keyboardType="email-address"
            style={styles.formInput}
          >EMAIL</FloatingLabel>
      < Icon1 name="email" size={18} color='rgb(137, 137, 137)' style={styles.IconStyle}/>
      </View>
     
      <View>
        <FloatingLabel
        
            labelStyle={styles.labelInput}
            inputStyle={styles.input}
            style={styles.formInput}
            onChangeText={Password =>(SetPassword(Password))}
            password={true}
          >PASSWORD</FloatingLabel>
      < Icon1 name="lock" size={18} color='rgb(137, 137, 137)' style={styles.IconStyle}/>
      </View>
    <Text style={{color:'rgb(255,104,60)',alignSelf:'flex-end',marginRight:40,fontSize:12,marginVertical:-8,fontFamily:'Poppins-SemiBold'}} onPress={()=>navigation.navigate('S')}> Forgot Password? </Text>
    
      <Image
        style={styles.image}
        source={require('../assests/Group.png')}
      /> 
   <Text style={{color:'rgb(255,255,255)',alignSelf:'center',fontSize:12,fontFamily:'Poppins-Light',marginTop:550,position:'absolute'}}>Don't have an account?<Text style={{color:'rgb(255,104,60)'}} onPress={()=>navigation.navigate('S')}> Signup</Text></Text>    
     
       <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#FF6238', '#FED27A']} style={{height:40,width:150,alignSelf:'center',padding:8,borderRadius:40,marginVertical:240}}>
        
      <TouchableOpacity onPress={()=>handlelogin()}>
          <Text style={{textAlign:'center',color:'rgb(20,32,41)'}}>Login</Text> 
        </TouchableOpacity>
        </LinearGradient>
        
    
      </ScrollView>  
      
    </>
  );
};



export default Login;
