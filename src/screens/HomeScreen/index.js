import React from 'react';
import { Text, View } from 'react-native';

export default function HomeScreen({ route }) {
  const { userId } = route.params;
  return (
    <View>
      <Text>{userId}</Text>
    </View>
  );
}
