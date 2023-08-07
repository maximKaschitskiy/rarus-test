import { GetRandomType, EditValueType, GetIndexType, RandomItemType, DelItemType } from "../types"

export const getRandomNumber: GetRandomType = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

export const getRandomItem: RandomItemType = (array) => {
  const randomIndex = Math.floor(Math.random() * array.length)
  return array[randomIndex]
}

export const editValueById: EditValueType = (collection, id, keyToUpdate, newValue) => {
    const indexToUpdate = collection.findIndex((item) => item.message_id === id)
  
    if (indexToUpdate === -1) {
      return collection
    }
  
    const updatedCollection = [...collection]
    updatedCollection[indexToUpdate][keyToUpdate] = newValue
  
    return updatedCollection
  };

  export const getIndexById: GetIndexType = (collection, id) => {
    const indexToUpdate = collection.findIndex((item) => item.message_id === id)
  
    return indexToUpdate
  };

  export const deleteItemByIndex: DelItemType = (arr, index) => {
    if (index < 0 || index >= arr.length) {
      return arr;
    }
      arr.splice(index, 1);
    return arr;
  }