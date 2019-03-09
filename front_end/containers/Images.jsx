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
  state = {
    onMouse: false
  }

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
      <div className='imagesContainer'>
        <ul class='imagesList grid-container'>
        {
          this.props.images.map(image =>
            <li className='imageItem grid'>
              <Link to={`/images/${image.id}`}>
                <div className='imageItemHoverCover'>
                  <img src={image.url} />
                  <div className='imageItemHoverString'>
                    {image.title}
                  </div>
                </div>
              </Link>
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
