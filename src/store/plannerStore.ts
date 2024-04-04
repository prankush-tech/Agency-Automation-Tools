import { create } from 'zustand'


export const useplannerTheme = create((set) => ({
  plannerTheme: 'dark',
  setLightTheme: () => set((state:string) => ({ plannerTheme: 'light' })),
  setDarkTheme: () => set((state:string) => ({ plannerTheme: 'dark' })),
}))