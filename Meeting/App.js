import React, { useState } from 'react';
import { ScrollView, View, Button, StyleSheet } from 'react-native';
import CadastroFornecedor from './components/CadastroFornecedor/CadastroFornecedor';
import ListagemFornecedores from './components/ListagemFornecedores/ListagemFornecedores';

const App = () => {
  const [currentPage, setCurrentPage] = useState('cadastro');
  const [fornecedores, setFornecedores] = useState([]);

  const handleCadastro = (novoFornecedor) => {
    // Atualizar o estado dos fornecedores
    setFornecedores([...fornecedores, novoFornecedor]);

    // Mudar para a aba de listagem
    setCurrentPage('listagem');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'cadastro':
        return <CadastroFornecedor onCadastro={handleCadastro} />;
      case 'listagem':
        return <ListagemFornecedores fornecedores={fornecedores} />;
      // Adicione mais casos conforme necessário
      default:
        return null;
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Button 
          onPress={() => setCurrentPage('cadastro')} title="Cadastro" 
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button 
          onPress={() => setCurrentPage('listagem')} title="Listagem"           
          />          
        </View>
        
      </View>

      {renderPage()}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center',
    width: '90%',
    alignSelf: 'center',
    paddingTop: 100,
    paddingBottom: 20,
  },
  buttonContainer: {
    padding: 5,
  }


});

export default App;
