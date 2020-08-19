import React, { useContext } from 'react'
import {globalStore} from '../Context/Store'
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    TouchableOpacity,
    ActivityIndicator,
    FlatList,Text
  } from 'react-native';
  import FastImage from 'react-native-fast-image'
  import {getW780ImageUrl} from '../Api/url'
  import Icon1 from 'react-native-vector-icons/AntDesign'
  import {Horizontal} from '../Component/Horizontal'
  import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
  import styles from '../Styles/Dashboardstyle'
export default function Movie() {
  const appContext = useContext(globalStore)
  const { Loading ,data,data1,data2,data3 } = appContext
  // const  rated = ['upcoming','Arriving Today','Popular Movies','Trending Daily','Trending Weekly'];
  
  
   
  return (
    <>
   
   <SafeAreaView style={styles.container} >
   <View style={styles.header}>
         <Text style={styles.headerText}>Movies</Text>
        </View>
   { 
        Horizontal(data,{Loading},"upcoming") 
      }
    <ScrollView style={styles.container} >
     { 
        Horizontal(data,{Loading},"Arriving Today") 
      }
 {
      Horizontal(data1,{Loading},"Popular Movies")
 }
 {
      Horizontal(data2,{Loading},"Trending Daily")
 }
  {
      Horizontal(data3,{Loading},'Trending Weekly')
 }
  </ScrollView>
       
        </SafeAreaView>
       
    </>
  )
}