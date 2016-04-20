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
  
    
    /* Set initial state */
    this.state = {
      beerEBCColorCode: this.calculateBeerEBCColorCode(),
    };
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
    const codeOffset = 30;
    
    return (code + 30) % 59;
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
    const code = this.state.beerEBCColorCode % 59;
    console.log(code);
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
    const containerClass = classNames(style.container, className);
    const streamClass = classNames(style.stream, this.getBeerEBCColorClass());
    
    return (
      <div className={containerClass} {...props}>
        <div className={style.tap}></div>
        <div className={streamClass}></div>
        <div className={style.glass}></div>
      </div>
    );
  }
}
