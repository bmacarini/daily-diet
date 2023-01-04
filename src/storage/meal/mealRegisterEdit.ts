import Asyncstorage from '@react-native-async-storage/async-storage';

import { mealRegisterGetAll } from './mealRegisterGetAll';
import { MealStorageDTO } from './MealStorageDTO';
import { MEALS_COLLECTION } from '@storage/storageConfig';
import { dateAlreadyExists } from '@utils/dateAlreadyExists';

export async function mealRegisterEdit(registeredMeal: MealStorageDTO, editedMeal: MealStorageDTO) {

    try {
        const storedMeals = await mealRegisterGetAll(); // Peguei toda a lista
        
        const isDateAlreadyExists = await dateAlreadyExists(editedMeal); // Verifiquei se a data da edited meal existe

        if (isDateAlreadyExists) {

            const index = storedMeals.findIndex(item => item.title === registeredMeal.title); // Encontrei a posição da registered meal dentro da lista. Posição para incluir a edited meal.

            storedMeals[index] = editedMeal;


        } else {
            storedMeals.push(editedMeal);
        }

        const storage = JSON.stringify(storedMeals);

        console.log(storage);

        await Asyncstorage.setItem(MEALS_COLLECTION, storage);

    } catch (error) {
        throw error;
    }

}