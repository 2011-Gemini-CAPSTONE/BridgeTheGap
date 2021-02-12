import React from 'react'
import {connect} from 'react-redux'
import {getData} from '../store/data'
import NewMap from './charts/NewMap'

class Data extends React.Component {
  componentDidMount() {
    this.props.getData()
  }

  render() {
    return <NewMap data={this.props.data} onClick={this.onClick} />
  }
}

const mapStateToProps = state => ({
  data: state.dataReducer
})

const mapDispatchToProps = dispatch => ({
  getData: () => dispatch(getData())
})

export default connect(mapStateToProps, mapDispatchToProps)(Data)
