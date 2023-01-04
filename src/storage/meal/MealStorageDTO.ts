export type MealStorageDTO = {
    title: string;
    data: [{
        name: string,
        description: string,
        date: string,
        time: string,
        isOnTheDiet: string
    }]
}