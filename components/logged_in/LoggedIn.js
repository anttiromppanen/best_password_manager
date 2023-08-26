import { FlatList, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Stack } from "expo-router";
import Icon from "react-native-vector-icons/Ionicons";

import { FIREBASE_AUTH } from "../../firebaseConfig";
import { mockPasswords } from "../../assets/data/mockPasswords";
import SignOutButton from "./SignOutButton";
import { theme } from "../../styles/theme";
import { useState } from "react";
import PasswordListItem from "./PasswordList/PasswordListItem";

function LoggedIn() {
  const [searchBarFocus, setSearchBarFocus] = useState(false);
  const { currentUser } = FIREBASE_AUTH;
  const { data } = mockPasswords;

  // useEffect(() => {
  //   const passwordRef = collection(FIRESTORE_DB, 'passwords');
  //   const q = query(passwordRef, where('user', '==', currentUser.uid))

  //   const unsubscribe = onSnapshot(q, (querySnapshot) => {
  //     const passwords = [];
  //     querySnapshot.forEach((doc) => {
  //       console.log(doc.data());
  //     });
  //   });

  //   return () => unsubscribe();
  // }, [])

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen
        options={{
          headerBackVisible: false,
          headerTitle: 'SALASANAHOLVI',
          headerStyle: { backgroundColor: theme.colors.background },
          headerShadowVisible: false,
          headerRight: () => <SignOutButton />,
        }}
      />

      <View style={styles.searchBarContainer}>
        {!searchBarFocus && <Icon name="search-outline" size={28} color={theme.colors.secondary} />}
        <TextInput
          placeholder="Search"
          style={{ fontSize: 18, width: '100%', marginLeft: 10 }}
          onFocus={() => setSearchBarFocus(true)}
          onBlur={() => setSearchBarFocus(false)}
        />
      </View>

      <FlatList
        data={data}
        renderItem={({ item }) => <PasswordListItem website={item.website} password={item.password} />}
        keyExtractor={item => item.id}
      />

      <TouchableOpacity style={styles.addNewMenu}>
        <Text style={{ color: 'white', fontSize: 40, marginTop: -5 }}>+</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 0,
    margin: 0,
    height: '100%',
    width: '100%',
    paddingHorizontal: 10,
    backgroundColor: theme.colors.background,
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 50,
    height: 50,
    width: '100%',
    backgroundColor: 'white',
    paddingLeft: theme.spacing.sm,
    marginBottom: 10,
    fontSize: 16,
    elevation: 0.2,
  },
  addNewMenu: {
    position: 'absolute',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 10,
    right: 10,
    width: 50,
    height: 50,
    borderRadius: 100,
    backgroundColor: theme.colors.secondary,
  },
});

export default LoggedIn;