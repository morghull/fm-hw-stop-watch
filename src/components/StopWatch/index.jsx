import React, { Component } from 'react';
import styles from './stop-watch.module.css';

class StopWatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date(0, 0, 0, 0, 0, 0, 0),
    };
    this.intervalId = null;
  }
  tick = () => {
    this.setState((state, props) => {
      const { time } = state;
      const newTime = new Date(time.getTime() + 1000);
      return { time: newTime };
    });
  };
  start = () => {
    if (!this.intervalId)
      this.intervalId = setInterval(this.tick, 1000);
  };
  stop = () => {
    clearInterval(this.intervalId);
    this.intervalId = null;
  };
  reset = () => {
    this.stop();
    this.setState({ time: new Date(0, 0, 0, 0, 0, 0, 0) });
  };
  componentDidMount() {
    this.start();
  }
  componentDidUpdate() {}
  componentWillUnmount() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }
  render() {
    const { time } = this.state;
    return (
      <article className={styles.container}>
        <h2>{time.toLocaleTimeString('en-GB')}</h2>
        <button onClick={this.start}>start</button>
        <button onClick={this.stop}>stop</button>
        <button onClick={this.reset}>reset</button>
      </article>
    );
  }
}

export default StopWatch;
