import React, { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import RecipeCard from '../components/RecipeCard';
import { Recipe } from '../models/Recipe';

const FeedScreen = () => {
  const [receitas, setReceitas] = useState<Recipe[]>([]);

  useEffect(() => {
    const subscriber = firestore()
      .collection('receitas')
      .orderBy('criadoEm', 'desc')
      .onSnapshot((querySnapshot) => {
        const listaReceitas: Recipe[] = [];
        querySnapshot.forEach((doc) => {
          listaReceitas.push({ id: doc.id, ...doc.data() } as Recipe);
        });
        setReceitas(listaReceitas);
      });

    return () => subscriber();
  }, []);

  return (
    <View>
      <FlatList
        data={receitas}
        renderItem={({ item }) => <RecipeCard receita={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default FeedScreen;