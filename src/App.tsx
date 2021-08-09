import React, { useMemo } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import WebView from 'react-native-webview';
import { WebViewSource } from 'react-native-webview/lib/WebViewTypes';
import { WEBVIEW_URL } from '@env';

const App = () => {
  const source = useMemo<WebViewSource>(
    () => ({
      uri: WEBVIEW_URL,
    }),
    [],
  );
  return (
    <SafeAreaView style={styles.container}>
      <WebView source={source} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
