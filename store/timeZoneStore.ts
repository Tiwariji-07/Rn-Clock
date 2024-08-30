import { create } from "zustand";
import { CityStoreType } from "./interface";
import { createJSONStorage, persist } from "zustand/middleware";
import { zustandStorage } from "./mmkv";

interface TimeZoneState {
  cities: Array<CityStoreType>;
  addCity: (cityStore: CityStoreType) => void;
  removeCity: (cityStore: CityStoreType) => void;
  clearCity: () => void;
}

const useTimeZoneStore = create<TimeZoneState>()(
  persist(
    (set) => ({
      cities: [],
      addCity: (cityStore: CityStoreType) =>
        set((state) => {
          const hasCity = state.cities.find((c) => c.name === cityStore.name);
          if (hasCity) {
            return { cities: state.cities };
          } else {
            return { cities: [...state.cities, cityStore] };
          }
        }),
      removeCity: (cityStore) =>
        set((state) => ({
          cities: state.cities.filter((c) => c !== cityStore),
        })),
      clearCity: () => set({ cities: [] }),
    }),
    {
      name: "timeZone-storage",
      storage: createJSONStorage(() => zustandStorage),
    }
  )
);

export default useTimeZoneStore;
