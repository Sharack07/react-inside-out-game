
export default function PuaseGame({ onPause, isPaused }) {
  return (
    <div>
      <button className='pauseGameBtn'>
        <img src="/images/stats/pausa.png" onClick={onPause}/>
      </button>
    </div>
  )
}
