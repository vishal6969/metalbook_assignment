import * as React from 'react';
import {Text, View, ViewStyle} from 'react-native';
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
}

const FlipCard = ({label, text, icon, cardStyle}: FlipCardI) => {
  return (
    <View>
      <View style={[styles.card, cardStyle]}>
        <Text style={styles.label}>{label}</Text>
        <View style={CommonStyles.rowAlignCenter}>
          <Text style={styles.text}>{text}</Text>
          <View style={styles.iconContainer}>
            <FontAwesomeIcon color={colors.transparent} size={40} icon={icon} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default FlipCard;
