import { Platform } from 'react-native';
import RNFetchBlob from 'react-native-fetch-blob'

import config from './config';
import * as firebase from "firebase";

const Blob = RNFetchBlob.polyfill.Blob;
const fs = RNFetchBlob.fs;
window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest;
window.Blob = Blob;

// Prepare Blob support
const generateFileName = () => {
  let date = new Date();
  let year = date.getFullYear() + "";
  let month = (date.getMonth() + 1) + "";
  let day = date.getDate() + "";
  let hour = date.getHours() + "";
  let minute = date.getMinutes() + "";
  let sec = date.getSeconds() + "";
  return year + month + day + hour + minute + sec;
}

export class FirebaseProvider{  
  static fireprovider = firebase.initializeApp(config);
  static database = FirebaseProvider.fireprovider.database();
  static storage = FirebaseProvider.fireprovider.storage();
  
  constructor() {
  }

  static addUser(uri, name, birthyear, gender) {
    return new Promise((resolve, reject) => {
      // Generating Random Names
      let fname = generateFileName();
      let mime = 'application/octet-stream';

      let dbRef = FirebaseProvider.database.ref("users").child(fname);
      let imageRef = FirebaseProvider.storage.ref('images').child(fname);

      const uploadUri = Platform.OS === 'ios' ? uri.replace('file://', '') : uri
      let uploadBlob = null

      fs.readFile(uploadUri, 'base64')
        .then((data) => {
          return Blob.build(data, { type: `${mime};BASE64` });
        })
        .then((blob) => {
          uploadBlob = blob;
          return imageRef.put(blob, { contentType: mime });
        })
        .then(() => {
          uploadBlob.close();
          return imageRef.getDownloadURL();
        })
        .then((url) => {
          dbRef.set({
            name: name,
            url: url,
            birthyear: birthyear,
            gender: gender,
          }).then(res => {
            resolve(fname);
          }).catch(err => {
            reject(err);
          });
        })
        .catch((error) => {
          reject(error);
      });
    });
  }
}