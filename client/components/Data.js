import React from 'react'
import {connect} from 'react-redux'
import {getData} from '../store/data'

class Data extends React.Component {
  componentDidMount() {
    this.props.getData()
  }
  render() {
    console.log('inside render', this.props.data)
    return <h1>data is hooked up</h1>
  }
}

const mapStateToProps = state => ({
  data: state.dataReducer
})

const mapDispatchToProps = dispatch => ({
  getData: () => dispatch(getData())
})

export default connect(mapStateToProps, mapDispatchToProps)(Data)
