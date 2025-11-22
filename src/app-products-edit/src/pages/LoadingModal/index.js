import React from "react";
import { Modal, View, Image } from "react-native";
import styles from './styles';

export default function LoadingModal({ visible }){
    return(
        <Modal
            transparent
            animationType="fade"
            visible={visible}
            >
            <View style={styles.container}>
                <Image 
                    style={styles.gif}
                    source={require('./../../../assets/loading.gif')}
                    resizeMode="contain"
                    />
            </View>
        </Modal>
    );

}