 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-analytics.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyDxdaNzK33_k7Wbmj4mOxImjL54ea3TO1A",
   authDomain: "nataly-bffd9.firebaseapp.com",
   projectId: "nataly-bffd9",
   storageBucket: "nataly-bffd9.appspot.com",
   messagingSenderId: "427779106345",
   appId: "1:427779106345:web:3b25f5904016ad7a8d1e38",
   measurementId: "G-K8ZX8SE907"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);

document.querySelectorAll('a.smooth-scroll').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    });
});
