# My-Recipes-Android
React Native... Here I come again! This fullstack recipe mobile Android application made with React Native and PouchDB for offline first data persistence, this repo is a recipe building app that stores all your customizable cooking favorites

## About My Recipes
Welcome to the source code for this amazing recipe making
mobile application soon to be available on Android devices.

This app was created using the amazing *React Native* framework.
The user experience is met when the app opens and a user logs in. Using PouchDB
a user will have their data persisted through local and online databases.
The application will welcome you with an amazing home page also containing user
preferences and theme selections along with upcoming changes and
a way to share their recipes with other users.

You will have the ability to create catagories with a photo and a title of which
ever you desire it to be, such as Baking, Breakfast, Dinner, or Snacks.
Once a catagory is created you will then have the ability to create and store your recipe
under that catagory with images, directions, ingredients and more.

## Logic
As with all React applications the goal is to stray away from
the need to incorporate React Navigation, and state managers. If it can be
done in a clean, effective and efficient manner it will be.

My Recipes does not implement React Navigation or a state management system.

***useState, useEffect, useCallback & useRef hooks 
where enough to create an quick and complex system for the application***

## Database Logic
A new database of its own is created for each catagory the user creates.
A separate database is created to store recipes with a specific catagory key value tieing
the recipe to a catagory that is selected.

## Dependencies
```
{
"expo": "~47.0.8",
"expo-camera": "~13.1.0",
"expo-image-picker": "~14.0.2",
"expo-status-bar": "~1.4.2",
"pouchdb-react-native": "^6.4.1",
"react": "18.1.0",
"react-native": "0.70.5",
"react-native-toast-message": "^2.1.5",
"react-native-vector-icons": "^9.2.0
}
```

## Expo & Development

* Expo 

Expo is a wonderful way to develop React Native mobile applications
for both Android and IOS. I choose expo as it is recommended and
also very easy. I develop application on my Samsung Galaxy s21 ultra with the Expo
app, Acode Editor, and Termux. These three applications are all you need to get started with
a great React Native project.

* Development

To get started with Expo and developing your own app on soley your Android phone
follow the steps below..

1. Download Expo, Acode, and Termux from Google Play Store
   * Termux
      - Open termux, allow access, and use the command ```pkg update && pkg upgrade```
   * Expo
      - Create an account with Expo. This step is easy and quick
2. After following the above steps, open up termux and run a few commands..
   - ```pkg install nodejs```
   - ```npm install -g expocli```
   - ```npx create-expo-app <app name>```
3. At this point you should be ready to start coding
4. cd into your new directory with the name of the app you
created ```cd <app name>```
5. Then run ```npm start```
6. You should see a few prompts printed to the screen and a barcode
7. Open your expo app, the only requirement for this to work is that you are on the same
network, as you should be. Automatically you should see a button with your app name, click on this to
open your app preview. It will bundle your scripts and build your app in development to see.
8. Once that is open you can now open your Acode editor and open your new apps folder to start editing

***You can skip steps 1 - 3 if you have the apps listed and are downloading the source code from this repository.***

## Conclusion
Enjoy! Expo is a great development tool and React Native is an amazing framework!
If you have experience with React already, React Native will be a breeze.
I hope to see lot of downloads when the apk and Google Play Store My Recipe application is ready for production! 
