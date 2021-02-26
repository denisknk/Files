export interface IFileData {
  id: number;
  title: string;
  size: number;
  createdAt: number;
}

export interface IFilesState {
  data: {
    byId : {} | IFileData,
    allIds : Array<String>,
  };
  loading: boolean;
  error: null | object,
}

export const LOAD_FILE_PENDING = 'LOAD_FILE_PENDING';
export const LOAD_FILE_FULFILLED = 'LOAD_FILE_FULFILLED';
export const LOAD_FILE_REJECTED = 'LOAD_FILE_REJECTED';

interface LoadFilesAction {
  type: typeof LOAD_FILE_PENDING;
}

interface LoadFilesActionFulfilled {
  type: typeof LOAD_FILE_FULFILLED;
  payload: IFileData[];
}

interface LoadFilesActionRejected {
  type: typeof LOAD_FILE_REJECTED;
  payload: object;
}

export type LoadFilesActionTypes = LoadFilesAction | LoadFilesActionFulfilled | LoadFilesActionRejected;
