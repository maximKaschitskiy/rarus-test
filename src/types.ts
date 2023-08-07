export type CSSType = { style?: { [key: string]: string | string[] } }

export type ThemeType = {
  colors: { [key: string]: string | string[] },
  fonts: {
    title?: { [key: string]: string | string[] },
    subtitle?: { [key: string]: string | string[] },
    medium?: { [key: string]: string | string[] },
    small?: { [key: string]: string | string[] },
  }
}

export type ChatMessageType = {
  message_id: string;
  user_id: number;
  timestamp: string;
  content: string;
  is_account_owner: boolean;
  delivered?: boolean;
  liked: boolean;
}

export type UserType = {
  user_id: number;
  username: string;
  is_account_owner: boolean;
}

export type UsersType = {
  account_owner_id: number;
  participants: {
    owner: UserType;
    participant: UserType;
  }
}

export type FakeApiType = (item: ChatMessageType, delay?: number) => Promise<ChatMessageType>

export type UIType = {
  input: string;
  typeing: boolean;
  scrollBottom: boolean;
}

export type GetRandomType = (min: number, max: number) => number

export type EditValueType = <Key extends keyof ChatMessageType>(
  collection: ChatMessageType[],
  id: string,
  keyToUpdate: Key,
  newValue: ChatMessageType[Key]
) => ChatMessageType[]

export type GetIndexType = (
  collection: ChatMessageType[],
  id: string
) => number

export type RandomItemType = (array: string[]) => string

export type DelItemType = (array: ChatMessageType[], index: number) => ChatMessageType[]