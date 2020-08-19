import { StyleSheet, View, Platform,TouchableOpacity,Text } from 'react-native';
import React,{useState,useEffect} from 'react'

import YouTube from 'react-native-youtube';

export default function  Trailer({route}) {
   
  // useEffect(() => {
    
  // },);
  
  const [index, SetIndex] = useState('')
  const [count, SetCount] = useState(0)

  const [data,setData] = useState([])
  const [Loading,setLoading] = useState(true)
  const { otherParam } = route.params;
  alert(otherParam)
  useEffect(() => {
      loads()
     }, []);
    
const Movie= `https://api.themoviedb.org/3/movie/${otherParam}/videos?api_key=49f1812525f0689d9aac69682489db56&language=en-US`     
const loads =()=>{
  fetch(Movie)
  .then((response) => response.json())
  .then((json) =>
    setData(json))
  .catch((error) =>console.log(error))
  .finally(() => setLoading(false));
}  



alert(JSON.stringify(data))

    return (
 
        <View style={{ height: 300,backgroundColor:'rgb(14,23,30)' }}>
 <YouTube
ref={props => {
  this._youTubeRef = props;
}}
  apiKey="AIzaSyDCXBYqF74ZD_wdnaMGMX7sffXS-j3hPrs"
  videoId={data.itemId}
  play 

  fullscreen 
  style={{ alignSelf: 'stretch', height: 300,backgroundColor:'rgb(14,23,30)' }}
/>
<View style={styles.buttonGroup}>

           <TouchableOpacity
            style={styles.button}
            onPress={() => this._youTubeRef && this._youTubeRef.seekTo(count) }>
            <Text style={styles.buttonText} onPress={()=>SetCount(count+5)} >Seek 5</Text>
          </TouchableOpacity>
  
        </View>
        <View style={styles.buttonGroup}>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              this._youTubeRef &&
              this._youTubeRef
                .getCurrentTime()
                .then(index => SetIndex(index))
                .catch(errorMessage => alert(errorMessage))
            }>
            <Text style={styles.buttonText}>
              CurrentTime: {index}
            </Text>
          </TouchableOpacity>
        </View>
         
        </View>
 
    );
  
}
 
const styles = StyleSheet.create({
 
WebViewContainer: {
 
    marginTop: (Platform.OS == 'ios') ? 20 : 0,
 
  }, buttonGroup: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  button: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    alignSelf: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: 'blue',
  },
  
});