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

    this.handleMouseMove =
      this.handleMouseMove.bind(this);

    this.handleMouseUp =
      this.handleMouseUp.bind(this);

    /* Set initial state */
    this.state = {
      beerEBCColorCode: this.calculateBeerEBCColorCode(),
      displayGlass: true,
      moveGlass: false,
      dropGlass: false,
      mousePosition: {"x": null, "y": null},
    };
  }

  /* Event handlers ––––––––––––––––––––––––––––––––––––––––––––––––––––––––– */
  handleGlassMouseDown(event) {
    event.preventDefault();
    event.stopPropagation();

    this._initialMousePosition = {x: event.clientX, y: event.clientY};
    this.setState({displayGlass: false, mousePosition: {x: 0, y: 0}});

    window.addEventListener("mousemove", this.handleMouseMove);
    window.addEventListener("mouseup", this.handleMouseUp);
  }

  handleMouseMove(event) {
    this.setState({moveGlass: true});
    event.preventDefault();
    event.stopPropagation();

    var xyPosition = {x: event.clientX - this._initialMousePosition.x, y: event.clientY - this._initialMousePosition.y};
    this.setState({
      mousePosition: xyPosition
    });
  }

  handleMouseUp(event) {
    this.setState({dropGlass: true});
    event.preventDefault();
    event.stopPropagation();

    window.removeEventListener("mousemove", this.handleMouseMove);
    window.removeEventListener("mouseup", this.handleMouseUp);
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

    const waveClass = classNames(style.wave, this.getBeerEBCColorClass());

    const glassClass = classNames(style.glass, {[`${style.glassMoving}`]: this.state.moveGlass}, {[`${style.glassDropping}`]: this.state.dropGlass});

    const glassStyle = {
      left: this.state.mousePosition.x,
      bottom: -this.state.mousePosition.y,
    };

    const glassProps = (this.state.displayGlass) ? {onMouseDown: this.handleGlassMouseDown} : {style: glassStyle};

    return (
      <div className={containerClass} {...props}>
        <div className={style.tap}></div>
        <div className={streamClass}></div>
        <div className={glassClass} {...glassProps}></div>
        <div className={waveClass}></div>
      </div>
    );
  }
}

Beertap.propTypes = {};
