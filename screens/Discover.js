import { SafeAreaView, View, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import React, { useLayoutEffect } from "react";

const Discover = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView>
      <Text>Discover</Text>
    </SafeAreaView>
  )
}

export default Discover