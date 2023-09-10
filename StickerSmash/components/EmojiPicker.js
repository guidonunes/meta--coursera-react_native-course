import {Modal, View, Text, Pressable, StyleSheet } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function EmojiPicker({isVisible, children, onClose}) {
    return (
        <Modal animationType = "slide" transparent={true} visible={isVisible}>
            <View>
                <View>
                    
                </View>
            </View>

        </Modal>
    )
}