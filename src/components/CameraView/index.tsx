import {useState, useRef} from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Button, Modal, Image } from 'react-native';
import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import {FontAwesome5 } from '@expo/vector-icons'
import styles from './styles'

export default function Camera (){

const [type, setType] = useState<CameraType>('back');
const [permission, requestPermission] = useCameraPermissions();
const camRef = useRef<CameraView>(null);
const [capturedPhoto, setCapturedPhoto] = useState<string | null>(null);
const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

async function takePicture() {
    try {
        if (camRef.current) {
            const options = { quality: 1 };
            const data = await camRef.current.takePictureAsync(options);
            setCapturedPhoto(data.uri);
            setModalIsOpen(true);
        }
    } catch (error) {
        console.error("Error taking picture:", error);
    }
}

async function savePicture() {
    if(capturedPhoto != null){
        MediaLibrary.saveToLibraryAsync(capturedPhoto).then(()=>{
            setCapturedPhoto(null)
        })
    }
}

function toggleCameraFacing() {
    setType(current => (current === 'back' ? 'front' : 'back'));
}

if (!permission) {
    return <View />;
}

if (!permission.granted) {
return (
    <View style={styles.container}>
        <Text style={styles.message}>Precisamos da sua permissão para acessar a câmera</Text>
        <Button onPress={requestPermission} title="grant permission" />
    </View>
);
}

return(
    <CameraView style={styles.camera} facing={type} ref={camRef} autofocus='on'>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
              <FontAwesome5 name="sync" size={35} color="white" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={takePicture}>
              
              <FontAwesome5 name="camera" size={35} color="white" />
          </TouchableOpacity>
        </View>

    {capturedPhoto && (
        <Modal
            animationType="slide"
            transparent={false}
            visible={modalIsOpen}
        >
            <View style={styles.modalContainer}>
                <Image style={styles.capturedImage} source={{ uri: capturedPhoto }} />
                <View style={styles.modalContainerButtons}>

                    <TouchableOpacity style={{margin: 10}} onPress={()=>{setModalIsOpen(false)}}>
                        <FontAwesome5 name="times" size={35} color="white" />
                    </TouchableOpacity>

                    <TouchableOpacity style={{margin: 10}} onPress={savePicture}>
                        <FontAwesome5 name="save" size={35} color="white" />
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )}  

    </CameraView>
  
)

}

