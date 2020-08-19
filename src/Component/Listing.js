import React, { useState, useEffect } from 'react'
import { FlatList,View ,Text,TouchableOpacity, Image,TouchableWithoutFeedback} from 'react-native'
import  {getPopularMoviesUrl} from '../Api/url'
import  {getTopRatedMoviesUrl} from '../Api/url'
import  {getTrendingDailyMoviesUrl} from '../Api/url'
import  {getTrendingWeeklyMoviesUrl} from '../Api/url'
import FastImage from 'react-native-fast-image'
import {getW780ImageUrl} from '../Api/url'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
function  Listing  ({route,navigation}) {
  const {  otherParam } = route.params;
 
     
    const [data, setData] = useState([])
    const [Loading,setLoading] =useState('')
    const [count ,setCount] = useState(1)
    var  Movie=''
    if(otherParam==='Arriving Today'){
      Movie= getTrendingDailyMoviesUrl(1)
    }else if(otherParam==='Popular Movies'){
      Movie=getTopRatedMoviesUrl(1)
    }else if(otherParam==='Trending Daily'){
      Movie=getPopularMoviesUrl(1)
    }else{
     Movie=getTrendingWeeklyMoviesUrl(1)
    }
    useEffect(() => {
      loadMore()
    },[])
  
    const renderData = ( {item} ) => {
      
      return(
      <View style={{flex:1,flexDirection:'row',margin:10,width:wp('100%')}}>
        <TouchableWithoutFeedback onPress={()=>navigation.navigate('Detail', {
                itemId:item.id,
                otherParam:item,
              
              })} >
            <FastImage source={{uri:getW780ImageUrl(item.poster_path)}} style={{width:wp('42%'),borderRadius:5,aspectRatio:hp(0.25)}}  />
           
           </TouchableWithoutFeedback>
           </View>
      )
    }
   
    const loadMore = () => {
    
        fetch(Movie +count )
        .then((response) => response.json())
        .then((json) =>{ 
          let update = data.concat(json.results)
          setCount(count+1),
          setData(update)})
        .catch((error) =>console.log(error))
        .finally(() => setLoading(false));
    }
    return(
       <View style={{backgroundColor:'rgb(14,23,30)',width:wp('100%'),height:hp('100'),flexWrap: 'wrap'}}>
        <Text style={{marginTop:45,color:'white',marginLeft:40,lineHeight:30}}>40 Videos</Text>
       <View  style={{height:'0.2%',width:wp('100%'),backgroundColor:'white',marginTop:10}}></View>
        <FlatList
    
        
        data = { data}
        numColumns={2}
        style={{margin:10,flex:1}}
        renderItem = { renderData }
         onEndReached = { loadMore }
        
      />
      </View>
    )
  }
   
  export default Listing