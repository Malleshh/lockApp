import {useState} from 'react'
import './index.css'

const Unlock = () => {
  const [change, setChange] = useState(false)

  const onClickButton = () => {
    setChange(prevState => !prevState)
  }
  return (
    <div className="container">
      {change ? (
        <div className="image-container">
          <img
            className="image"
            src="https://assets.ccbp.in/frontend/hooks/unlock-img.png"
            alt="unlock"
          />

          <p>Your Device is UnLocked</p>
        </div>
      ) : (
        <div className="image-container">
          <img
            className="image"
            src="https://assets.ccbp.in/frontend/hooks/lock-img.png"
            alt=" lock"
          />

          <p className="p">Your Device is Locked</p>
        </div>
      )}

      <button onClick={onClickButton} className="button" type="button">
        {change ? 'Lock' : 'Unlock'}
      </button>
    </div>
  )
}
export default Unlock
