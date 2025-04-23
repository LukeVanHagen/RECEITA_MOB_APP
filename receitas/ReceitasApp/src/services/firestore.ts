import firestore from '@react-native-firebase/firestore';
import { Recipe } from '../models/Recipe';

const receitasCollection = firestore().collection('receitas');

export const adicionarReceita = async (receita: Recipe) => {
  await receitasCollection.add(receita);
};

export const obterReceitas = async () => {
  const snapshot = await receitasCollection.orderBy('criadoEm', 'desc').get();
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as Recipe[];
};

export const atualizarReceita = async (id: string, dados: Partial<Recipe>) => {
  await receitasCollection.doc(id).update(dados);
};

export const removerReceita = async (id: string) => {
  await receitasCollection.doc(id).delete();
};