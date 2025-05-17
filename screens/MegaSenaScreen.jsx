import React, { useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet, ImageBackground } from 'react-native';
import { Card } from 'react-native-paper';

const MegaSenaScreen = () => {
  const [jogoGerado, setJogoGerado] = useState([]);
  const [jogosMegaSena, setJogosMegaSena] = useState([]);

  const gerarJogo = () => {
    const novoJogo = [];
    while (novoJogo.length < 6) {
      const numero = Math.floor(Math.random() * 60) + 1;
      if (!novoJogo.includes(numero)) {
        novoJogo.push(numero);
      }
    }
    novoJogo.sort((a, b) => a - b);
    setJogoGerado(novoJogo);
    setJogosMegaSena([...jogosMegaSena, novoJogo]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Button 
          title="Gerar Jogo da Mega Sena" 
          onPress={gerarJogo} 
          color="#4fc3f7"
        />
        
        {jogoGerado.length > 0 && (
          <Card style={styles.card}>
            <Card.Title title="Jogo Gerado" titleStyle={styles.cardTitle} />
            <Card.Content>
              <Text style={styles.jogoText}>
                {jogoGerado.join(' - ')}
              </Text>
            </Card.Content>
          </Card>
        )}

        <Text style={styles.historicoTitle}>Histórico de Jogos:</Text>
        <FlatList
          data={jogosMegaSena}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.jogoItem}>
              <Text style={styles.jogoItemText}>{item.join(' - ')}</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  content: {
    flex: 1,
    borderWidth: 2,
    borderColor: '#4fc3f7',
    borderRadius: 10,
    padding: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
  card: {
    marginVertical: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderWidth: 1,
    borderColor: '#4fc3f7',
  },
  cardTitle: {
    color: '#01579b',
  },
  jogoText: {
    fontSize: 18,
    textAlign: 'center',
    color: '#01579b',
  },
  historicoTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 16,
    color: '#01579b',
  },
  jogoItem: {
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#4fc3f7',
  },
  jogoItemText: {
    color: '#01579b',
  },
});

export default MegaSenaScreen;