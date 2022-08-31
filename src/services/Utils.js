class Utils {
  _delay = 1000;

  debounce = (callback, timeoutDelay = this._delay) => {
    let timeoutId;
    return (...rest) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
    };
  };
}

export default Utils;
