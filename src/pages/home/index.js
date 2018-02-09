import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Button } from 'antd-mobile'
import styles from './index.css'
import {
  increment,
  incrementAsync,
  decrement,
  decrementAsync
} from '../../store/modules/counter'
const mapStateToProps = state => ({
  count: state.counter.count,
  isIncrementing: state.counter.isIncrementing,
  isDecrementing: state.counter.isDecrementing
})

const mapDispatchToProps = dispatch => bindActionCreators({
  increment,
  incrementAsync,
  decrement,
  decrementAsync,
  changePage: () => push('/about-us')
}, dispatch)

const Home = props => (
  <div>
    <h1>Home</h1>
    <p>Count: {props.count}</p>
    <Button onClick={props.increment} disabled={props.isIncrementing} type='primary'>Increment</Button>
    <p>
      <button onClick={props.incrementAsync} className={'button ' + styles.pages} disabled={props.isIncrementing}>Increment Async</button>
    </p>

    <p>
      <button onClick={props.decrement} disabled={props.isDecrementing}>Decrement</button>
      <button onClick={props.decrementAsync} disabled={props.isDecrementing}>Decrement Async</button>
    </p>

    <p><button onClick={() => props.changePage()}>Go to about page via redux</button></p>
  </div>
)
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
