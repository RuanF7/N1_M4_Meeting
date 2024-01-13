import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import AssociacaoImagens from '../AssociacaoImagens/AssociacaoImagens';

const CadastroFornecedor = ({ onCadastro }) => {
  const [nome, setNome] = useState('');
  const [categoria, setCategoria] = useState('');
  const [endereco, setEndereco] = useState('');
  const [contato, setContato] = useState('');
  const [imagemUri, setImagemUri] = useState('');

  const handleCadastro = () => {
    // Validar os dados se necessário

    // Criar um novo fornecedor
    const novoFornecedor = {
      id: Math.random().toString(),
      nome,
      categoria,
      endereco,
      contato,
      imagemUri,
      // Adicione mais campos conforme necessário
    };

    // Limpar os campos após o cadastro
    setNome('');
    setCategoria('');
    setEndereco('');
    setContato('');
    setImagemUri('');

    // Enviar os dados para a aba de listagem
    onCadastro(novoFornecedor);
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Nome"
        value={nome}
        onChangeText={(text) => setNome(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Categoria"
        value={categoria}
        onChangeText={(text) => setCategoria(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Endereço"
        value={endereco}
        onChangeText={(text) => setEndereco(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Contato"
        value={contato}
        onChangeText={(text) => setContato(text)}
        style={styles.input}
      />
      <View style={styles.imagemButton}>
        <AssociacaoImagens onImagemSelecionada={setImagemUri} />
      </View>
      <Button title="Cadastrar" onPress={handleCadastro} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    
    
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  imagemButton: {
    paddingTop: 20,
  }
});

export default CadastroFornecedor;