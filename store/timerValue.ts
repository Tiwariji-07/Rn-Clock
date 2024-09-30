import { create } from "zustand";

interface TimerState {
  hour: string;
  minute: string;
  second: string;
  setHour: (hour: string) => void;
  setMinute: (minute: string) => void;
  setSecond: (second: string) => void;
  handleBackSpace: (active: string) => void;
}
const useTimerState = create<TimerState>((set) => ({
  hour: "00",
  minute: "00",
  second: "00",
  setHour: (hour) =>
    set((prevHour) => {
      const newHour = parseInt(prevHour.hour) * 10 + parseInt(hour);
      let ans =
        newHour < 10
          ? `0${newHour}`
          : newHour < 100
          ? `${newHour}`
          : `${prevHour.hour}`;
      return { hour: ans };
    }),
  setMinute: (minute) =>
    set((prevHour) => {
      const newHour = parseInt(prevHour.minute) * 10 + parseInt(minute);
      let ans =
        newHour < 10
          ? `0${newHour}`
          : newHour < 100
          ? `${newHour}`
          : `${prevHour.minute}`;
      return { minute: ans };
    }),
  setSecond: (second) =>
    set((prevHour) => {
      const newHour = parseInt(prevHour.second) * 10 + parseInt(second);
      let ans =
        newHour < 10
          ? `0${newHour}`
          : newHour < 100
          ? `${newHour}`
          : `${prevHour.second}`;
      return { second: ans };
    }),
  handleBackSpace: (active) => {
    if (active === "hour") {
      set((prevHour) => {
        const newHour = parseInt("0" + prevHour.hour.slice(0, 1));
        let ans =
          newHour < 10
            ? `0${newHour}`
            : newHour < 100
            ? `${newHour}`
            : `${prevHour.hour}`;
        return { hour: ans };
      });
      //   setminute("00");
      //   setsecond("00");
    } else if (active === "minute") {
      set((prevHour) => {
        const newHour = parseInt("0" + prevHour.minute.slice(0, 1));
        let ans =
          newHour < 10
            ? `0${newHour}`
            : newHour < 100
            ? `${newHour}`
            : `${prevHour.minute}`;
        return { minute: ans };
      });
    } else {
      set((prevHour) => {
        const newHour = parseInt("0" + prevHour.second.slice(0, 1));
        let ans =
          newHour < 10
            ? `0${newHour}`
            : newHour < 100
            ? `${newHour}`
            : `${prevHour.second}`;
        return { second: ans };
      });
    }
  },
}));

export default useTimerState;
