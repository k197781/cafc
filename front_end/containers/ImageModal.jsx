import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import Style from './App.css'
import Modal from 'react-modal';

// import { add_number, reduce_number } from '../../../modules/ActionCreater.js'

const customStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.6)'
  },
  content: {
    position: 'absolute',
    top: '40px',
    left: '40px',
    right: '40px',
    bottom: 'auto',
    border: '1px solid #ccc',
    background: '#fff',
    overflow: 'auto',
    WebkitOverflowScrolling: 'touch',
    borderRadius: '4px',
    outline: 'none',
    maxWidth: '960px',
    margin: '0 auto'
    // padding: '20px'
  }
};

class ImageModal extends React.Component {
  state = {
    modalIsOpen: true,
    image: this.props.images.find(image => image.id === this.props.id)
  }

  componentWillMount() {
    if (!this.state.image) {
      axios.get(`https://wfc-2019.firebaseapp.com/image/${this.props.id}`)
      .then(res => {
        this.setState({
          image: res.data.data
        })
      }).catch(err => {
      })
    }
  }
 
  handleCloseModal = () => {
    this.setState({modalIsOpen: false});
    this.props.history.push('/images')
  }

  render () {
    return(
      <Modal
        isOpen={this.state.modalIsOpen}
        onRequestClose={this.handleCloseModal}
        style={customStyles}
      >
      {
        this.state.image &&
          <React.Fragment>
            <div className='imageModalString'>
              {this.state.image.title}
            </div>
            <img src={this.state.image.url} />
            <div className='imageModalDescription'>
              {this.state.image.description}
            </div>
          </React.Fragment>
      }
      </Modal>
    )
  }
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps)(ImageModal)
