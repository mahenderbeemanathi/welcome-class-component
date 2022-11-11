// Write your code here
import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {status: 'subscribe'}

  getStatus = () => {
    this.setState(prevState => {
      if (prevState.status === 'subscribe') {
        return {status: 'subscribed'}
      }
      return {status: 'subscribe'}
    })
  }

  render() {
    const {status} = this.state
    return (
      <div className="bg">
        <h1 className="heading">Welcome</h1>
        <p>Thank you! Happy Learning</p>
        <button className="button" type="button" onClick={this.getStatus}>
          {status}
        </button>
      </div>
    )
  }
}

export default Welcome
