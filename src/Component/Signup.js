/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{useState} from 'react';
import {
  
  ScrollView,
  View,
  Text,
  StatusBar,
 TouchableOpacity,
 Alert,
} from 'react-native';
import styles from  '../Styles/Splash_Login_Signupstyle'

import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/Feather'
import  FloatingLabel from 'react-native-floating-labels'
import firebase from '../Firebase/Firebase'
import  {db} from '../Firebase/Firebase'
import 'firebase/firestore'
const Signup = ({navigation}) => {
  const [Email ,SetEmail] = useState('')
  const [Password,SetPassword] = useState('')
  const [Name,SetName] = useState('')
  const [Phone,SetPhone] = useState('')
 
  handleSignup =async()=>  {
   
    try {
  const response = await Firebase.auth().createUserWithEmailAndPassword(Email, Password)     
  if(response.user.id){
    navigation.navigate('M')
  }
        
  } catch (e) {
      alert(e)
      
  }
  } 
  return (
    <>
      <StatusBar barStyle="dark-content"   backgroundColor={'rgb(14,23,30)'} />
      <ScrollView style={styles.container}>
        <View >
          <Text style={styles.heading}>Create your account</Text>
          <Text style={styles.heading1}>Please fill in the input below here</Text>
          </View>
        
          <View>
          <FloatingLabel 
            labelStyle={styles.labelInput}
            inputStyle={styles.input}
            style={styles.formInput}
            onChangeText={name => SetName(name)}
            useNativeDriver={true}
          >Full Name</FloatingLabel>
 < Icon name="user" size={18} color='rgb(137, 137, 137)' style={styles.IconStyle}/>
    </View>

    <View>
        <FloatingLabel 
            labelStyle={styles.labelInput}
            inputStyle={styles.input}
            keyboardType="phone-pad"
            onChangeText={phone => SetPhone(phone)}
            style={styles.formInput}
          >PHONE</FloatingLabel>
 < Icon1 name="phone" size={18} color='rgb(137, 137, 137)' style={styles.IconStyle}/>
          </View>
         <View>
        <FloatingLabel
        
            labelStyle={styles.labelInput}
            inputStyle={styles.input}
            keyboardType="email-address"
            onChangeText={email => SetEmail(email)}
            style={styles.formInput}
          >EMAIL</FloatingLabel>
      < Icon1 name="email" size={18} color='rgb(137, 137, 137)' style={styles.IconStyle}/>
      </View>
     
      <View>
        <FloatingLabel
        
            labelStyle={styles.labelInput}
            inputStyle={styles.input}
            onChangeText={Password =>(SetPassword(Password))}
            style={styles.formInput}
            password={true}
          >PASSWORD</FloatingLabel>
      < Icon1 name="lock" size={18} color='rgb(137, 137, 137)' style={styles.IconStyle}/>
      </View>
    
      <View>
        <FloatingLabel
        
            labelStyle={styles.labelInput}
            inputStyle={styles.input}
            style={styles.formInput}
            password={true}
          >CONFIRM PASSWORD</FloatingLabel>
       < Icon1 name="lock" size={18} color='rgb(137, 137, 137)' style={styles.IconStyle}/>
      </View>  
      
       <View>

          {/* <Image
        style={styles.image}
        source={require('../assests/Group.png')}
      />  */}
      </View>
      <TouchableOpacity onPress={()=>handleSignup()}>
       <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#FF6238', '#FED27A']} style={{height:40,width:150,alignSelf:'center',padding:8,borderRadius:40,marginVertical:16}}>
        
          <Text style={{textAlign:'center',color:'rgb(20,32,41)',fontWeight:"bold"}}>Signup</Text> 
          
        </LinearGradient>
        </TouchableOpacity>
     <Text style={{color:'rgb(255,255,255)',alignSelf:'center',marginTop:48,fontSize:12,fontFamily:'Poppins-Light'}}>Already a member?<Text style={{color:'rgb(255,104,60)'}} onPress={()=>navigation.navigate('L')}> Login</Text></Text>  
      </ScrollView>  
    </>
  );
};


export default Signup;
