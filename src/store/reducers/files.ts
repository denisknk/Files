import {
  LOAD_FILE_PENDING,
  LOAD_FILE_FULFILLED,
  LOAD_FILE_REJECTED,
  IFilesState, LoadFilesActionTypes,
} from "../actionTypes/files";

export const initialState: IFilesState = {
  data: {
    byId : {},
    allIds : [],
  },
  loading: false,
  error: null,
};

export const filesReducer = (state = initialState, action: LoadFilesActionTypes): IFilesState => {
  switch(action.type) {
    case LOAD_FILE_PENDING:
      return {
        ...state,
        loading: true,
        error: null,
        data: {
          byId : {},
          allIds : [],
        },
      };
    case LOAD_FILE_FULFILLED:
      const filesById = action.payload.reduce((acc, curr) => {
        acc[curr.id] = curr;

        return acc;
      }, {});

      const allFiles = Object.keys(filesById);

      return {
        ...state,
        data: {
          byId: filesById,
          allIds: allFiles,
        },
        loading: false,
      };
    case LOAD_FILE_REJECTED:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}
