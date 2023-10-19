import * as React from 'react';
import {Text, View, ViewStyle} from 'react-native';
import {LinearGradient} from 'react-native-linear-gradient';
import colors from '../../constants/colors';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import styles from './styles';
import {IconProp} from '@fortawesome/fontawesome-svg-core';

interface BulletinComponentI {
  icon: {component: IconProp; color?: string; size?: number};
  title: string;
  subtitle: string;
  containerStyle?: ViewStyle;
}

const BulletinComponent = ({
  icon,
  title,
  subtitle,
  containerStyle,
}: BulletinComponentI) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <LinearGradient
        style={styles.iconGradient}
        colors={[colors.milkyWhite, colors.aquaBlue]}>
        <View style={styles.dollarIcon}>
          <FontAwesomeIcon
            color={icon.color}
            size={icon.size}
            icon={icon.component}
          />
        </View>
      </LinearGradient>
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
    </View>
  );
};

export default BulletinComponent;
