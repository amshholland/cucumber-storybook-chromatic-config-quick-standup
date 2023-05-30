import { atom } from 'jotai';
import { ApiQueryStatus, FileProgress, FileUploadStatus } from '../models/fileProgress';

export const fileProgressAtom = atom<FileProgress>({
  progress: 100,
  status: FileUploadStatus.done,
  filename: ''
});

export const apiQueryStatusAtom = atom<ApiQueryStatus>({ status: 'idle' });
