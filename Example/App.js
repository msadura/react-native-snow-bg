/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  Dimensions
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Snow from 'react-native-snow-bg';
import BgImg from './winterBg.jpg';

const {width, height} = Dimensions.get('window');

const App: () => React$Node = () => {
  return (
    <>
      <Image source={BgImg} style={styles.bg} />
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>React Native Snow bg</Text>
        </View>
      </SafeAreaView>
      <Snow fullScreen snowflakesCount={150} fallSpeed="medium" />
    </>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.white,
  },
  bg: {
    width,
    height,
    position: 'absolute'
  },
});

export default App;
