import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  TouchableHighlight,
  FlatList,
  Modal,
  
} from 'react-native';
console.disableYellowBox = true;
import firebase from 'firebase'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';
import styles from '../Styles/Style';
import { useNavigation } from '@react-navigation/native';


export default function Signin(){
const [modalVisible, setModalVisible] = useState(false);
const navigation = useNavigation()
const DATA = [
  {
    id:1,
    title: 'Autoplay',
  },
  {
    id:2,
    title: 'Language',
  },
  {
    id:3,
    title: 'Watchlist',
  },
  {
    id:4,
    title: 'Favourite',
  },
  {
    id:5,
    title: 'Signout',
  },

];
const Item = (props) => (
  
  <TouchableOpacity onPress={()=>check(props)}>
  <View style={{width:wp('100%'),borderBottomWidth:1}}>
    
    <Text style={styles.title}>{props.item.title}</Text>
  
  </View>
  </TouchableOpacity>
);
const renderItem = ( item ) => (
  <Item item={item.item} />
);
 
function check(props){
  if(props.item.id===1)
  {
    return(alert(props.item.title))
  }
  else if(props.item.id===2)
  {
    return(alert(props.item.title))
  }
 else if(props.item.id===3){
   return (navigation.navigate('Tabviews'))
  }
  else if(props.item.id===4)
  {
    return (navigation.navigate('Tabviews'))
  }
  else if(props.item.id===5)
  {
    return(setModalVisible(true))
  }
}

const logout = async() => {
  try{
    await firebase.auth().signOut()
  }catch(e)
  {
    console.log(e)
  }
}

   return(
    <SafeAreaView style={styles.container}>
       <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}

      >
         <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Confirm Sign Out</Text>
          <View style={styles.inner}>
          <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['rgb(255,98,56)', 'rgb(254,210,122)']} style={styles.linearGradient}>
            <TouchableHighlight
            style={{alignItems:'center',marginTop:'5%',width:'80%'}}
            onPress={() => logout() }
            >
              <Text style={styles.buttonText}>Sign Out</Text>
            </TouchableHighlight>
            </LinearGradient>
            <View style={styles.CancelButton}>
            <TouchableHighlight
            style={{alignItems:'center',marginTop:'5%',width:'90%'}}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Text style={styles.buttonText2}>Cancel</Text>
            </TouchableHighlight>
            </View>
            </View>
          </View>
        </View>

        </Modal>
        
        <View style={{height:30,marginBottom:20,flexDirection:'row',justifyContent:'center',marginTop:20}}>
<Text style={styles.HeaderText}>Settings</Text>
</View>

      <ImageBackground source={require('../assests/Group.png')} style={styles.splashstyle}/>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
  </SafeAreaView>
);
}