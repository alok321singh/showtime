import { Searchbar } from 'react-native-paper';
import React, { useState } from 'react'


  import {
    SafeAreaView,
    StyleSheet,
    StatusBar,
      Image,
      Keyboard,
      FlatList,
      Text,
      View,
      TouchableOpacity,
      ImageBackground
  } from 'react-native';

 
  
  const Search = ({navigation}) => {
     
       const [Data,SetData] = useState('')
        _onChangeSearch = query =>{   
                  SetData(query)
            fetch(`https://api.themoviedb.org/3/search/multi?api_key=49f1812525f0689d9aac69682489db56&language=en-US&page=1&query=${query}&include_adult=false`)
            .then((response) => response.json())
            .then((json) => SetData(json.results))
            .catch((error) => alert(error))
            
             }
             renderSeparator = () => {  
              return (  
                  <View  
                      style={{  
                         margin:20,
                          height:1,  
                          width: "85%",  
                          backgroundColor: "white", 
                       
                      }}  
                  />  
              );  
          };         

    return (
      <>
        <StatusBar barStyle="dark-content"  backgroundColor={'rgb(14,23,30)'}/>
     
        <SafeAreaView style={styles.container}>
      
        <Searchbar
          placeholder="Search Movies & TV....."
          style={{width:'95%',backgroundColor:'rgb(22,40,54)',margin:10,color:'white'}}
          onChangeText={_onChangeSearch}
           iconColor={'white'}
          placeholderTextColor={'white'}
          inputStyle={{color:'white'}}
           
          
        />
          
          
          <FlatList  
                    data={Data}  
                    renderItem={({item}) =>  
                    <TouchableOpacity onPress={()=>navigation.navigate('Detail', {
                      itemId:item.id,
                      otherParam:item,
                    })}>               
          <Text style={{marginLeft:30,color:'white',fontFamily:'Poppins-Light',fontSize:16}}>{item.original_title!=undefined?item.original_title:item.original_name!=undefined?item.original_name:'No Detail Available'}</Text>
            </TouchableOpacity>}
                    ItemSeparatorComponent={renderSeparator}  
                />  
   
         
      
      
      
        <Image
          style={styles.image}
          source={require('../assests/Group.png')}
        /> 
   
      
        </SafeAreaView>

   
      </>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      height:'100%',
      backgroundColor:'rgb(14,23,30)',
      paddingTop:10,
    
    
    },
   
   image:{
    alignSelf:'flex-end',
    marginTop:340,
    opacity:.2 ,
    position:'absolute'
   },
  });
  
  export default Search;
  
