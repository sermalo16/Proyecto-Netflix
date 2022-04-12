const firebaseConfig = {
    apiKey: "AIzaSyAf4gVbiuPsOPtZrGCAt0lYgAutQb7tglY",
    authDomain: "netflixclone-c40c0.firebaseapp.com",
    projectId: "netflixclone-c40c0",
    storageBucket: "netflixclone-c40c0.appspot.com",
    messagingSenderId: "314211099508",
    appId: "1:314211099508:web:62edee488124b1749c0221"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export {auth}