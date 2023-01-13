export type MealStorageDTO = {
    title: string;
    data: {
        id: string,
        name: string,
        description: string,
        date: string,
        time: string,
        isOnTheDiet: string
    }[]
}