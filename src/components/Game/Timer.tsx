import { FC, useCallback, useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { PAGES } from '../../constants/view'
import { setCurrentPage } from '../../store/view/actionCreators'


const Timer: FC<{}> = () => {

  const dispatch = useDispatch()
  const [ timer, setTimer ] = useState(10000)
  const timerIntervalRef = useRef<NodeJS.Timer>()
  
  useEffect(() => {
    timerIntervalRef.current = setInterval(handleTimer, 1000)
    return () => clearInterval(timerIntervalRef.current)
  }, [])

  useEffect(() => {
    if(timer) return
    clearInterval(timerIntervalRef.current);
    dispatch(setCurrentPage(PAGES.home)) 
  }, [timer])

  const handleTimer = useCallback(() => {
    setTimer(prev => prev - 1)
  }, [timer])

  return (
    <div className='timer-wrapper'>
        <div className='timer'>{timer}</div>
    </div>
  )
}

export default Timer
