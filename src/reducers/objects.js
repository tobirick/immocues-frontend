import { createReducer } from '../utils/reducerUtil';
import { CREATE_OBJECT, DELETE_OBJECT, UPDATE_OBJECT } from '../constants/objects';

const objectsReducerDefaultState = [
      {
            id: '1',
            title: 'Testobject',
            city: 'Aichach'
      }
];

export const createObject = (state, payload) => {
      return [...state, Object.assign({}, payload.object)]
}

export const updateObject = (state, payload) => {
      return [
          ...state.filter(object => object.id !== payload.object.id),
          Object.assign({}, payload.object)
      ]
}

export const deleteObject = (state, payload) => {
      return [...state.filter(object => object.id !== payload.objectId)]
}

export default createReducer(objectsReducerDefaultState, {
      [CREATE_OBJECT]: createObject,
      [UPDATE_OBJECT]: updateObject,
      [DELETE_OBJECT]: deleteObject
})