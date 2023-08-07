import { FakeApiType } from "../types"
import { getRandomNumber } from "../utils/utils"

  export const fakeApi: FakeApiType = (item, delay = getRandomNumber(300, 3000)) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(item)
      }, delay)
    });
  }

  export const fakeActions = async (delay = getRandomNumber(2500, 5000)) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(true)
      }, delay)
    })
  }
