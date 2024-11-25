import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
    },
    message: {
      textAlign: 'center',
      paddingBottom: 10,
    },
    camera: {
      flex: 1,
    },
    buttonContainer: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: 'transparent',
      margin: 24,
      gap: 20
    },
    button: {
      flex: 1,
      alignSelf: 'flex-end',
      alignItems: 'center',
      padding: 5
      
    },
    takePhoto:{
        position: 'absolute',
        bottom: 20,
        right: 20
    },
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#000',
      padding: 10
    },
    modalContainerButtons:{
      flex: 1,
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    capturedImage: {
      width: '100%',
      height: '80%',
      resizeMode: 'contain',
    },
  });

export default styles