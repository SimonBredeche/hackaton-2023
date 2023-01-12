import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      marginTop: '20%'
    },
    textSize: {
        fontSize: 20
    },
    centerGif: {
        width: 300, 
        height: 200,
        marginTop: '7%'
    },
    textStatus:{
        marginTop: '2%',
        fontSize: 25
    },
    container1:{
        backgroundColor: 'white',
        borderRadius: 8,
        paddingVertical: 20,
        paddingHorizontal: 25,
        width: '90%',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center'
        
    },
    container2:{
        backgroundColor: 'white',
        borderRadius: 8,
        paddingVertical: 45,
        paddingHorizontal: 25,
        width: '90%',
        marginVertical: 10,
        alignItems: 'center'
    },
    shadowProp: {
        shadowOffset: { width: 10, height: 10 },
        shadowColor: 'black',
        shadowOpacity: 1,
        elevation: 4,
        backgroundColor : "#0000"
      },
  });
