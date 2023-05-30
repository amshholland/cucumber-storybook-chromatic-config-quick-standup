import { GraphMode } from '../models/graph';
import { atom } from 'jotai';

export const graphDatesAtom = atom<Date[]>([
  new Date('01 Jan 1970 00:00:00 GMT'),
  new Date('01 Jan 1970 00:00:00 GMT')
]);

export const graphModeAtom = atom<GraphMode>(GraphMode.Daily);
