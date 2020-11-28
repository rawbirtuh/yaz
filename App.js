/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  Pressable,
  TextInput,
  FlatList,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import ToggleView from './custom/ToggleView';

const Playlist = ({id, tittle}) => (
  <Pressable>
    <Text>{tittle}</Text>
  </Pressable>
);

const Song = ({id, tittle}) => (
  <Pressable>
    <Text>{tittle}</Text>
  </Pressable>
);

const App: () => React$Node = () => {
  const [playlistList, setPlaylistList] = useState([]);
  const [songList, setSongList] = useState([]);

  const [hide, setLibraryView] = useState(false);
  const [playlistLabel, setPlaylistLabel] = useState(
    playlistList === null ? null : playlistList[0],
  );

  return (
    <>
      <StatusBar barStyle="dark-content" />

      {/* Global View */}
      <SafeAreaView style={styles.glob}>
        {/* Drawer Library View */}
        <ToggleView hide={hide} style={styles.libraryView}>
          {/* Debug open/close toggle */}
          <Text>
            Status: {hide ? 'Open library view' : 'Close library view'}
          </Text>

          <View style={styles.playlistList}>
            <FlatList>data={playlistList}</FlatList>
          </View>
          {/* Set up drawer library component from scratch here*/}
        </ToggleView>

        <Pressable
          onPress={() => setLibraryView(!hide)}
          style={styles.viewBtn}
          tittle=">"
          accessibilityLabel="Library Display Toggle"
        />

        {/* Static Content View */}
        <View style={styles.contentView}>
          <Text>Music search</Text>
          <TextInput style={styles.search} />

          <Text>{playlistLabel}</Text>
          <View style={styles.playlistView}>
            <Text>You are using: {playlistLabel}</Text>
            <View style={styles.songList}>
              <Text>How much space does the list take</Text>
            </View>
          </View>
          {/* Inject playlist component here */}
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  glob: {
    flexDirection: 'row',
    flex: 1,
  },
  viewBtn: {
    flex: 0.04,
    backgroundColor: 'purple',
    alignItems: 'stretch',
  },
  libraryView: {
    display: 'flex',
    flex: 0.5,
    flexDirection: 'column',
    backgroundColor: 'skyblue',
  },
  contentView: {
    flex: 1,
    alignItems: 'stretch',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    margin: 5,
  },
  playlistView: {
    flex: 1,
  },
  songList: {
    flex: 1,
    margin: 10,
    backgroundColor: 'gray',
  },
  playlistList: {
    flex: 1,
    margin: 10,
  },
});

export default App;
