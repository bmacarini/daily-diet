import Asyncstorage from '@react-native-async-storage/async-storage';

import { MEALS_COLLECTION } from '@storage/storageConfig';
import { mealRegisterGetAll } from './mealRegisterGetAll';
import { MealStorageDTO } from './MealStorageDTO';
import { dateAlreadyExists } from '@utils/dateAlreadyExists'

export async function mealRegisterCreate(newMeal: MealStorageDTO) {

    try {
        const storedMeals =  await mealRegisterGetAll();

        const isDateAlreadyExists = await dateAlreadyExists(newMeal);

        const newMealData = newMeal.data[0];

        if (isDateAlreadyExists) {
            const index = storedMeals.findIndex(item => item.title === newMeal.title);
            storedMeals[index].data.push(newMealData);

        } else {
            storedMeals.push(newMeal);
        }

        const storage = JSON.stringify([...storedMeals]);

        await Asyncstorage.setItem(MEALS_COLLECTION, storage);
        
    } catch (error) {
        throw error;
    }
}