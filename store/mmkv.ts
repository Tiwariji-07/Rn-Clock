import { MMKV } from "react-native-mmkv";
import { StateStorage } from "zustand/middleware";
import { CityStoreType } from "./interface";

export const storage = new MMKV({
  id: "timeZone-storage",
});

export const zustandStorage: StateStorage = {
  getItem: (name: string) => {
    const val = storage.getString(name);
    return val ?? null;
  },
  setItem: (name: string, value) => {
    storage.set(name, value);
  },
  removeItem: (key) => {
    storage.delete(key);
  },
};
