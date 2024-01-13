import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';

const ListagemFornecedores = ({ fornecedores }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Lista de Fornecedores:</Text>
      {fornecedores.map((fornecedor) => (
        <View key={fornecedor.id} style={styles.fornecedorContainer}>
          <Text style={styles.fornecedorNome}>{fornecedor.nome}</Text>
          <Text style={styles.fornecedorCategoria}>{fornecedor.categoria}</Text>
          {/* Adicione mais informações do fornecedor conforme necessário */}
          <Image
            source={{ uri: fornecedor.imagemUri }}
            style={{ width: 100, height: 100, borderRadius: 50 }}
          />
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 20,
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  fornecedorContainer: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 10,
    marginBottom: 10,
  },
  fornecedorNome: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  fornecedorCategoria: {
    fontSize: 14,
    color: '#666',
  },
});

export default ListagemFornecedores;
