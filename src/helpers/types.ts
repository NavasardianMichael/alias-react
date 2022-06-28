import { RootState } from ".."

export type G_ObjectValues<T> = T[keyof T]

export type G_Selector<T> = (state: RootState) => T

export type G_PartialWithRequired<Type, Key extends keyof Type> = Pick<Type, Key> & Partial<Type>