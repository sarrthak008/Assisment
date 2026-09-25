import { create } from "zustand";

const useOpeartion = create((set) => ({
    search: "",
    setSearch: (inp) => {
        set({
            search: inp
        })
    }
}))


export {
    useOpeartion
}