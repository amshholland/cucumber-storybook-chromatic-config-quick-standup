import { atom } from 'jotai';
import { ModalTypes } from '../constants/modalTypes';

export const modalTypeAtom = atom<ModalTypes>(ModalTypes.None);
