import { create } from 'zustand';

type State = {
  filterCompany: 'OPTIMAP' | 'RAYA' | 'ALL';
  resetFilterCompany: () => void;
  changeFilterCompany: (filterCompany: 'OPTIMAP' | 'RAYA' | 'ALL') => void;
};

const useFilterProjects = create<State>((set) => ({
  filterCompany: 'ALL',
  resetFilterCompany: () => set({ filterCompany: 'ALL' }),
  changeFilterCompany: (filterCompany: 'OPTIMAP' | 'RAYA' | 'ALL') =>
    set({ filterCompany }),
}));

export default useFilterProjects;
