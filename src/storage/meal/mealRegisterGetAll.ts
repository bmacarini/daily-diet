import Asyncstorage from '@react-native-async-storage/async-storage';

import { MEALS_COLLECTION } from '@storage/storageConfig';

import { MealStorageDTO } from './MealStorageDTO';

export async function mealRegisterGetAll() {
    try {
        const storage = await Asyncstorage.getItem(MEALS_COLLECTION);

        const meals: MealStorageDTO[] = storage ? JSON.parse(storage) : [];

        return meals;

    } catch (error) {
        throw error;
    }
}