import { useEffect } from 'react'
import { getUserInfo } from '../../../store/light/actionCreator'

const useIndex = (props) => {
  useEffect(() => {
    props.onDispatch(getUserInfo())
    //props.onDispatch(setAuth())
    // eslint-disable-next-line
  }, [])
}

export default useIndex
