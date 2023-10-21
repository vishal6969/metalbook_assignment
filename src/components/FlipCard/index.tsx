import * as React from 'react';
import {Animated, Easing, Pressable, Text, View, ViewStyle} from 'react-native';
import styles from './styles';
import {IconProp} from '@fortawesome/fontawesome-svg-core';
import CommonStyles from '../../common/styles';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import colors from '../../constants/colors';

interface FlipCardI {
  label: string | number;
  text: string | number;
  icon: IconProp;
  cardStyle?: ViewStyle;
  backCardTitle: string | number;
}

const FlipCard = ({label, text, icon, cardStyle, backCardTitle}: FlipCardI) => {
  const animatedValue = new Animated.Value(0);
  const animatedValueRef = React.useRef(0);

  let rotationValue = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });
  let backCardRotationValue = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['180deg', '360deg'],
  });
  animatedValue.addListener(({value}) => {
    animatedValueRef.current = value;
  });

  const flipCard = () => {
    Animated.timing(animatedValue, {
      toValue: animatedValueRef.current === 0 ? 1 : 0,
      duration: 500,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Pressable onPress={flipCard}>
      <Animated.View
        style={[
          styles.card,
          cardStyle,
          {transform: [{rotateY: rotationValue}]},
        ]}>
        <Text style={styles.label}>{label}</Text>
        <View style={CommonStyles.rowAlignCenter}>
          <Text style={styles.text}>{text}</Text>
          <View style={styles.iconContainer}>
            <FontAwesomeIcon color={colors.transparent} size={40} icon={icon} />
          </View>
        </View>
      </Animated.View>
      <Animated.View
        style={[
          styles.card,
          styles.backCard,
          cardStyle,
          {transform: [{rotateY: backCardRotationValue}]},
        ]}>
        <Text style={styles.backCardLabel}>{backCardTitle}</Text>
      </Animated.View>
    </Pressable>
  );
};

export default FlipCard;
