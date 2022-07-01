import { FC, useCallback, useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { PAGES } from '../../constants/app'
import { selectDuration } from '../../store/settings/selectors'
import { setCurrentPage } from '../../store/app/actionCreators'


const Timer: FC<{}> = () => {

  const dispatch = useDispatch()
  const duration = useSelector(selectDuration)
  const [ timer, setTimer ] = useState(duration)
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
