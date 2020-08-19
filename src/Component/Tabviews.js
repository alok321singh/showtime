import React from 'react'
import { TabView ,TabBar} from "react-native-tab-view";
import ThirdRoute from '../Tab/thirdRoute'
import FourthRoute from '../Tab/fourthRoute'
import { useNavigation } from '@react-navigation/native';
import {View,
TouchableOpacity,
FlatList,Text,
Dimensions
} from 'react-native';

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
export default function TabViews(){
  const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'first', title: 'Watchlist',font:'Poppins-Medium' },
        { key: 'second', title: 'Favourite',font:'Poppins-Regular' },
      ]);
      const renderScene = ({ route }) => {
       switch (route.key) {
         case 'first':
           return <ThirdRoute id={1} />;
         case 'second':
           return <FourthRoute id={2} />;
         default:
           return null;
       }
     };
  return (
    <TabView
    navigationState={{ index, routes }}
    renderTabBar={renderTabBar}
    renderScene={renderScene}
    onIndexChange={setIndex}
    initialLayout={initialLayout}
  />

  )   
}