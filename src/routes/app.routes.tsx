import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '@screens/Home';
import { Stats } from '@screens/Stats';
import { Register } from '@screens/Register';
import { Meal } from '@screens/Meal';
import { Edit } from '@screens/Edit';
import { Feedback } from '@screens/Feedback';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
    return (
        <Navigator
            screenOptions={{ headerShown: false}}
        >
            <Screen 
                name='home'
                component={Home}
            />
            <Screen 
                name='stats'
                component={Stats}
            />
            <Screen 
                name='register'
                component={Register}
            />
            <Screen 
                name='meal'
                component={Meal}
            />
            <Screen 
                name='edit'
                component={Edit}
            />
            <Screen 
                name='feedback'
                component={Feedback}
            />
        </Navigator>
    )
}