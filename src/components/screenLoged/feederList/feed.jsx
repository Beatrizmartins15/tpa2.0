import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';

const FeedersList = () => {
    const [feeders, setFeeders] = useState([
      { name: 'Feeder 1', battery: 50, food: 0 },
      { name: 'Feeder 2', battery: 100, food: 25 },
      { name: 'Feeder 3', battery: 75, food: 50 },
      { name: 'Feeder 4', battery: 100, food: 100 },
      { name: 'Feeder 5', battery: 0, food: 75 },
    ]);
  
    const feedStatus = food => {
      if (food === 100) return 'Cheio';
      if (food >= 50) return 'Na metade';
      if (food >= 25) return 'Quase vazio';
      return 'Totalmente vazio';
    };
  
    return (
      <View style={styles.container}>
        {feeders.map((feeder, index) => (
          <View key={index} style={styles.feeder}>
            <Text>{feeder.name}</Text>
            <Text>Bateria: {feeder.battery}%</Text>
            <Text>Pote de ração: {feeder.food}% ({feedStatus(feeder.food)})</Text>
          </View>
        ))}
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      padding: 16,
    },
    feeder: {
      marginBottom: 20,
    },
  });
  
  export default FeedersList;