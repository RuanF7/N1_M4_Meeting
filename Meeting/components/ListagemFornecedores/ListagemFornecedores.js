import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';

const ListagemFornecedores = ({ fornecedores }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Lista de Fornecedores:</Text>
      {fornecedores.map((fornecedor) => (
        <View key={fornecedor.id} style={styles.fornecedorContainer}>
          <Image
            source={{ uri: fornecedor.imagemUri }}
            style={{ width: 100, height: 100, borderRadius: 50 }}
          />
          <Text style={styles.fornecedorNome}>{fornecedor.nome}</Text>
          <Text style={styles.fornecedorDados}>{fornecedor.categoria}</Text>
          <Text style={styles.fornecedorDados}>{fornecedor.endereco}</Text>
          <Text style={styles.fornecedorDados}>{fornecedor.contato}</Text>
          <Text style={styles.fornecedorDados}>{fornecedor.imagemUri}</Text>
          {/* Adicione mais informações do fornecedor conforme necessário */}
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
  fornecedorDados: {
    fontSize: 14,
    color: '#666',
  },
});

export default ListagemFornecedores;
