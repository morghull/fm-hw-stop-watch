import React, { Component } from 'react';
import styles from './StopWatch.module.css';

class StopWatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date(0, 0, 0, 0, 0, 0, 0),
    };
    this.timeoutId = null;
    this.timerDelay = 1000;
    this.isOn = false;
  }
  tick = () => {
    clearTimeout(this.timeoutId);

    this.timeoutId = setTimeout(() => {
      this.setState((state, props) => {
        const { time } = state;
        const newTime = new Date(time.getTime() + 1000);
        return { time: newTime };
      });
    }, this.timerDelay);
  };
  start = () => {
    if (!this.timeoutId) {
      this.isOn = true;
      this.tick();
    }
  };
  stop = () => {
    this.isOn = false;
    clearTimeout(this.timeoutId);
    this.timeoutId = null;
  };
  reset = () => {
    this.stop();
    this.setState({ time: new Date(0, 0, 0, 0, 0, 0, 0) });
  };
  componentDidMount() {
    this.start();
  }
  componentDidUpdate() {
    if (this.isOn) this.tick();
  }
  componentWillUnmount() {
    clearTimeout(this.timeoutId);
    this.timeoutId = null;
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
