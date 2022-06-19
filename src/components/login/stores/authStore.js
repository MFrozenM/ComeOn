import create from 'zustand'

export const useAuth = create((set) => ({
    isAuth: false,
    userData: null,

    setAuth: (auth) => set(() => ({isAuth: auth})),
    setUserData: (data) => set(() => ({userData: data})),
}))
