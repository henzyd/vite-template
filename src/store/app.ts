import { create } from "zustand";

type State = any;

type Action = any;

const useAppStore = create<State & Action>()(() => ({}));

export default useAppStore;
