import store from "../store";
import { useDispatch } from 'react-redux'
//typescript hook for dispatch
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = useDispatch.withTypes<AppDispatch>() 
