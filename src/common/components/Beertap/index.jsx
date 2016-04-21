import React from 'react';
import style from './beertap.css';
import classNames from 'classnames';

export default class Beertap extends React.Component {

  constructor(...args) {
    super(...args);

    this.colorChangeInterval = (60 / 118 * 24);
    this.colorUpdateTimer = null;

    /* Bind methods */
    this.calculateBeerEBCColorCode =
      this.calculateBeerEBCColorCode.bind(this);

    this.getBeerEBCColorClass =
      this.getBeerEBCColorClass.bind(this);

    this.handleGlassMouseDown =
      this.handleGlassMouseDown.bind(this);

    /* Set initial state */
    this.state = {
      beerEBCColorCode: this.calculateBeerEBCColorCode(),
      displayGlass: true,
    };
  }

  /* Event handlers ––––––––––––––––––––––––––––––––––––––––––––––––––––––––– */
  handleGlassMouseDown() {
    this.setState({displayGlass: false})
  }

  /* Beer EBC code –––––––––––––––––––––––––––––––––––––––––––––––––––––––––– */

  /* Calculate a color code (0..59) based on the current
   * time.
   */
  calculateBeerEBCColorCode() {
    const utcTimeInMinutes = new Date().getTime() / 60000;
    const minuteOfDay = utcTimeInMinutes % 1440;
    const code = (minuteOfDay <= 1440/2) ?
      Math.round(minuteOfDay / this.colorChangeInterval) :
      Math.round((1440 - minuteOfDay) / this.colorChangeInterval);

    return (code + 30) % 60;
  }

  /* Calculate and update the beerEBCColorCode if its value
   * has changed.
   */
  updateBeerEBCColorCode() {
    const code = this.calculateBeerEBCColorCode();

    if (code != this.state.beerEBCColorCode) {
      this.setState({
        beerEBCColorCode: code,
      });
    }
  }


  /* Return the className for the beer color corresponding
   * to the current minute with the darkest color being
   * assigned to midnight.
   */
  getBeerEBCColorClass() {
    const code = this.state.beerEBCColorCode % 60;
    return `beerEBC-${code}`;
  }

  /* Life cycle ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– */

  componentWillMount() {}

  componentDidMount() {
    /* Update the color code at the colorChangeInterval.
     * Note that the interval is stored in minutes so it
     * needs to be converted (* 60.000) to milliseconds. */
    this.colorUpdateTimer = setInterval(
      this.updateBeerEBCColorCode.bind(this),
      this.colorChangeInterval * 60000);

  }

  componentWillUnmount() {
    removeInterval(this.colorUpdateTimer);
  }


  /* Render ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– */

  render() {
    const {children, className, ...props} = this.props;
    /* Pass on classes applied to the parent to the
     * container */
    const containerClass = classNames(style.container, className);
    /* Assign the correct beer EBC color code class to the
     * stream */
    const streamClass = classNames(style.stream, this.getBeerEBCColorClass());

    const glassElement = (this.state.displayGlass) ? (<div className={style.glass} onMouseDown={this.handleGlassMouseDown}></div>) : null;

    return (
      <div className={containerClass} {...props}>
        <div className={style.tap}></div>
        <div className={streamClass}></div>
        {glassElement}
      </div>
    );
  }
}

Beertap.propTypes = {};
