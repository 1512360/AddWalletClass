import { TabNavigator } from 'react-navigation';
import { Dimensions } from 'react-native';
import DealTab from './DealTab/DealTab';
import StatictisTab from './StatictisTab/StatictisTab';
import PlanTab from './PlanTab/PlanTab';
import Colors from '../../Style/Color';

const {height, width} = Dimensions.get('window');

const TabNav = TabNavigator({
    Deal: {
        screen: DealTab
    },
    Statictis: {
        screen: StatictisTab
    },
    Plan: {
        screen: PlanTab
    }
}, {
        tabBarPosition: 'bottom',
        animationEnabled: true,
        tabBarOptions: {
            showIcon: 'true',
            activeTintColor: Colors.active,
            inactiveTintColor: Colors.unactive,
            style: {
                height: height/10,
                backgroundColor: Colors.header
            },
            labelStyle:{
                fontSize: 12
            },
            indicatorStyle:{
                backgroundColor: Colors.header
            },
            iconStyle:{
                 width: '50%'
            }
        }
    })

export default TabNav;