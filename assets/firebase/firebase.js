        // Import the functions you need from the SDKs you need
        import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";
        import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-analytics.js";
        // TODO: Add SDKs for Firebase products that you want to use

        import { getAuth } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js"
        // https://firebase.google.com/docs/web/setup#available-libraries
      
        // Your web app's Firebase configuration
        // For Firebase JS SDK v7.20.0 and later, measurementId is optional
        const firebaseConfig = {
          apiKey: "AIzaSyDqalphcMpInvqLU6hFILCpD9lxb2-25Ic",
          authDomain: "balles-stock.firebaseapp.com",
          projectId: "balles-stock",
          storageBucket: "balles-stock.appspot.com",
          messagingSenderId: "36331488445",
          appId: "1:36331488445:web:018f296e4594912dd6a3d4",
          measurementId: "G-WH5PXC6WP3"
        };
      
        // Initialize Firebase
        export const app = initializeApp(firebaseConfig);
        const analytics = getAnalytics(app);
        export const auth = getAuth(app)