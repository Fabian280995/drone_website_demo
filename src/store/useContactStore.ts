import { create } from "zustand";

interface ContactState {
  subject: string;
  setSubject: (subject: string) => void;
}

export const useContactStore = create<ContactState>((set) => ({
  subject: "",
  setSubject: (subject: string) => set({ subject }),
}));
