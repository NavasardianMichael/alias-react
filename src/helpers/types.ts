import { RootState } from ".."

export type G_ObjectValues<T> = T[keyof T]

export type G_Selector<T> = (state: RootState) => T