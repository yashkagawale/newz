import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

import Onboarding from 'react-native-onboarding-swiper';

const Dots = ({ selected }) => {
  let backgroundColor;

  backgroundColor = selected ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.3)';

  return (
    <View
      style={{
        width: 6,
        height: 6,
        marginHorizontal: 3,
        backgroundColor
      }}
    />
  );
}

// const Skip = ({...props}) => (
//     <TouchableOpacity
//         style={{marginHorizontal:10}}
//         {...props}
//     >
//         <Text style={{fontSize:16}}>Skip</Text>
//     </TouchableOpacity>
// );

// const Next = ({...props}) => (
//     <TouchableOpacity
//         style={{marginHorizontal:10}}
//         {...props}
//     >
//         <Text style={{fontSize:16}}>Next</Text>
//     </TouchableOpacity>
// );

const Done = ({ ...props }) => (
  <TouchableOpacity
    style={{ marginHorizontal: 10 }}
    {...props}
  >
    <Text style={{ fontSize: 16, color: 'white' }}>Done</Text>
  </TouchableOpacity>
);

const OnboardingScreen = ({ navigation }) => {
  return (
    <Onboarding
      // SkipButtonComponent={Skip}
      // NextButtonComponent={Next}
      DoneButtonComponent={Done}
      // DotComponent={Dots}
      onSkip={() => navigation.navigate("Main")}
      onDone={() => navigation.navigate("Main")}
      pages={[
        {

          backgroundColor: 'black',
          image: <Image style={styles.fit} source={require('../assets/newz_3_1.png')} />,
          title: 'Connect to the World',
          subtitle: 'A New Way To Connect With The World',
        },
        {
          backgroundColor: 'black',
          image: <Image style={styles.fit} source={require('../assets/slide_1.png')} />,
          title: 'Share Your Favorites',
          subtitle: 'Share Your Thoughts With Similar Kind of People',
        },
        //   {
        //     backgroundColor: 'black',
        //     image: <Image source={require('../assets/onboarding-img3.png')} />,
        //     title: 'Become The Star',
        //     subtitle: "Let The Spot Light Capture You",
        //   },
      ]}
    />
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  fit: {
    height: 900,
    width: 500
  }
});