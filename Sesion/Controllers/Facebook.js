import {
    loginFacebook,
    userinfo,
    providerFacebook,
  } from '../Controllers/Firebase.js'
import { FacebookAuthProvider } from "firebase/auth"; //agregar las api de firebase para importarla
const provider = new FacebookAuthProvider();

import { getAuth } from "firebase/auth";

const auth = getAuth(); //TENER EN CUENTA PARA LA AUTENTICACION
auth.languageCode = 'it';
// To apply the default browser preference instead of explicitly setting it.
// auth.useDeviceLanguage();

  const facebook = document.getElementById('facebook')
  
  async function Facebook() {
    try {
      await loginFacebook(providerFacebook)
      await userinfo()
      window.location.href = '../Templates/Home.html'
    } catch (error) {
      // Manejo de errores
    }
  }
  
  window.addEventListener('DOMContentLoaded', () => {
    facebook.addEventListener('click', Facebook)
  })

//estrcutura compleata para el inicio y autenticacion mediante facebook
import { getAuth, signInWithPopup, FacebookAuthProvider } from "firebase/auth";

const auth = getAuth();
signInWithPopup(auth, provider)
  .then((result) => {
    // The signed-in user info.
    const user = result.user;

    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    const credential = FacebookAuthProvider.credentialFromResult(result);
    const accessToken = credential.accessToken;

    // IdP data available using getAdditionalUserInfo(result)
    // ...
  })
  .catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = FacebookAuthProvider.credentialFromError(error);

    // ...
  });

  
