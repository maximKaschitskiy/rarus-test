import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { setItem } from "./redux/slices/history"
import { setTypeing } from "./redux/slices/ui"
import uniqid from "uniqid"
import moment from "moment"
import { quotes } from "./mocks/quotes"
import { getRandomItem } from "./utils/utils"
import { ChatMessageType } from "./types"
import { fakeActions } from "./api/fakeAPI"

import Background from "./styles/Blocks/Background"
import AppWrapper from "./styles/Blocks/AppWrapper"
import Header from "./styles/Blocks/Header"
import Userpic from "./styles/Blocks/Userpic"
import Text from "./styles/Blocks/Text"
import UserpicWrapper from "./styles/Blocks/UserpicWrapper"
import { theme } from "./styles/theme"

import Messages from "./components/Messages"
import Input from "./components/Input"

import { users } from "./mocks/users"

import UserPicFile from './assets/jason-statham-at-the-fate-of-the-furious-premiere.jpg'

const App = () => {

  const dispatch = useDispatch()

  const fakeActionsLoop = async () => {
      await fakeActions()
      dispatch(setTypeing(true))
      await fakeActions()
      dispatch(setTypeing(false))
      const message: ChatMessageType = {
        message_id: uniqid(),
        user_id: 2,
        timestamp: moment().toString(),
        content: getRandomItem(quotes),
        is_account_owner: false,
        delivered: true,
        liked: false
      }
      dispatch(setItem(message))
      fakeActionsLoop()
  }

  useEffect(() => {
    fakeActionsLoop()
  }, [])

  return (
    <Background>
      <AppWrapper>
        <Header>
          <UserpicWrapper>
            <Userpic src={UserPicFile} />
          </UserpicWrapper>
          <Text style={{ fontSize: '22px', fontWeight: "400", color: theme.colors.textLight}}>{users.participants.participant.username}</Text>
        </Header>
        <Messages/>
        <Input />
      </AppWrapper>
    </Background>
  )
}

export default App
