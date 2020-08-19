import React, { useState,useEffect } from 'react'
import {View,Text, TouchableOpacity,Image,StyleSheet,FlatList,ScrollView} from 'react-native'
import FastImage from 'react-native-fast-image'
import {getW780ImageUrl} from '../Api/url'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {Horizontal} from '../Component/Horizontal'


  export default  FirstRoute = (props) => { 
 
    const [data,Setdata] = useState([])
    const [data1,Setdata1] = useState([])
    const [Loading,setLoading] = useState(true)
    useEffect(() => {
      fetchs()
     }, [data]);
    const Recom=`https://api.themoviedb.org/3/movie/${props.id}/recommendations?api_key=49f1812525f0689d9aac69682489db56&language=en-US&page=1`
    const Credit=`https://api.themoviedb.org/3/movie/${props.id}/credits?api_key=49f1812525f0689d9aac69682489db56&language=en-US&page=1`
     const fetchs =async()=>{
    
      Promise.all([
        await fetch(Recom).then(value => value.json()),
        await  fetch(Credit).then(value => value.json()) 
         ])
         .then((value) => {
            Setdata(value[0].results)
            Setdata1(value[1].cast)
         })
         .catch((err) => {
             console.log(err);
         }) .finally(() => setLoading(false));
     }
    
   
   

     return ( 
      <View style={{flex:1,width:wp('100%'),margin:0}}> 
     
    
         {   Horizontal(data,{Loading},"You Might Like") }
       <Text style={{color:'white',paddingLeft:25,paddingTop:10, fontFamily: "Poppins-SemiBold",fontSize:14}}>Caste & Crew</Text> 
       <FlatList 
       
        showsHorizontalScrollIndicator={false}
        initialNumToRender={20}
        maxToRenderPerBatch={20}
          data={data1}
          numColumns={3}
        style={{margin:20,flex:1}}
          renderItem={({ item }) => (
            
            <View style={{margin:10,flexShrink:2}}>
           <FastImage source={{uri:getW780ImageUrl(item.profile_path)}} style={{width:wp('25%'),height:hp('15%'),borderRadius:8}}/>
           <Text style={{textAlign:'center',fontFamily:'Poppins-Regular',color:'white',fontSize:10}}>{item.name}</Text>
           </View>
 
          )}
          keyExtractor={({ id }) => id.toString()}
        />
         </View> 
      
     
     );
        }

 