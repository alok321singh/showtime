import React, { useState,useEffect } from 'react'
import {View,Text, TouchableOpacity,Image,StyleSheet, Dimensions,FlatList} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import FastImage from 'react-native-fast-image'
import {getW780ImageUrl} from '../Api/url'
import SegmentedControlTab from "react-native-segmented-control-tab";
import { ScrollView } from 'react-native-gesture-handler'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { TabView, SceneMap ,TabBar } from 'react-native-tab-view';
import FirstRoute from '../Tab/FirstRoute'
import SecondRoute from '../Tab/SecondRoute'
import firebase from '../Firebase/Firebase'
import AsyncStorage from '@react-native-community/async-storage';


const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={{ backgroundColor: 'white' }}
    style={{ backgroundColor: 'rgb(14,23,30)' }}
    renderLabel={({ route,color}) => (
          
      <Text style={{ color, margin: 8,lineHeight:35 ,fontSize:14,fontFamily:route.font,lineHeight:30}}>
        {route.title}
      </Text>
    )}

  />
);

const initialLayout = { width: Dimensions.get('window').width };
export default function Detail({route,navigation}){
  const [line, setLine] = useState(2)
  const [Colors,SetColors] = useState('white')
  const { otherParam } = route.params;
  const [user,Setuser]=useState('')
  let movie = []
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
   { key: 'first', title: 'Related Movies',font:'Poppins-Medium' },
   { key: 'second', title: 'More Details',font:'Poppins-Regular' },
 ]);
 const renderScene = ({ route }) => {
  switch (route.key) {
    case 'first':
      return <FirstRoute id={otherParam.id} />;
    case 'second':
      return <SecondRoute id={otherParam.id} />;
    default:
      return null;
  }
};


 useEffect(() => {
  setLine(2)
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      Setuser(user.uid)
    }
    });
 }, []);
  
 async function Add(){
  try {
   
        const value = await AsyncStorage.getItem(user);
        // <FlatList 
       
        //   data={movie}
        //   style={{margin:10}}
        //   renderItem={({ item }) => 
        //  alert(item)
        // }
        //   keyExtractor={({ id }) => id.toString()}
        // />
        if (value !== null) {
      movie.push(value)
        }
        alert(movie)
        
}catch(error) {
    alert(error)
}





 }
 async function Delete(){
  try {
  
     
      await  AsyncStorage.setItem(user,JSON.stringify(otherParam));
        // alert(user.uid)
        alert(JSON.stringify(otherParam))
      
      
}catch(error) {
    alert(error)
}
 }
  
  return(
<ScrollView style={{width:wp('100%'),height:hp('100%'),backgroundColor:'rgb(14,23,30)'}}>

<FastImage source={{uri:getW780ImageUrl(otherParam.poster_path)}} style={{width:wp('100%'),aspectRatio:hp(0.299)}} />
  
  <View style={{flexDirection:'row',marginBottom:0,justifyContent:'space-between'}}>
 <Text style={{marginLeft:30,fontSize:24,fontFamily:'Poppins-SemiBold',color:'white',marginTop:20,flexShrink:3}}>{otherParam.original_title}</Text>
 <View style={{flexDirection:'row'}}> 
 <TouchableOpacity   onPress={()=>Add()}>
 <Image source={require('../assests/watch2.png')} style={{marginTop:25,marginRight:12}}  />
 </TouchableOpacity>
 <TouchableOpacity   onPress={()=>Colors==='white'?Delete():Add()}>
 <Image source={require('../assests/Like.png')}  style={{marginTop:27,marginRight:30,tintColor:Colors}} />
 </TouchableOpacity>
 </View>
   </View>
 <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#FF6238', '#FED27A']} style={{height:hp('6%'),width:wp('85%'),alignSelf:'center',padding:8,borderRadius:10}}>
    <TouchableOpacity  style={{flexDirection:'row'}}  onPress={()=>navigation.navigate('Trailer',{
              itemId:otherParam.id,
              otherParam:otherParam.id,
          })}>
    <Image source={require('../assests/Play.png')} style={{marginLeft:10,marginTop:3}} />
     <Text style={{color:'white',marginLeft:10,fontFamily:'Poppins-SemiBold',fontSize:18}}>Watch Trailer</Text> 
   
    </TouchableOpacity>
    </LinearGradient>
  
     
   <Text numberOfLines={line} style={{marginLeft:30,marginRight:20,color:'white',fontFamily:'Poppins-Regular',marginTop:20,fontSize:14}}>
   {otherParam.overview}
   </Text>
  <Text style={{color:'#FF6238',marginLeft:30}} onPress={()=>setLine(line===2?30:2)}>{line==2?'ReadMore':'ReadLess'}</Text>


 
         <TabView
      navigationState={{ index, routes }}
      renderTabBar={renderTabBar}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
    />

</ScrollView>
  ) ;
}



const styles = StyleSheet.create({
  scene: {
    flex: 1,
    backgroundColor:'red'
  },
});