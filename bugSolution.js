import * as Linking from 'expo-linking';
import React, { useEffect, useState } from 'react';

const App = () => {
  const [initialUrl, setInitialUrl] = useState(null);
  useEffect(() => {
    Linking.getInitialURL().then(url => {
      if (url) {
        setInitialUrl(url);
      }
    });

    const subscription = Linking.addEventListener('url', (event) => {
      console.log('Deep link received:', event.url);
      // Handle the deep link here
    });
    // Adding a timeout to improve reliability
    setTimeout(() => {
      if (!initialUrl) {
        console.log('Timeout triggered');
      }
    }, 5000);

    return () => subscription.remove();
  }, []);

  // Use the initialUrl or handle incoming events
  return (
    <View>
      {initialUrl && <Text>Initial URL: {initialUrl}</Text>}
    </View>
  );
};

export default App;