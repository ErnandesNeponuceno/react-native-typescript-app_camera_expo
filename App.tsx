import { StyleSheet, View } from 'react-native';
import Camera from './src/components/CameraView';


export default function App() {
  return (
  <View style={styles.container}>
    <Camera></Camera>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
