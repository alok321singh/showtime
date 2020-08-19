import React, { useContext } from 'react'
import {
      View,
    TouchableOpacity,
    FlatList,Text
  } from 'react-native';
  import FastImage from 'react-native-fast-image'
  import {getW780ImageUrl} from '../Api/url'
  import Icon1 from 'react-native-vector-icons/AntDesign'
  import Carousel from 'react-native-snap-carousel';
  import { useNavigation } from '@react-navigation/native';
  import styles from '../Styles/Dashboardstyle'
export function Horizontal(data,{Loading},rated) {

  const navigation = useNavigation()
    _renderItem=(item)=>{
  return (
   
     <FastImage source={{uri:getW780ImageUrl(item.poster_path)}} style={styles.displayImage} />
  ) 
    } 
   

  return (
    <>
          {rated ==='upcoming' ?
          <View style={styles.display}>
           <Carousel
           layout={'default'}
           ref={ref => this.carousel = ref}
           data={data}
           
           sliderWidth={1000}
           itemWidth={1000}
          
           renderItem={({ item }) => (
              <TouchableOpacity onPress={()=>navigation.navigate('Detail', {
                itemId:item.id,
                otherParam:item,
              
              })}>
              { _renderItem(item)}
              
              </TouchableOpacity>
              )}
              autoplay={true}
              autoplayInterval={2500}
              loop={true}
            />
           </View>
          : 
          <View style={styles.display1}> 
          <TouchableOpacity onPress={()=>navigation.navigate('Listing',{
              itemId:rated,
              otherParam:rated,
              name:rated
          })}>
          <Text style={styles.display1headerText}>{rated}< Icon1 name="right" size={12} color='white'  />
          </Text>
          </TouchableOpacity>
            <FlatList 
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            initialNumToRender={20}
            maxToRenderPerBatch={20}
              data={data}
              style={{margin:10}}
              renderItem={({ item }) => (
              <TouchableOpacity onPress={()=>navigation.navigate('Detail', {
                itemId:item.id,
                otherParam:item,
              })}>
              { <FastImage source={{uri:getW780ImageUrl(item.poster_path)}} style={styles.display1image}/>}
              
              </TouchableOpacity>
              )}
              keyExtractor={({ id }) => id.toString()}
            />
             </View> 
          
      
}
        
    </>
  )
}