import AsyncStorage from '@react-native-async-storage/async-storage';

import { mealRegisterGetAll } from './mealRegisterGetAll';
import { MealStorageDTO } from './MealStorageDTO';
import { MEALS_COLLECTION } from '@storage/storageConfig';

export async function mealRegisterDelete(mealToDelete: MealStorageDTO) {
    try {
        const storedMeals = await mealRegisterGetAll();

        const index = storedMeals.findIndex(item => item.title === mealToDelete.title);

        const mealToDeleteData = mealToDelete.data[0];

        const notDeletedMeals = storedMeals[index].data.filter(item => item.id !== mealToDeleteData.id);

        storedMeals[index].data = notDeletedMeals;

        const filteredStoredMeals = storedMeals.filter( meal => meal.data.length > 0);
        
        const storage = JSON.stringify(filteredStoredMeals);

        await AsyncStorage.setItem(MEALS_COLLECTION, storage);

    } catch (error) {
        throw error;
    }
}