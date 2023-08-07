import { UsersType } from "../types"

export const users: UsersType = {
        "account_owner_id": 1,  
        "participants": {
          "owner": {
            "user_id": 1,
            "username": "Maxim",
            "is_account_owner": true
          },
          "participant": {
            "user_id": 2,
            "username": "{JSON} Statham",
            "is_account_owner": false,
          }
        }
}