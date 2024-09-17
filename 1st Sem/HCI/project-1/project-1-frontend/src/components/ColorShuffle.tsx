/* eslint-disable @typescript-eslint/no-explicit-any */
import  { useState } from 'react'
import ColorPicker from './ColorPicker'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


export interface ColorShuffleProps{
    colorOptions: Array<any>;
    original: boolean
}

const ColorShuffle = ({colorOptions = [], original = true }: ColorShuffleProps) => {
    const navigate = useNavigate()
    const [index, setIndex] = useState<number>(0)

    const onPrev = ()=>{
        if(index > 0){
              setIndex((prevValue)=> prevValue-1)  
        }
    }
    const onNext = ()=>{
        if(index < colorOptions.length-1){
            setIndex((prevValue)=> prevValue+ 1)
        }
    }

   

  
  return (
    <div className='w-full h-full bg-slate-100 flex flex-col items-center p-3'>
        <h1>Please select the colors from <span>{original ? 'original' : 'test'} </span>  palletes</h1>
        <ColorPicker colorName={colorOptions[index].colorName} mainColor={colorOptions[index].mainColor} options={colorOptions[index].options}  palleteType = {original ? 'original' : 'test'}/>
        <div className='flex gap-2' >
        <button className='bg-gray-400 ' onClick={onPrev}> Previous</button>
        <button className='bg-blue-500 text-white' onClick={onNext}> Next</button>
        <button className='bg-red-400' onClick={()=> navigate('/')}> Home</button>
        </div>  
    </div>
  )
}

export default ColorShuffle