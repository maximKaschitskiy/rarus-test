import { useMemo, useRef, useEffect } from "react"
import useScroll from "react-use/lib/useScroll"
import { useSelector, useDispatch } from "react-redux"
import { RootState } from "../redux/store"
import { setScrollBottom } from "../redux/slices/ui"

import LoaderWrapper from "../styles/Blocks/LoaderWrapper"
import MessagesWrapper from "../styles/Blocks/MessagesWrapper"
import Loader from "../styles/Blocks/Loader"

import Message from "./Message"

const Messages = () => {

  const dispatch = useDispatch()

  const history = useSelector((state: RootState) => state.history)
  const memoHistory = useMemo(() => history, [history])
  const ui = useSelector((state: RootState) => state.ui)
  const messagesWrapperRef = useRef<HTMLDivElement | null>(null)
  const { y: scrollY } = useScroll(messagesWrapperRef)

  useEffect(() => {
    const messagesWrapperElement = messagesWrapperRef.current

    const handleScroll = () => {
      if (!messagesWrapperElement) return

      const scrollHeight = messagesWrapperElement.scrollHeight
      const clientHeight = messagesWrapperElement.clientHeight

      const isAtBottom = scrollY + clientHeight >= scrollHeight - 10

      dispatch(setScrollBottom(isAtBottom));
    };

    handleScroll()
  }, [scrollY])


  useEffect(() => {
    if (ui.scrollBottom) {
      scrollToBottom()
    }
  }, [history])

  const scrollToBottom = () => {
    const messagesWrapperElement = messagesWrapperRef.current
    if (messagesWrapperElement) {
      messagesWrapperElement.scrollTop = messagesWrapperElement.scrollHeight
    }
  }

  return (
    <MessagesWrapper ref={messagesWrapperRef}>
      {memoHistory.map(item => <Message key={item.message_id} item={item}></Message>)}
      <LoaderWrapper>
        <Loader load={ui.typeing}></Loader>
      </LoaderWrapper>
    </MessagesWrapper>
  )
}

export default Messages
