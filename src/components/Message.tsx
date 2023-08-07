import moment from "moment"
import { useDispatch } from "react-redux"
import { delItem, setLike } from "../redux/slices/history"
import { ChatMessageType } from "../types"

import MessageWrapper from "../styles/Blocks/MessageWrapper"
import Text from "../styles/Blocks/Text"
import Date from "../styles/Blocks/Date"
import ButtonsWrapper from "../styles/Blocks/ButtonsWrapper"
import MessageButton from "../styles/Blocks/MessageButton"
import MessageButtonIcon from "../styles/Blocks/MessageButtonIcon"
import { theme } from "../styles/theme"

import TrashFile from "../assets/trash-bin-2-svgrepo-com.svg"
import HeartFilledFile from "../assets/heart-angle-svgrepo.svg"
import HeartFilled from "../assets/heart-angle-svgrepo-com.svg"

const Message = ({ item }: { item: ChatMessageType }) => {

  const dispatch = useDispatch()

  const handleDel = () => {
    dispatch(delItem(item.message_id))
  }

  const handleLike = () => {
    dispatch(setLike(item.message_id))
  }

  return (
    <MessageWrapper isOwner={item.is_account_owner} delivered={item.delivered}>
      <Text style={{ margin: '5px', color: theme.colors.textLight }}>{item.content}</Text>
      <ButtonsWrapper isOwner={item.is_account_owner}>
        <Date style={{ margin: '5px' }} isOwner={item.is_account_owner}>{moment(item.timestamp).format("HH:mm")}</Date>
        {
          item.is_account_owner ?
            <MessageButton onClick={handleDel}>
              <MessageButtonIcon src={TrashFile} />
            </MessageButton> :
            <MessageButton onClick={handleLike}>
              <MessageButtonIcon src={item.liked ? HeartFilledFile : HeartFilled} />
            </MessageButton>
        }
      </ButtonsWrapper>
    </MessageWrapper>
  )
}

export default Message
