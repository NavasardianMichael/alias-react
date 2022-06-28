import { FC, useCallback, useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { PAGES } from '../../constants/view'
import { setCurrentPage } from '../../store/view/actionCreators'

const Game: FC<{}> = () => {

  const dispatch = useDispatch()
  const [ timer, setTimer ] = useState(60)
  const timerIntervalRef = useRef<NodeJS.Timer>()
  
  const handleTimer = useCallback(() => {
    setTimer(prev => prev - 1)
  }, [timer])

  useEffect(() => {
    timerIntervalRef.current = setInterval(handleTimer, 1000)
    return () => clearInterval(timerIntervalRef.current)
  }, [])

  useEffect(() => {
    if(timer) return
    clearInterval(timerIntervalRef.current)
    dispatch(setCurrentPage(PAGES.home)) 
  }, [timer])

  return (
    <p>{timer}</p>
  )
}

export default Game
