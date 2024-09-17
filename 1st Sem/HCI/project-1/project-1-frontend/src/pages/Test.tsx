import ColorShuffle from "../components/ColorShuffle";

const color = [
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

const Test = () => {
  return (
    <div className='h-full w-full'><ColorShuffle colorOptions={color} original= {false}/>
    </div>
  )
}

export default Test