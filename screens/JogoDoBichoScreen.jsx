import React, { useState } from 'react';
import { View, Text, Button, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-paper';

const animais = [
  {
    numero: 1,
    nome: 'Avestruz',
    imagem: 'https://i.pinimg.com/736x/ef/3a/bb/ef3abbbc39b3cacee1ba922f95f1b0cd.jpg',
  },
  {
    numero: 2,
    nome: 'Águia',
    imagem: 'https://i.pinimg.com/736x/88/04/3b/88043b814c6d4fef1f4aee14356c00b1.jpg',
  },
  {
    numero: 3,
    nome: 'Burro',
    imagem: 'https://i.pinimg.com/736x/bc/f3/ee/bcf3eee6436f220cb4d10962e394c741.jpg',
  },
  {
    numero: 4,
    nome: 'Borboleta',
    imagem: 'https://i.pinimg.com/736x/dc/91/91/dc91911cb150d57f2f43da7466d1ab4f.jpg',
  },
  {
    numero: 5,
    nome: 'Cachorro',
    imagem: 'https://i.pinimg.com/736x/82/fb/de/82fbde9c403d43ebc83d79414b9239c3.jpg',
  },
  {
    numero: 6,
    nome: 'Cabra',
    imagem: 'https://i.pinimg.com/736x/10/20/bb/1020bbf758fa245fff4c4b1276e83b8a.jpg',
  },
  {
    numero: 7,
    nome: 'Carneiro',
    imagem: 'https://i.pinimg.com/736x/ce/c4/e6/cec4e6c3f16a63f9a713267ffcf9e114.jpg',
  },
  {
    numero: 8,
    nome: 'Camelo',
    imagem: 'https://i.pinimg.com/736x/85/0b/11/850b11e4c316abfe126ff1866c2aaeb0.jpg',
  },
  {
    numero: 9,
    nome: 'Cobra',
    imagem: 'https://i.pinimg.com/736x/3d/d8/a5/3dd8a5e99264f67efae4074431262878.jpg',
  },
  {
    numero: 10,
    nome: 'Coelho',
    imagem: 'https://i.pinimg.com/736x/eb/17/8b/eb178b465704a327d3e954eef4c7e338.jpg',
  },
];

const JogoDoBichoScreen = () => {
  const [animalGerado, setAnimalGerado] = useState(null);
  const [ultimosAnimais, setUltimosAnimais] = useState([]);

  const gerarAnimal = () => {
    const randomIndex = Math.floor(Math.random() * animais.length);
    const novoAnimal = animais[randomIndex];
    setAnimalGerado(novoAnimal);
    setUltimosAnimais([novoAnimal, ...ultimosAnimais.slice(0, 4)]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <TouchableOpacity 
          style={styles.botao}
          onPress={gerarAnimal}
        >
          <Text style={styles.textoBotao}>Gerar Animal do Bicho</Text>
        </TouchableOpacity>
        
        {animalGerado && (
          <Card style={styles.card}>
            <Card.Title 
              title={`${animalGerado.numero} - ${animalGerado.nome}`} 
              titleStyle={styles.cardTitle}
            />
            <Card.Content style={styles.cardContent}>
              <Image 
                source={{ uri: animalGerado.imagem }} 
                style={styles.image}
                resizeMode="cover"
              />
            </Card.Content>
          </Card>
        )}

        {ultimosAnimais.length > 0 && (
          <View style={styles.historicoContainer}>
            <Text style={styles.historicoTitle}>Últimos animais gerados:</Text>
            {ultimosAnimais.map((animal, index) => (
              <Text key={index} style={styles.historicoItem}>
                {animal.numero} - {animal.nome}
              </Text>
            ))}
          </View>
        )}
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
  botao: {
    backgroundColor: '#4fc3f7',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  textoBotao: {
    color: '#01579b',
    fontWeight: 'bold',
    fontSize: 16,
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
  cardContent: {
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#4fc3f7',
  },
  historicoContainer: {
    marginTop: 20,
  },
  historicoTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#01579b',
    marginBottom: 8,
  },
  historicoItem: {
    fontSize: 14,
    color: '#01579b',
    marginBottom: 4,
  },
});

export default JogoDoBichoScreen;