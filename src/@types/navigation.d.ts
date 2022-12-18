export declare global {
    namespace ReactNavigation {
        interface RootParamList {
            home: undefined;
            stats: undefined;
            register: undefined;
            meal: undefined;
            feedback: undefined;
            edit: {
                meal: string;
            };
            delete: {
                meal: string;
            };
        }
    }
}