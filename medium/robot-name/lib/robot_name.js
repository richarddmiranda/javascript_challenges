
class Robot {

  static ROBOT_NAMES = []

  constructor() {
    this.roboName = ''
  }

  name() {
    
    if (this.roboName.length > 0) return this.roboName
    let robotName = ''

    while (true) {

      robotName = this.getPrefix() + this.getSuffix();

      if (Robot.ROBOT_NAMES.includes(robotName)) {
        robotName = ''
      } else {
        break;
      }
    }

    Robot.ROBOT_NAMES.push(robotName);
    this.roboName = robotName;
    return robotName;
  }

  getPrefix() {
    const PREFIX_STRING = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let currentPrefix = ''

    for (let i = 0; i < 2; i++) {
      let randomIndex = Math.floor(Math.random() * PREFIX_STRING.length)
      currentPrefix += String(PREFIX_STRING[randomIndex]);
    }

    return currentPrefix;
  }

  getSuffix() {
    const SUFFIX_STRING = '1234567890'
    let currentSuffix = ''

    for (let i = 0; i < 3; i++) {
      let randomIndex = Math.floor(Math.random() * SUFFIX_STRING.length)
      currentSuffix += String(SUFFIX_STRING[randomIndex]);
    }

    return currentSuffix;
  }

  reset() {
    let nameIndex = Robot.ROBOT_NAMES.indexOf(this.roboName);
    Robot.ROBOT_NAMES.splice(nameIndex, 1)
    this.roboName = ''
  }
}

module.exports = Robot


