import React, { useState } from 'react';
import { View, Button, Image, Text } from 'react-native';
import { launchCamera } from 'react-native-image-picker';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

const PostScreen = () => {
  const [foto, setFoto] = useState<string | null>(null);
  const [titulo, setTitulo] = useState<string>('');
  const [ingredientes, setIngredientes] = useState<string>('');
  const [modoPreparo, setModoPreparo] = useState<string>('');

  const tirarFoto = () => {
    launchCamera({ mediaType: 'photo' }, (response) => {
      if (response.assets?.[0]?.uri) {
        setFoto(response.assets[0].uri);
      }
    });
  };

  const postarReceita = async () => {
    if (!foto || !titulo || !ingredientes || !modoPreparo) return;

    const nomeArquivo = `receitas/${Date.now()}.jpg`;
    const referenciaStorage = storage().ref(nomeArquivo);
    await referenciaStorage.putFile(foto);

    const urlFoto = await referenciaStorage.getDownloadURL();

    await firestore().collection('receitas').add({
      titulo,
      ingredientes: ingredientes.split(','),
      modoPreparo,
      foto: urlFoto,
      curtidas: 0,
      usuario: auth().currentUser?.uid,
      criadoEm: firestore.FieldValue.serverTimestamp(),
    });

    setFoto(null);
    setTitulo('');
    setIngredientes('');
    setModoPreparo('');
  };

  return (
    <View>
      <Button title="Tirar Foto" onPress={tirarFoto} />
      {foto && <Image source={{ uri: foto }} style={{ width: 200, height: 200 }} />}
      <Text>Título:</Text>
      <TextInput value={titulo} onChangeText={setTitulo} />
      <Text>Ingredientes (separados por vírgula):</Text>
      <TextInput value={ingredientes} onChangeText={setIngredientes} />
      <Text>Modo de Preparo:</Text>
      <TextInput value={modoPreparo} onChangeText={setModoPreparo} />
      <Button title="Postar Receita" onPress={postarReceita} />
    </View>
  );
};

export default PostScreen;