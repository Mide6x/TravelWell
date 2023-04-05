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
    <SafeAreaView className="flex-1, bg-sky-200 relative ">
      <View className="flex-row items-center justify-between px-8">
        <View className="mt-5">
           <Text className="text-[40px] text-[#1f75fe] font-bold">Discover</Text>
           <Text className="text-[#558eea] text-[36px]">the beauty today</Text>
        </View>
        <View>
       
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Discover