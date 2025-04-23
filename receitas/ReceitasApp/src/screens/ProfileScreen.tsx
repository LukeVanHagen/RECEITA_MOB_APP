import React, { useEffect, useState } from 'react';
import { View, Text, Button, Image } from 'react-native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const ProfileScreen = () => {
  const [user, setUser] = useState(null);
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const currentUser = auth().currentUser;
    if (currentUser) {
      setUser(currentUser);
      fetchUserRecipes(currentUser.uid);
    }
  }, []);

  const fetchUserRecipes = async (userId) => {
    const snapshot = await firestore()
      .collection('receitas')
      .where('usuario', '==', userId)
      .get();

    const userRecipes = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setRecipes(userRecipes);
  };

  const handleSignOut = async () => {
    await auth().signOut();
  };

  return (
    <View>
      {user && (
        <>
          <Text>Bem-vindo, {user.email}</Text>
          <Button title="Sair" onPress={handleSignOut} />
          <Text>Suas Receitas:</Text>
          {recipes.map(recipe => (
            <View key={recipe.id}>
              <Image source={{ uri: recipe.foto }} style={{ width: 100, height: 100 }} />
              <Text>{recipe.titulo}</Text>
            </View>
          ))}
        </>
      )}
    </View>
  );
};

export default ProfileScreen;