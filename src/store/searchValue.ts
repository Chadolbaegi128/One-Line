import { atom } from 'recoil';

export const searchValue = atom<string | undefined>({
	key: 'search',
	default: '',
});
