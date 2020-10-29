import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps164538Navigator from '../features/Maps164538/navigator';
import Add-Item164537Navigator from '../features/Add-Item164537/navigator';
import Maps164533Navigator from '../features/Maps164533/navigator';
import UserProfile164529Navigator from '../features/UserProfile164529/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps164538: { screen: Maps164538Navigator },
Add-Item164537: { screen: Add-Item164537Navigator },
Maps164533: { screen: Maps164533Navigator },
UserProfile164529: { screen: UserProfile164529Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
