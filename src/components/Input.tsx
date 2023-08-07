import uniqid from "uniqid"
import moment from "moment"

import { useSelector, useDispatch } from "react-redux"
import { RootState } from "../redux/store"
import { setInput } from "../redux/slices/ui"
import { setItem, setDelivered } from "../redux/slices/history"

import InputWrapper from "../styles/Blocks/InputWrapper"
import InputField from "../styles/Blocks/InputField"
import SendButton from "../styles/Blocks/SendButton"
import ButtonIcon from "../styles/Blocks/ButtonIcon"

import { fakeApi } from "../api/fakeAPI"
import { ChatMessageType } from "../types"
import IconFile from "../assets/send_message_chat_icon_177294.svg"

const Input = () => {

  const dispatch = useDispatch()

  const ui = useSelector((state: RootState) => state.ui)

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    dispatch(setInput(event.target.value))
  }

  const handleClick = () => {
    if (ui.input !== '' && !/^\s*$/.test(ui.input)) {
      dispatch(setInput(''))
      const message: ChatMessageType = {
        message_id: uniqid(),
        user_id: 1,
        timestamp: moment().toString(),
        content: ui.input,
        is_account_owner: true,
        delivered: false,
        liked: false
      }
      dispatch(setItem(message));
      fakeApi(message)
        .then(res => {
          if (res) {
            dispatch(setDelivered(res.message_id))
          }
      })
    }
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && ui.input !== '') {
      handleClick();
    }
  }

  return (
    <InputWrapper>
      <InputField type="text" onChange={handleChange} value={ui.input} onKeyDown={handleKeyDown}></InputField>
      <SendButton onClick={handleClick}>
        <ButtonIcon src={IconFile} />
      </SendButton>
    </InputWrapper>
  )
}

export default Input
