import AsyncStorage from '@react-native-async-storage/async-storage';

import { mealRegisterGetAll } from './mealRegisterGetAll';
import { MealStorageDTO } from './MealStorageDTO';
import { MEALS_COLLECTION } from '@storage/storageConfig';
import { dateAlreadyExists } from '@utils/dateAlreadyExists';

export async function mealRegisterEdit(registeredMeal: MealStorageDTO, editedMeal: MealStorageDTO) {

    try {
        const storedMeals = await mealRegisterGetAll();

        const isDateAlreadyExists = await dateAlreadyExists(editedMeal);

        const index = storedMeals.findIndex(item => item.title === registeredMeal.title);

        const registeredMealData = registeredMeal.data[0];
        const editedMealData = editedMeal.data[0];

        const notEditedMeals = storedMeals[index].data.filter(meal => meal.id !== registeredMealData.id);

        const changeIndex = storedMeals.findIndex(item => item.title === editedMealData.date);

        const mealIndex = storedMeals[index].data.findIndex( meal => meal.id === registeredMealData.id);

        if (isDateAlreadyExists) {

            storedMeals[index].data.map(meal => {
                if (editedMealData.id === meal.id) {
                    return editedMealData;
                }
                return meal;
            })

            storedMeals[index].data = notEditedMeals;
            //storedMeals[changeIndex].data.push(editedMealData);
            storedMeals[changeIndex].data.splice(mealIndex, 0, editedMealData);
            

        } else {
            storedMeals[index].data = notEditedMeals;
            storedMeals.push(editedMeal);
        }

        const filteredStoredMeals = storedMeals.filter( meal => meal.data.length > 0);

        const storage = JSON.stringify(filteredStoredMeals);

        await AsyncStorage.setItem(MEALS_COLLECTION, storage);

    } catch (error) {
        throw error;
    }

}