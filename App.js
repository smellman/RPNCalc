import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Platform,
} from 'react-native';

const STATUSBAR_HEIGHT = Platform.OS == 'ios' ? 20 : StatusBar.currentHeight;

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        { /* 1: 結果を表示するView */ }
        <View style={styles.results}>
          <View style={styles.resultLine}>
          </View>
          <View style={styles.resultLine}>
          </View>
          <View style={styles.resultLine}>
          </View>
        </View>
        { /* 2: ボタンを配置するView */ }
        <View style={styles.buttons}>
          <View style={styles.buttonsLine}>
          </View>
          <View style={styles.buttonsLine}>
          </View>
          <View style={styles.buttonsLine}>
          </View>
          <View style={styles.lastButtonLinesContainer}>
            <View style={styles.twoButtonLines}>
              <View style={styles.buttonsLine}>
              </View>
              <View style={styles.buttonsLine}>
              </View>
            </View>
            <View style={styles.enterButtonContainer}>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: STATUSBAR_HEIGHT,
  },
  // 3: 結果を表示する領域と、一つずつの行のスタイル
  results: {
    flex: 3,
    backgroundColor: '#fff',
  },
  resultLine: {
    flex: 1,
    borderBottomWidth: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  // 4: ボタンを表示する領域と、ボタンの行のスタイル
  buttons: {
    flex: 5,
  },
  buttonsLine: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    alignItems: 'center',
    borderWidth: 1,
  },
  // 5: 最後の二行は組み方が違うので違うスタイルを設定する
  lastButtonLinesContainer: {
    flex: 2,
    flexDirection: 'row',
  },
  twoButtonLines: {
    flex: 3,
  },
  enterButtonContainer: {
    flex: 1,
    alignItems: 'center',
    borderWidth: 1,
  },
});
