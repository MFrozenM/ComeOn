import create from 'zustand'

export const useCachedData = create((set) => ({
    categories: [],
    games: [],
    filtered: [],
    searchedName: "",
    activeCategory: 0,

    setCategories: (data) => set(() => ({categories: data})),
    setGames: (data) => set(() => ({games: data, filtered: data})),

    setActiveCategory: (id) => set(() => ({activeCategory: id})),
    setSearchedName: (value) => set(() => ({searchedName: value})),

    filterGamesById: (id) => set((state) => ({filtered: state.searchedName === "" ? filterById(id, state.games) : filterByNameAndId(id, state.searchedName, state.games)})),
    filterGamesByName: (name) => set((state) => ({filtered: state.activeCategory === 0 ? filterByName(name, state.games) : filterByNameAndId(state.activeCategory, state.searchedName, state.games)}))
}))

const filterById = (id, data) => {
    return data.filter((game) => game.categoryIds.indexOf(id) > -1)
}

const filterByName = (name, data) => {
    return data.filter((game) => game.name.toLowerCase().includes(name.toLowerCase()))
}

const filterByNameAndId = (id, name, data) => {
    return filterByName(name, filterById(id, data))
}
