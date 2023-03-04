import {FaArrowRight, FaArrowLeft} from 'react-icons/fa'
import DataContext from '../../context/data.context';
import { useContext } from 'react';
export default function Button() {
  const {onRightClick, onLeftClick} = useContext(DataContext);
  
  return (
    <div className='flex w-full justify-between'>
        <button onClick={onLeftClick}><FaArrowLeft/></button>
        <button onClick={onRightClick}><FaArrowRight/></button>
    </div>
  )
}
