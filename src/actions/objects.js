import { CREATE_OBJECT, DELETE_OBJECT, UPDATE_OBJECT } from '../constants/objects';

export const createObject = (object) => {
    return {
        type: CREATE_OBJECT,
        payload: {
            object
        }
    }
}

export const updateObject = (object) => {
    return {
        type: UPDATE_OBJECT,
        payload: {
            object
        }
    }
}

export const deleteObject = (objectId) => {
    return {
        type: DELETE_OBJECT,
        payload: {
            objectId
        }
    }
}