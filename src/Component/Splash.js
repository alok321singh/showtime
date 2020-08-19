import React, { useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
    Image
} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import styles from '../Styles/Splash_Login_Signupstyle'

const Splash = ({navigation}) => {
    useEffect(() => {
        const timer = setTimeout(() =>navigation.navigate('L') , 3000);
        return () => clearTimeout(timer);
      }, []);
 
  return (
    <>
      <StatusBar barStyle="dark-content" />
    
      <SafeAreaView style={styles.container}>
       
        
      <Image
        style={{height:hp('10%'),width:wp('60%'),margin:12,alignSelf:'center',marginVertical:100}}
        source={require('../assests/Logo.png')}
      /> 
 
       
    
    
    
      <Image
        style={styles.Splashimage}
        source={require('../assests/Group.png')}
      /> 
 
    
      </SafeAreaView>
      
    </>
  );
};


export default Splash;
