import React, { useState } from 'react';
import { View, Image, Button, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const AssociacaoImagens = ({ onImagemSelecionada }) => {
  const [imagem, setImagem] = useState(null);

  const selecionarImagem = async () => {
    const resultado = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (resultado.canceled === false) {
      // Aviso: "cancelled" foi substituído por "canceled"
      setImagem(resultado.assets && resultado.assets.length > 0 ? resultado.assets[0].uri : null);
      onImagemSelecionada(resultado.assets && resultado.assets.length > 0 ? resultado.assets[0].uri : null);
    }
  };

  return (
    <View style={styles.container}>
      {imagem && <Image source={{ uri: imagem }} style={styles.imagem} />}
      <Button title="Selecionar Imagem" onPress={selecionarImagem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 20,
  },
  imagem: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginTop: 10,
  },
});

export default AssociacaoImagens;
