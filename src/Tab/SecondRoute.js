import React, { useState,useEffect } from 'react'
import {View,Text, TouchableOpacity,Image,StyleSheet, Dimensions,FlatList,ScrollView} from 'react-native'



 
export default SecondRoute = (props) => {

    const [data,setData] = useState([])
    const [Loading,setLoading] = useState(true)
    useEffect(() => {
        loads()
       }, []);
      
  const Movie=`https://api.themoviedb.org/3/movie/${props.id}?api_key=49f1812525f0689d9aac69682489db56&language=en-US&page=1`     
  const loads =()=>{
    fetch(Movie )
    .then((response) => response.json())
    .then((json) =>
      setData(json))
    .catch((error) =>console.log(error))
    .finally(() => setLoading(false));
  }  
  const renderData = ({ item }) => {
    
    return(
    <Text style={{color:'white',fontFamily:'Poppins-Light',lineHeight:35}}>{item.name}</Text>
    )
  }
  
    return ( 

  <ScrollView style={{margin:10}}  >
<Text style={{color:'white',fontFamily:'Poppins-SemiBold'}}>Genres</Text>    
<FlatList
    
    data = { data.genres}
     renderItem = { renderData }
  />   
<View style={{width:'100%',borderBottomWidth:1,backgroundColor:'white',marginBottom:30}} />
<Text style={{color:'white',fontFamily:'Poppins-SemiBold'}}>Status</Text>  
<Text style={{color:'white',fontFamily:'Poppins-Light',lineHeight:30}}>{data.status} </Text>
<View style={{width:'100%',height:'0.2%',backgroundColor:'white',marginBottom:30}} /> 
<Text style={{color:'white',fontFamily:'Poppins-SemiBold'}}>vote_average</Text>
<Text style={{color:'white',fontFamily:'Poppins-Light',lineHeight:30}} >{data.vote_average} </Text>
<View style={{width:'100%',height:'0.2%',backgroundColor:'white',marginBottom:30}} /> 
<Text style={{color:'white',fontFamily:'Poppins-SemiBold'}}>Release_date</Text>
<Text style={{color:'white',fontFamily:'Poppins-Light',lineHeight:30}}>{data.release_date}</Text> 

 </ScrollView>
    
    )
}