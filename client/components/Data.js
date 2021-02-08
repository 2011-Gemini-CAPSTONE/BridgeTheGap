import React from 'react'
import {connect} from 'react-redux'
import {getData} from '../store/data'
import StateMap from './charts/StateMap'

class Data extends React.Component {
  componentDidMount() {
    this.props.getData()
  }
  render() {
    console.log('inside render', this.props.data)
    return <StateMap data={this.props.data} />
  }
}

const mapStateToProps = state => ({
  data: state.dataReducer
})

const mapDispatchToProps = dispatch => ({
  getData: () => dispatch(getData())
})

export default connect(mapStateToProps, mapDispatchToProps)(Data)
