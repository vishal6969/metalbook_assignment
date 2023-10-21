import * as React from 'react';
import {Text, View, ViewStyle} from 'react-native';
import {LinearGradient} from 'react-native-linear-gradient';
import colors from '../../constants/colors';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import styles from './styles';
import {IconProp} from '@fortawesome/fontawesome-svg-core';
import {Shadow} from 'react-native-shadow-2';

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
      <Shadow
        style={{elevation: 5}}
        corners={{
          topStart: false,
          topEnd: false,
          bottomStart: false,
          bottomEnd: false,
        }}
        sides={{top: false, start: false, end: false, bottom: false}}>
        <LinearGradient
          style={styles.iconGradient}
          colors={[colors.milkyWhite, colors.white]}>
          <View style={styles.dollarIcon}>
            <FontAwesomeIcon
              color={icon.color}
              size={icon.size}
              icon={icon.component}
            />
          </View>
        </LinearGradient>
      </Shadow>
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
    </View>
  );
};

export default BulletinComponent;
