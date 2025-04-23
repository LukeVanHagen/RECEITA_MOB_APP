import React from 'react';
import { View, Text, Image, Button } from 'react-native';
import firestore from '@react-native-firebase/firestore';

interface RecipeCardProps {
  receita: {
    id: string;
    titulo: string;
    foto: string;
    curtidas: number;
  };
}

const RecipeCard: React.FC<RecipeCardProps> = ({ receita }) => {
  const curtirReceita = async () => {
    await firestore()
      .collection('receitas')
      .doc(receita.id)
      .update({
        curtidas: firestore.FieldValue.increment(1),
      });
  };

  return (
    <View>
      <Image source={{ uri: receita.foto }} style={{ width: '100%', height: 200 }} />
      <Text>{receita.titulo}</Text>
      <Text>Curtidas: {receita.curtidas}</Text>
      <Button title="Curtir" onPress={curtirReceita} />
    </View>
  );
};

export default RecipeCard;