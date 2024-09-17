import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()
  return (
    <div className='h-full w-full flex items-center justify-center gap-5'>
      <button className='bg-red-400' onClick={()=>navigate('/original')}>Original </button>
      <button className='bg-slate-400' onClick={()=>navigate('/test')}>Test</button>
    </div>
  )
}

export default Home