import {StyleSheet,Dimensions} from 'react-native';



export default styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor:'rgb(14,23,30)'
      },
  
      splashstyle: {
           width:'100%',
          alignSelf:'flex-end',
          marginTop:270,
          opacity:.5 ,
          position:'absolute'  
      
      },
        item: {
         
        },
        title: {
          color:'white',
          margin:20,
          fontFamily:'Poppins-SemiBold',
         
        },
        HeaderText:
      {color:'white',fontFamily:'Poppins-SemiBold'},
      centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
      modalView: {
        justifyContent:'center',
        backgroundColor: "rgb(22,40,54)",
       
        borderRadius: 20,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
      },
      textStyle: {
        color: "blue",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        margin: 1,
        color:'white',
        textAlign: "center",
      
        fontFamily:"Poppins-SemiBold",
        marginBottom:15
      },
      linearGradient: {
        borderRadius: 43,
        width:'40%',
        margin:15,
        alignItems:'center'
      },
      buttonText: {
        margin:10,
        alignItems:'center',
        color: 'rgb(20,32,41)',
        
        fontFamily:'Poppins-SemiBold',
      },
      buttonText2: {
        margin:10,
        alignItems:'center',
        color: 'white',
      
        fontFamily:'Poppins-SemiBold',
      },
      CancelButton: {
        borderRadius: 43,
        width:'40%',
        borderWidth:1,
        borderColor:'rgb( 255,106,61)',
        margin:15,
        alignItems:'center',
       
      },
      inner:
      {flexDirection:'row',alignItems:'stretch',marginLeft:15},
  });