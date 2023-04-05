import { View, Text, Image } from "react-native";
import React from "react";
import Onboarding from "react-native-onboarding-swiper";
import { useNavigation } from "@react-navigation/native";
import { Button } from '@rneui/base';

const OnboardingScreen = () => {
  const navigation = useNavigation();

  const DotComponent = ({ selected }) => {
    return (
      <View
        className={`w-4 h-4 mx-1 flex items-center justify-center rounded-full ${selected ? "border border-blue-600" : ""
          }  p-2`}
      >
        <View
          className={`w-2 h-2 ${selected ? "bg-blue-600" : "bg-blue-200"
            } rounded-full`}
        ></View>
      </View>
    );
  };
  const Square = ({ isLight, selected }) => {
    let backgroundColor;
    if (isLight) {
      backgroundColor = selected ? '#fefefa' : '#fefefa';
    } else {
      backgroundColor = selected ? '#fefefa' : '#fefefa';
    }
    return (
      <View
        style={{
          width: 6,
          height: 6,
          marginHorizontal: 3,
          backgroundColor,
        }}
      />
    );
  };

  const backgroundColor = isLight => (isLight ? 'blue' : '#f0f8ff');
  const color = isLight => backgroundColor(!isLight);

  const Done = ({ isLight, ...props }) => (
    <Button
      title={'Done'}
      buttonStyle={{
        backgroundColor: backgroundColor(isLight),
        marginRight: 10,
        borderRadius: 8,
        padding: 12
      }}
      containerViewStyle={{
        marginVertical: 10,
        width: 70,
        backgroundColor: backgroundColor(isLight),
      }}
      textStyle={{ color: color(isLight) }}
      {...props}
    />
  );

  const Skip = ({ isLight, skipLabel, ...props }) => (
    <Button

      title={'Skip'}
      buttonStyle={{
        backgroundColor: backgroundColor(isLight),
        marginLeft: 10,
        borderRadius: 8,
        padding: 12
      }}
      containerViewStyle={{
        marginVertical: 10,
        width: 70,
      }}
      textStyle={{ color: color(isLight) }}
      {...props}
    >
      {skipLabel}
    </Button>
  );

  const Next = ({ isLight, ...props }) => (
    <Button
      title={'Next'}
      buttonStyle={{
        backgroundColor: backgroundColor(isLight),
        marginRight: 10,
        borderRadius: 8,
        padding: 12
      }}
      containerViewStyle={{
        marginVertical: 10,
        width: 70,
        backgroundColor: backgroundColor(isLight),
      }}
      textStyle={{ color: color(isLight) }}
      {...props}
    />
  );

  return (
    <Onboarding
      onSkip={() => navigation.replace("Home")}
      onDone={() => navigation.replace("Home")}
      DotComponent={DotComponent}
      NextButtonComponent={Next}
      SkipButtonComponent={Skip}
      titleStyles={{ color: '#1f75fe', fontWeight: "bold", fontSize: '50' }} // set default color for the title
      pages={[
        {
          backgroundColor: "#fefefa",
          image: (
            <Image
              source={{
                uri: "https://previews.123rf.com/images/irfanfirdaus/irfanfirdaus2003/irfanfirdaus200300016/143492365-vector-illustration-mobile-online-shopping-women-shop-online-with-smartphone-mobile-shopping-concept.jpg",
              }}
              className="w-72 h-72 object-contain"
            />
          ),
          title: "Explore",
          subtitle:
            "See Cities You'd Love to be in",
        },
        {
          backgroundColor: "#fefefa",
          image: (
            <Image
              source={{
                uri: "https://cdn.dribbble.com/users/1458982/screenshots/4291206/sign-in-dribble.png?compress=1&resize=400x300&vertical=top",
              }}
              className="w-72 h-72 object-contain"
            />
          ),
          title: "All you need in One PLace",
          subtitle:
            "Every Travel Detail You Need on One App!",
        },
        {
          backgroundColor: "#fefefa",
          image: (
            <Image
              source={{
                uri: "https://thumbs.dreamstime.com/b/woman-shopping-sales-happy-young-holding-paper-bags-enjoying-126694001.jpg",
              }}
              className="w-72 h-72 object-contain"
            />
          ),
          title: "Happy Place, Happy People",
          subtitle:
            "Find Your Next Travel Destination Today.",
        },
      ]}
    />
  );
};

export default OnboardingScreen;