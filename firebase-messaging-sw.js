importScripts('https://www.gstatic.com/firebasejs/7.14.6/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.14.6/firebase-messaging.js');

var firebaseConfig = {
  apiKey: "AIzaSyCEPs7ZHvTcJqrzcdj8neLaLIhvCgCQ6oc",
  authDomain: "fcm-web-93680.firebaseapp.com",
  projectId: "fcm-web-93680",
  storageBucket: "fcm-web-93680.appspot.com",
  messagingSenderId: "633840957400",
  appId: "1:633840957400:web:1910c7befa8f15444ce4ad",
};

firebase.initializeApp(firebaseConfig);
const messaging=firebase.messaging();

messaging.setBackgroundMessageHandler(function (payload) {
    console.log(payload);
    const notification=JSON.parse(payload);
    const notificationOption={
        body:notification.body,
        icon:notification.icon
    };
    return self.registration.showNotification(payload.notification.title,notificationOption);
});