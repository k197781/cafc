import React, { Component } from 'react'
import ReactDom from 'react-dom'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Style from './App.css'

// import { add_number, reduce_number } from '../../../modules/ActionCreater.js'

function update_images(images) {
  return {
    type: 'UPDATE_IMAGES',
    images,
  };
}

class Images extends React.Component {

  componentWillMount() {
    axios.get('https://wfc-2019.firebaseapp.com/images?limit=&offset=')
      .then(res => {
        this.props.updateImages(res.data.data.images)
      }).catch(err => {
      })
  }

  toggleCalcStatus = () => {
    const calcStatus = this.state.isCalcStatusPlus
    this.setState({
      isCalcStatusPlus: !calcStatus
    })
  }

  render () {
    return(
      <div>
        <ul>
        {
          this.props.images.map(image =>
            <li>
              <img src={image.url} />
            </li>
          )
        }
        </ul>
    </div>
    )
  }
}

function mapStateToProps(state) {
  return state
}

function mapDispatchToProps(dispatch, state) {
  return {
    updateImages: (images) => {
      dispatch(update_images(images))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Images)
