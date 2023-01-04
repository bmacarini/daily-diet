export declare global {
    namespace ReactNavigation {
        interface RootParamList {
            home: undefined;
            stats: undefined;
            register: undefined;
            meal: {
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
                name: string;
                description: string;
                date: string;
                time: string;
                isOnTheDiet: string;
            };
            delete: {
                name: string;
                description: string;
                date: string;
                time: string;
                isOnTheDiet: string;
            };
        }
    }
}