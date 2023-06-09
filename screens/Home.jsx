import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useLayoutEffect } from "react";
import * as Animatable from "react-native-animatable";

import { useNavigation } from "@react-navigation/native";
import { HeroImage } from "../assets";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="bg-lightwhite flex-1 relative">
      {/* First Section */}

      <View className="flex-row px-6 mt-10 items-center space-x-0">
        <Text className="text-[#000000] text-3xl font-semibold">Travel</Text>
        <Text className="text-[#1f75fe] text-3xl font-semibold">Well</Text>
      </View>

      {/* Second Section */}
      <View className="px-6 mt-8 space-y-3">
        <Text className="text-[#000000] text-[42px]">Enjoy your trips with</Text>
        <Text className="text-[#1f75fe] text-[38px] font-bold">
          Good Moments.
        </Text>
        <Text className="text-[#656565] text-base">
          Find and Visit The Best Locations There on Earth Based on Your Budget. Plan Your Trips With Us.
        </Text>
      </View>

      {/* Circle Section */}
      <View className="w-[360px] h-[360px] bg-[#5495ff] rounded-full absolute bottom-36 -right-36"></View>
      <View className="w-[400px] h-[400px] bg-[#b5d0ff] rounded-full absolute -bottom-28 -left-36"></View>

      {/* Image container */}
      <View className="flex-1 relative items-center justify-center">
        <Animatable.Image
          animation="fadeIn"
          easing="ease-in-out"
          source={HeroImage}
          className="w-full h-full object-cover mt-20"
        />


        <TouchableOpacity
          onPress={() => navigation.navigate("Discover")}
          className="absolute bottom-20 w-24 h-24 border-l-2 border-r-2 border-t-4 border-[#1f75fe] rounded-full items-center justify-center"
        >



          <Animatable.View
            animation={"pulse"}
            easing="ease-in-out"
            iterationCount={"infinite"}
            className="w-20 h-20 items-center justify-center rounded-full bg-[#1f75fe]"
          >
            <Text className="text-gray-50 text-[36px] font-semibold">Go</Text>
          </Animatable.View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;