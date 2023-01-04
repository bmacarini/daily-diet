import AsyncStorage from '@react-native-async-storage/async-storage';

import { mealRegisterGetAll } from './mealRegisterGetAll';
import { MealStorageDTO } from './MealStorageDTO';

export async function mealRegisterDelete(mealToDelete: MealStorageDTO) {
    try {
        const storedMeals = await mealRegisterGetAll();

        storedMeals.filter(item => item.)

    } catch (error) {
        throw error;
    }
}