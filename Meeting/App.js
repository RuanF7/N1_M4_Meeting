import React, { useState } from 'react';
import { ScrollView, View, Button } from 'react-native';
import CadastroFornecedor from './components/CadastroFornecedor/CadastroFornecedor';
import ListagemFornecedores from './components/ListagemFornecedores/ListagemFornecedores';

const App = () => {
  const [currentPage, setCurrentPage] = useState('listagem');
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
      <View style={{ margin: 20 }}>
        <Button onPress={() => setCurrentPage('cadastro')} title="Cadastro" />
        <Button onPress={() => setCurrentPage('listagem')} title="Listagem" />
        {/* Adicione mais botões conforme necessário */}
      </View>

      {renderPage()}
    </ScrollView>
  );
};

export default App;
