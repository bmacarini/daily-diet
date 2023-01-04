import { mealRegisterGetAll } from '@storage/meal/mealRegisterGetAll';

import { MealStorageDTO } from '@storage/meal/MealStorageDTO';

export async function dateAlreadyExists(newMeal: MealStorageDTO) {
    try {
        const storageRegisters = await mealRegisterGetAll();

        const storageRegistersDate = storageRegisters.map(( item ) => item.title);

        const dateOfNewMealAlreadyExists = storageRegistersDate.includes(newMeal.title);

        return dateOfNewMealAlreadyExists;

    } catch (error) {
        throw error;
    }
}