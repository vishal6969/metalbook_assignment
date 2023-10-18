import * as React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faBarsStaggered, faBell} from '@fortawesome/free-solid-svg-icons';
import colors from '../../constants/colors';
import CommonStyles from '../../common/styles';
import {BottomTabHeaderProps} from '@react-navigation/bottom-tabs';
import {useRoute} from '@react-navigation/native';
import routes from '../../constants/routes';

const profileImage = require('../../../assets/profile_photo.jpg');

const Header = (props: BottomTabHeaderProps) => {
  const route = useRoute();
  const isDashBoardScreen = route.name === routes.DASHBOARD;

  return (
    <View
      style={[styles.container, !isDashBoardScreen && styles.altHeaderStyle]}>
      <View style={CommonStyles.rowAlignCenter}>
        <FontAwesomeIcon size={24} icon={faBarsStaggered} />
        <Text style={styles.title}>Dashboard</Text>
      </View>
      <View style={CommonStyles.rowAlignCenter}>
        <View style={styles.notificationIcon}>
          <FontAwesomeIcon color={colors.black} size={24} icon={faBell} />
        </View>
        <Image style={styles.profileImage} source={profileImage} />
        <Text style={styles.notificationCount}>2</Text>
      </View>
    </View>
  );
};

export default Header;
