import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ScanScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="chevron-back" size={30} color="#555" />
      </TouchableOpacity>

      {/* Scan Area */}
      <View style={styles.scanBox}>
        <Image 
          source={{ uri: 'https://cooponline.vn/wp-content/uploads/2020/06/nuoc-cam-co-tep-teppy-minute-maid-1l.jpg' }} 
          style={styles.scanImage} 
        />
      </View>

      {/* Product Details */}
      <View style={styles.productCard}>
        <Image 
          source={{ uri: 'https://cooponline.vn/wp-content/uploads/2020/06/nuoc-cam-co-tep-teppy-minute-maid-1l.jpg' }} 
          style={styles.productImage} 
        />
        <Text style={styles.productText}>Nước cam ép</Text>
        <TouchableOpacity style={styles.addButton}>
          <Ionicons name="add-outline" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5E6DA', alignItems: 'center', justifyContent: 'center', paddingHorizontal: 20 },
  backButton: { position: 'absolute', top: 50, left: 20 },

  scanBox: { 
    width: 280, height: 280, borderWidth: 2, borderColor: '#fff', 
    borderRadius: 15, alignItems: 'center', justifyContent: 'center', 
    marginBottom: 40 
  },
  
  scanImage: { width: 220, height: 220, opacity: 0.5 },
  
  productCard: { 
    flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff', 
    padding: 15, borderRadius: 12, position: 'absolute', bottom: 40, 
    width: '90%', justifyContent: 'space-between', elevation: 5 
  },
  
  productImage: { width: 55, height: 55, borderRadius: 10 },
  productText: { fontSize: 17, fontWeight: 'bold' },
  addButton: { backgroundColor: '#4A90E2', padding: 12, borderRadius: 10 }
});


export default ScanScreen;
