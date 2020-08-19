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
  import styles from '../Styles/Dashboardstyle'
export default function Tv() {
  const appContext = useContext(globalStore)
  const {  Loading,
    data4,
    data5,
    data6,
    data7 } = appContext 
  return (
    <>
   
   <View style={styles.container} >
   <View style={styles.header}>
         <Text style={styles.headerText}>Tv</Text>
        </View>
   { 
        Horizontal(data4,{Loading},"upcoming") 
      }
    <ScrollView style={{backgroundColor:'rgb(14,23,30)',flex:1}}>
     { 
        Horizontal(data5,{Loading},"Arriving Today") 
      }
 {
      Horizontal(data6,{Loading},"Popular Tv")
 }
 {
      Horizontal(data7,{Loading},"Trending Daily")
 }
  {
      Horizontal(data7,{Loading},'Trending Weekly')
 }
  </ScrollView>
       
        </View>
       
    </>
  )
}