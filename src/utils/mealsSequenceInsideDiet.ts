import { mealRegisterGetAll } from '@storage/meal/mealRegisterGetAll';

export async function mealsSequenceInsideDiet() {

    try {

        const storedMeals = await mealRegisterGetAll();

        const mealsDiet = storedMeals.map(register => register.data.map(meal => meal.isOnTheDiet));
        const mealsInOrOutOfDiet = mealsDiet.reduce((acc, meal) => acc.concat(meal));


        const convertToString = mealsInOrOutOfDiet.join(',');
        const excludeFailure = convertToString.split('FAILURE');
        const sort = excludeFailure.sort((seq1, seq2) => seq2.length - seq1.length);
        const searchTheLonger = sort.splice(0, 1);
        const separateResult = searchTheLonger.pop();
        const returnToArray = separateResult ? separateResult.split(',') : [];
        const filteredResults = returnToArray.filter(item => item !== '');

        return filteredResults.length;


    } catch (error) {
        throw error;
    }
}