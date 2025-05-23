import auth from '@react-native-firebase/auth';

export const signUp = (email: string, password: string) => {
  return auth().createUserWithEmailAndPassword(email, password);
};

export const signIn = (email: string, password: string) => {
  return auth().signInWithEmailAndPassword(email, password);
};

export const signOut = () => {
  return auth().signOut();
};