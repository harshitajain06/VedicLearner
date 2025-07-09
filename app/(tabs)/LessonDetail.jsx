import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  ScrollView,
} from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { WebView } from 'react-native-webview';
import { Ionicons } from '@expo/vector-icons';

const LessonDetail = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { lessonData } = route.params;

  const [modalVisible, setModalVisible] = useState(false);

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleClosePress = () => {
    navigation.navigate('Home');
  };

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
          <Ionicons name="arrow-back" size={28} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Lesson Details</Text>
      </View>

      {/* Content Container */}
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.title}>{lessonData.title}</Text>
        <Text style={styles.description}>{lessonData.description}</Text>

        <TouchableOpacity style={styles.videoButton} onPress={openModal}>
          <Text style={styles.videoButtonText}>Watch Video</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Modal for YouTube Video */}
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <WebView
              source={{ uri: lessonData.youtubeLink }}
              style={styles.video}
              javaScriptEnabled={true}
              allowsFullscreenVideo={true}
            />
            <TouchableOpacity style={styles.closeModalButton} onPress={closeModal}>
              <Ionicons name="close-circle" size={40} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F3F7FA',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: '#567396',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    position: 'relative',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  backButton: {
    position: 'absolute',
    left: 16,
    top: '120%',
    transform: [{ translateY: -14 }],
    zIndex: 2,
  },
  contentContainer: {
    paddingTop: 30,
    paddingBottom: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  description: {
    fontSize: 18,
    lineHeight: 24,
    color: '#666',
    marginBottom: 20,
    textAlign: 'center',
    width: '80%',
  },
  videoButton: {
    padding: 15,
    backgroundColor: '#567396',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  videoButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  modalContent: {
    width: '90%',
    height: '80%',
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    position: 'relative',
  },
  video: {
    flex: 1,
  },
  closeModalButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 1,
  },
});

export default LessonDetail;
