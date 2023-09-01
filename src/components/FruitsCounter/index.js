// Write your code here
import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {MangoCount: 0, bananaCount: 0}

  onEatMango = () => {
    this.setState(prevState => {
      console.log(`Previous State value ${prevState.MangoCount}`)
      return {MangoCount: prevState.MangoCount + 1}
    })
  }

  onEatBanana = () => {
    this.setState(prevState => {
      console.log(`Previous State value ${prevState.bananaCount}`)
      return {bananaCount: prevState.bananaCount + 1}
    })
  }

  render() {
    const {MangoCount, bananaCount} = this.state
    return (
      <div className="container">
        <div className="card-container">
          <h1 className="headingCount">
            Bob ate <span className="number">{MangoCount}</span> mangoes
            <span className="number"> {bananaCount}</span> bananas
          </h1>
          <div className="fruits-container">
            <div className="img-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png "
                className="image"
                alt="mango"
              />
              <div className="btn-container">
                <button
                  type="button"
                  className="button"
                  onClick={this.onEatMango}
                >
                  Eat Mango
                </button>
              </div>
            </div>
            <div className="img-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                className="image"
                alt="banana"
              />

              <div className="btn-container">
                <button
                  type="button"
                  className="button"
                  onClick={this.onEatBanana}
                >
                  Eat Banana
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default FruitsCounter
