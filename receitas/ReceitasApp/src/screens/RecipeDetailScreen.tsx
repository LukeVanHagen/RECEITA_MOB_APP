import React, { useEffect, useState } from 'react';
import { View, Text, Image, Button } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import { useRoute } from '@react-navigation/native';
import { Recipe } from '../models/Recipe';

const RecipeDetailScreen = () => {
  const route = useRoute();
  const { recipeId } = route.params;
  const [recipe, setRecipe] = useState<Recipe | null>(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      const recipeDoc = await firestore().collection('receitas').doc(recipeId).get();
      if (recipeDoc.exists) {
        setRecipe({ id: recipeDoc.id, ...recipeDoc.data() } as Recipe);
      }
    };

    fetchRecipe();
  }, [recipeId]);

  if (!recipe) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View>
      <Image source={{ uri: recipe.foto }} style={{ width: '100%', height: 200 }} />
      <Text style={{ fontSize: 24 }}>{recipe.titulo}</Text>
      <Text style={{ fontSize: 18 }}>Ingredientes:</Text>
      <Text>{recipe.ingredientes.join(', ')}</Text>
      <Text style={{ fontSize: 18 }}>Modo de Preparo:</Text>
      <Text>{recipe.modoPreparo}</Text>
      <Button title="Curtir" onPress={() => { /* Implement like functionality */ }} />
    </View>
  );
};

export default RecipeDetailScreen;