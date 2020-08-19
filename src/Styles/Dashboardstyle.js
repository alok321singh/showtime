import {
    StyleSheet,
  } from 'react-native';
import font from './font'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
export default Dashboardstyle = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor:color.almostBlack,
    },
 header:{
    backgroundColor:'rgb(14,23,30)',width:wp('100%'),padding:5
 },
 headerText:{
fontSize:17,textAlign:'center',color:'white',fontFamily:font.PoppinsSemiBold
 },
  display:{
    flex:0.40,width:wp('100%'),height:hp('100%')   
  },
  display1:{
    flex:1,width:wp('100%')
  },
  display1headerText:{
    color:'white',paddingLeft:25,paddingTop:5, fontFamily:font.PoppinsSemiBold,fontSize:13,lineHeight:25
  },
  displayImage:{
    width:wp('100%'),aspectRatio:hp(0.298)
  },
 display1image:{
  width:wp('35%'),borderRadius:8,marginLeft:10,aspectRatio:hp(0.233)
},

  });