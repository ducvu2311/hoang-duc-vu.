import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const features = [
  { id: 1, title: 'Scan new', subtitle: 'Scanned 483', icon: 'scan-outline', bgColor: '#E8EAFD' },
  { id: 2, title: 'Counterfeits', subtitle: 'Counterfeited 32', icon: 'alert-circle-outline', bgColor: '#FDE8E8' },
  { id: 3, title: 'Success', subtitle: 'Checkouts 8', icon: 'checkmark-circle-outline', bgColor: '#E8FDF4' },
  { id: 4, title: 'Directory', subtitle: 'History 26', icon: 'calendar-outline', bgColor: '#E8F0FD' }
];

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.hello}>Hello 👋</Text>
          <Text style={styles.name}>Đức Vũ</Text>
        </View>
        <Image 
          source={{ uri: 'https://randomuser.me/api/portraits/women/45.jpg' }} 
          style={styles.avatar} 
        />
      </View>

      {/* Features Grid */}
      <View style={styles.featuresGrid}>
        {features.map((item) => (
          <TouchableOpacity key={item.id} style={[styles.featureItem, { backgroundColor: item.bgColor }]}>
            <Ionicons name={item.icon} size={30} color="#555" />
            <Text style={styles.featureTitle}>{item.title}</Text>
            <Text style={styles.featureSubtitle}>{item.subtitle}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Explore More */}
      <TouchableOpacity style={styles.exploreMore}>
        <Text style={styles.exploreText}>Explore More</Text>
        <Ionicons name="arrow-forward-outline" size={20} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: 20, paddingTop: 50, backgroundColor: '#fff' },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 },
  hello: { fontSize: 22, fontWeight: 'bold' },
  name: { fontSize: 18, color: '#666' },
  avatar: { width: 50, height: 50, borderRadius: 25 },
  
  featuresGrid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', marginBottom: 30 },
  featureItem: { width: '48%', paddingVertical: 25, borderRadius: 12, alignItems: 'center' },
  featureTitle: { fontWeight: 'bold', fontSize: 16, marginTop: 8 },
  featureSubtitle: { fontSize: 13, color: '#666', marginTop: 4 },

  exploreMore: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 10 },
  exploreText: { fontSize: 16, fontWeight: 'bold', marginRight: 5 }
});
export default HomeScreen;
