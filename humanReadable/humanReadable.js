function humanReadable (seconds) {
    let remainder;
    const hours = Math.floor(seconds / 3600);
    remainder = seconds % 3600;
    const minutes = Math.floor(remainder / 60);
    remainder %= 60;
    
    const hrs = hours / 10 >= 1 ? hours.toString() : "0" + hours.toString();
    const mins = minutes / 10 >= 1 ? minutes.toString() : "0" + minutes.toString();
    const secs = remainder / 10 >= 1 ? remainder.toString() : "0" + remainder.toString();
    
    return hrs + ":" + mins + ":" + secs;
  }

  module.exports = humanReadable;