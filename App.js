import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

export default function App() {
  const [lampStatus, setLampStatus] = useState('lampOff');


  const toggleLamp = () => {
    lampStatus === 'lampOff' ? setLampStatus('lampOn') : setLampStatus('lampOff');
  }


  return (
    <View style={[styles.container, styles[lampStatus]]}>
      <Text style={{ color: '#fff' }}>Lit</Text>
      <StatusBar style="auto" />
      {/* <Button color='#FFD700' title='Flash Light' /> */}
      <TouchableOpacity
        style={styles.button}
        onPress={toggleLamp}
      >
        <Text>LAMP</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  lampOn: {
    backgroundColor: '#ffffff',
  },
  lampOff: {
    backgroundColor: '#222222',
  },
  button: {
    width: 150,
    height: 25,
    color: '#000000',
    backgroundColor: '#FFD700',
    padding: 20,
    borderRadius: 10,
    textAlign: 'center',
    alignContent: 'center',
  }
});
