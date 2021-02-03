import React from 'react'
import {connect} from 'react-redux'
import {getData} from '../store/data'

class Data extends React.Component {
  componentDidMount() {
    console.log('inside mount')
    this.props.getData()
  }
  render() {
    console.log('inside render')
    return <h1>testing 123</h1>
  }
}

const mapStateToProps = state => {
  console.log('inside map state')
  return {data: state.data}
}

const mapDispatchToProps = dispatch => ({
  getData: () => dispatch(getData())
})

export default connect(mapStateToProps, mapDispatchToProps)(Data)
