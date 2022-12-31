import { View } from "react-native";
import styles from "./styles";
import LottieView from 'lottie-react-native'
import splashAluraMed from '../../assets/splash-aluramed.json';

const SplashScreen = ({ navigation }) => {
  const onFinish = () => {
    // garante que a tela de splash só aparece uma vez
    navigation.reset({
      index: 0,
      routes: [{ name: 'Onboarding' }]
    });
  };

  return (
    <View style={styles.container}>

      <LottieView
        source={splashAluraMed}
        loop={false}
        autoPlay={true}
        onAnimationFinish={onFinish}
      />
    </View>
  )
};

export default SplashScreen;