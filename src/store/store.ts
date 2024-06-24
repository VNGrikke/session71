import { configureStore } from "@reduxjs/toolkit";
import darkModeReducer from "./reducers/darkModeReducer";
import countReducer from "./reducers/countReducer"; 
import randomNumbersReducer from "./reducers/randomNumberReducer";
import changeViewReducer from "./reducers/changeViewReducer";
import menuReducer from "./reducers/menuReducer";

const store = configureStore({
    reducer: {
        darkMode: darkModeReducer,
        count: countReducer,
        randomNumbers: randomNumbersReducer,
        viewMode: changeViewReducer,
        menu: menuReducer
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
