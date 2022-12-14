import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";
import { StyleSheet, ScrollView, View, Text } from "react-native";
import PouchDB from "pouchdb-react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Toast from "react-native-toast-message";
import Header from "./components/Header";
import CatagoryView from "./components/Catagories/CatagoryView";

export default function App() {
  const localDB = new PouchDB("catagories");
  const remoteDB = new PouchDB("http://localhost:5984/docs");
  const sync = localDB.sync(remoteDB, {
    live: true,
    retry: true,
  });

  const [catagoryComponent, setCatagoryComponent] = useState(false);
  const [catagories, setCatagories] = useState([]);

  useEffect(() => {
    localDB.info().then((info) => console.log(info));
    //remoteDB.info().then((info) => console.log(info));
  });

  return (
    <>
      <Header
        name="Ryan"
        showCatagoryComponent={(bool) => setCatagoryComponent(bool)}
      />
      {catagoryComponent ? (
        <CatagoryView
          closeCatagoryView={(bool) => setCatagoryComponent(bool)}
          catagories={catagories}
        />
      ) : (
        ""
      )}
      <StatusBar style={styles.statusBar} />
      <View style={styles.container}>
        <Text>Welcome!</Text>
      </View>
      <Toast />
    </>
  );
}

const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: "4cc9f0",
  },
  container: {
    flex: 1,
    marginTop: 80,
    padding: "2%",
  },
});
