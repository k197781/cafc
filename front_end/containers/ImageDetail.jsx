import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import Style from './App.css'

// import { add_number, reduce_number } from '../../../modules/ActionCreater.js'

class ImageDetail extends React.Component {
  state = {
    image: this.props.images.find(image => image.id === this.props.match.params.id)
  }

  componentWillMount() {
    if (!this.state.image) {
      axios.get(`https://wfc-2019.firebaseapp.com/image/${this.props.match.params.id}`)
      .then(res => {
        this.setState({
          image: res.data.data
        })
      }).catch(err => {
      })
    }
  }

  render () {
    return(
      <div>
        {
          this.state.image &&
            <img src={this.state.image.url} />
        }
    </div>
    )
  }
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps)(ImageDetail)
