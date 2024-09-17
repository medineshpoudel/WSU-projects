import ColorShuffle from "../components/ColorShuffle"

const color = [
  {
      colorName: 'green',
      mainColor: '#00cc00',
      options:  ['#00cc00', '#ff0000', '#511515', '#ffff00', '#ccccff','#4d004d'],
  },
  {
      colorName: 'red',
      mainColor: '#ff0000',
      options:  ['#00cc00', '#ff0000', '#511515', '#ffff00', '#ccccff','#4d004d'],
  },
  {
      colorName: 'brown',
      mainColor: '#511515',
      options:  ['#00cc00', '#ff0000', '#511515', '#ffff00', '#ccccff','#4d004d'],
  },
  {
      colorName: 'yellow',
      mainColor: '#ffff00',
      options:  ['#00cc00', '#ff0000', '#511515', '#ffff00', '#ccccff','#4d004d'],
  },
  {
      colorName: 'blue',
      mainColor: '#ccccff',
      options:  ['#00cc00', '#ff0000', '#511515', '#ffff00', '#ccccff','#4d004d'],
  },
  {
      colorName: 'purple',
      mainColor: '#4d004d',
      options:  ['#00cc00', '#ff0000', '#511515', '#ffff00', '#ccccff','#4d004d'],
  },
]


const Original = () => {
  return (
    <div className='h-full w-full'><ColorShuffle colorOptions={color} original= {true}/>
    </div>
  )
}

export default Original