
import {
  StyleSheet,
} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import font from './font'
import color from './color'

export default styles = StyleSheet.create({
    container: {
      flex: 1,
      height:hp('100%'),
      width:wp('100%'),
      backgroundColor:color.almostBlack,
      paddingTop:80
      
    },
    labelInput: {
      color: color.white,
      fontSize:13,
      paddingLeft:35,
      paddingBottom:10,
      fontFamily:font.PoppinsLight 
    },
    formInput: {    
      marginLeft: 30,
      marginRight:30,
      marginBottom:10,
      backgroundColor:color.darkBlueGrey,
      borderRadius:13,
    },
    input: {
      borderWidth: 0,
      paddingLeft:35,
      fontSize:12,
      color:'white'
     
    },
   heading:{
    width:wp('100%'),
    color:color.white,
    marginLeft: 32,
    fontSize:22,
    fontFamily:font.PoppinsSemiBold,
    fontWeight:'bold'
   },
   heading1:{
  color: 'rgb(137, 137, 137)',
  paddingBottom:40,
  marginLeft: 35,
  fontSize:12,
  fontFamily:font.PoppinsLight,
   } ,
   image:{
    alignSelf:'flex-end',
    marginTop:270,
    opacity:.5 ,
    position:'absolute'  
   },

   Splashimage:{
    height:hp('50%'),
  width:wp('79%'),
  alignSelf:'flex-end',
  marginTop:320,
  opacity:.2 ,
  position:'absolute'  
   },
   IconStyle:{
    paddingHorizontal:39,
    paddingVertical:21,
    position:'absolute'
   } 
  });