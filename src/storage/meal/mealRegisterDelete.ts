import AsyncStorage from '@react-native-async-storage/async-storage';

import { mealRegisterGetAll } from './mealRegisterGetAll';
import { MealStorageDTO } from './MealStorageDTO';

export async function mealRegisterDelete(mealToDelete: MealStorageDTO) {
    try {
        const storedMeals = await mealRegisterGetAll();

        const index = storedMeals.findIndex(item => item.title === mealToDelete.title);

        storedMeals[index].data.filter(item => item.id !== mealToDelete.data[index].id);

    } catch (error) {
        throw error;
    }
}