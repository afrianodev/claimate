import MainInfo from '../components/MainInfo'
import AIBriefing from '../components/AIBriefing'
import Forecast from '../components/Forecast'

function Main() {
  return (
    <div className='w-[90%] h-[85%] rounded-lg shadow-md flex overflow-hidden'>
        <div className='flex-1 flex flex-col gap-4 p-4 bg-neutral-100/50 backdrop-blur-sm'>
            <div className='flex-1 rounded-lg shadow-md bg-[url(https://static.scientificamerican.com/sciam/cache/file/6B2730C8-B0D0-485F-A0618F3954CF58D8_source.jpg?w=1200)] bg-cover'>
            <MainInfo />
            </div>
            <div className='bg-neutral-200 h-1/4 rounded-lg'>
                <Forecast />
            </div>
        </div>
        {/* second column */}
        <div className='w-1/3 bg-neutral-200/50 p-4 flex flex-col backdrop-blur-lg'>
            <AIBriefing />
        </div>
    </div>
  )
}

export default Main