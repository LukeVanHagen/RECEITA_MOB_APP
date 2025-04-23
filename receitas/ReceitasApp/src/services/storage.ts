import storage from '@react-native-firebase/storage';

export const uploadImage = async (uri: string, path: string) => {
  const reference = storage().ref(path);
  await reference.putFile(uri);
  const url = await reference.getDownloadURL();
  return url;
};

export const deleteImage = async (path: string) => {
  const reference = storage().ref(path);
  await reference.delete();
};