export declare global {
    namespace ReactNavigation {
        interface RootParamList {
            home: undefined;
            stats: undefined;
            register: undefined;
            meal: {
                id: string;
                name: string;
                description: string;
                date: string;
                time: string;
                isOnTheDiet: string;
            };
            feedback: {
                isOnTheDiet: string;
            };
            edit: {
                id: string;
                name: string;
                description: string;
                date: string;
                time: string;
                isOnTheDiet: string;
            };
        }
    }
}