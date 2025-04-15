import React, { useState } from 'react';
import { View, TextInput, Button, Image, StyleSheet } from 'react-native';

export default function App() {
  const [text, setText] = useState('');
  const [imageUrl, setImageUrl] = useState(null);

  const fetchCatImage = () => {
    if (!text.trim()) return;
    const url = `https://cataas.com/cat/says/${encodeURIComponent(text)}`;
    setImageUrl(url);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder='Type something'
        placeholderTextColor={"#ffffff"}
        value={text}
        onChangeText={setText}
      />
      <View style={styles.button}>
        <Button
          title='Create a cat'
          color='#ffc0cb' // Pink button
          onPress={fetchCatImage}
        />
      </View>
      {imageUrl && <Image source={{ uri: imageUrl }} style={styles.image}/>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  button: {
    marginTop: 15,
    marginBottom: 15
  },
  input: {
    width: '80%',
    height: 40,
    color: '#ffffff',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  image: {
    width: 300,
    height: 400
  }
});