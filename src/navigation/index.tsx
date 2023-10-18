import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import * as React from 'react';
import routes from '../constants/routes';
import {Dashboard, Screen3, Screen4, Screen5, TaskSummary} from '../screens';
import {CustomTabBar, Header} from '../components';

const BottomTab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <BottomTab.Navigator
        screenOptions={{
          header: props => <Header {...props} />,
        }}
        tabBar={props => <CustomTabBar {...props} />}>
        <BottomTab.Screen name={routes.DASHBOARD} component={Dashboard} />
        <BottomTab.Screen name={routes.TASK_SUMMARY} component={TaskSummary} />
        <BottomTab.Screen name={routes.SCREEN3} component={Screen3} />
        <BottomTab.Screen name={routes.SCREEN4} component={Screen4} />
        <BottomTab.Screen name={routes.SCREEN5} component={Screen5} />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
