import * as React from 'react';
import {Pressable, View} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faHouse, faTableList} from '@fortawesome/free-solid-svg-icons';
import {
  faCommentDots,
  faCalendar,
  faCircleUser,
} from '@fortawesome/free-regular-svg-icons';
import routes from '../../constants/routes';
import styles from './styles';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import colors from '../../constants/colors';
import LinearGradient from 'react-native-linear-gradient';
import {Shadow} from 'react-native-shadow-2';

const TAB_ICONS = {
  [routes.DASHBOARD]: faHouse,
  [routes.TASK_SUMMARY]: faCommentDots,
  [routes.SCREEN3]: faCalendar,
  [routes.SCREEN4]: faTableList,
  [routes.SCREEN5]: faCircleUser,
};

const CustomTabBar = (props: BottomTabBarProps) => {
  const {state, navigation} = props;

  return (
    <Shadow
      startColor={colors.gray2}
      endColor={colors.transparent1}
      distance={30}
      style={{width: '100%'}}>
      <View style={styles.tabBarContainer}>
        {state.routes.map((route, index) => {
          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate({name: route.name, merge: true});
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <Pressable
              onPress={onPress}
              onLongPress={onLongPress}
              key={route.key}>
              <LinearGradient
                style={styles.tabBarIcon}
                colors={[
                  isFocused ? colors.aquaBlue : colors.white,
                  colors.white,
                ]}>
                <FontAwesomeIcon
                  size={24}
                  color={isFocused ? colors.black : colors.gray}
                  icon={TAB_ICONS[route.name]}
                />
              </LinearGradient>
            </Pressable>
          );
        })}
      </View>
    </Shadow>
  );
};

export default CustomTabBar;
