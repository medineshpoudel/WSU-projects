import  { useState } from 'react'
import ColorPicker from './ColorPicker'

const colorOptions = [
    {
        colorName: 'green',
        mainColor: '#00cc00',
        options:  ['#b3ffb3', '#009900', '#003300', '#e6ffe6', '#000000'],
    },
    {
        colorName: 'red',
        mainColor: '#ff0000',
        options:  ['#1a66ff', '#ff9980', '#4d0f00', '#e62e00', '#ff704d'],
    },
    {
        colorName: 'brown',
        mainColor: '#511515',
        options:  ['#ffb380', '#ff751a', '#993d00', '#662900', '#1a0a00'],
    },
    {
        colorName: 'yellow',
        mainColor: '#ffff00',
        options:  ['#ffff33', '#999900', '#333300', '#ffffcc', '#999900'],
    },
    {
        colorName: 'blue',
        mainColor: '#ccccff',
        options:  ['#8080ff', '#80aaff', '#e6eeff', '#ff4d4d', '#ddff99'],
    },
    {
        colorName: 'purple',
        mainColor: '#4d004d',
        options:  ['#ff4dff', '#b300b3', '#4d004d', '#e600e6', '#ff1aff'],
    },
]

const ColorShuffle = () => {
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
        <ColorPicker colorName={colorOptions[index].colorName} mainColor={colorOptions[index].mainColor} options={colorOptions[index].options} />
        <div className='flex gap-2'>
        <button className='bg-gray-400 ' onClick={onPrev}> Previous</button>
        <button className='bg-blue-500 text-white' onClick={onNext}> Next</button>
        </div>

        
    </div>
  )
}

export default ColorShuffle