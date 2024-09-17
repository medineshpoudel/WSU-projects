/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from 'axios';
import  { useCallback, useEffect, useState } from 'react'

export interface ColorPickerProps{
  colorName: string
  mainColor: string;
  options: string[];
  palleteType: 'original' | 'test';
}


const ColorPicker = ({ palleteType = 'original', colorName ='', mainColor= '' , options = []}: ColorPickerProps) => {
  const [matchingColor, setMatchingColor] = useState<string | null>()
  const [mouseMoveTime, setMouseMoveTime] = useState<number | null>(0);
  const [result, setResult] = useState<string | null>();
  const [shuffledArray, setshuffledArray] = useState<any>([])

  const shuffleArray = (array: Array<any>) => {
    let currentIndex = array.length, randomIndex;
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    setshuffledArray(array)
   return array;
  };

  useEffect(()=>{
    shuffleArray(options)
    setMatchingColor(null)
    setResult(null)
  }, [colorName])

useEffect(()=>{
  const updateColor = async (actualColorName: string, colorSelected: any)=>{
    const result = await axios.post(`http://localhost:8000/${palleteType}`, {
      actualColorName,
      colorSelected,
    })
    console.log(result)
    return result
  }
if(result){
  updateColor(colorName , {color : matchingColor , timeTaken : result })
}
},[result])

  const handleMouseMove = useCallback(() => {
    if (mouseMoveTime === null) {
      setMouseMoveTime(performance.now());
    }
  }, [mouseMoveTime]);

  // Handle button click
  const handleClick = () => {
    if (mouseMoveTime !== null) {
      const buttonClickTime = performance.now();
      const timeElapsedMs = buttonClickTime - mouseMoveTime;
      const timeElapsedSec = (timeElapsedMs / 1000).toFixed(2); 
      setResult(` ${timeElapsedSec}`);
      setMouseMoveTime(null); 
    } else {
      setResult('Mouse was not moved before clicking the button.');
    }
  };

  
  const onColorSelect = (color: string)=>{
    setMatchingColor(color)
    handleClick()
  }

 

  return (
    <div className='h-full w-full  flex flex-col justify-between items-center'>
        {matchingColor && result ? (
      <div className='font-bold'>

 <p> Color picked : <span style={{color: `${matchingColor}`}}>{matchingColor}</span></p>
 <p>Time taken: {result}</p>
 </div>

        ): (
          <div>
            <p className='text-lg  font-bold'> Please select a color matching to the center one</p>
          </div>
        )}
       
      <div  onMouseMove={handleMouseMove} className="flex flex-1 justify-center items-center w-96 h-40">
      <div className="absolute w-20 h-20  rounded-lg z-10" style={{backgroundColor: mainColor}}></div>
      {shuffledArray.map((color:string, index: number) => (
        <div
          key={index}
          className="absolute w-28 h-28 rounded-full cursor-pointer hover:w-24 hover:h-24"
          style={{
            backgroundColor: color,
            transform: `rotate(${index * 72}deg) translateX(150px) rotate(-${index * 72}deg)`,
          }}
          onClick={()=>onColorSelect(color)}
        />
      ))}
    </div>
    </div>
)
}

export default ColorPicker