import Vue from 'vue'

let uid = 0
let POOL = {}

class Hub {
  constructor () {
    this.uid = ++uid
    POOL[uid] = new Vue()
  }

  static getHubByUid (uid) {
    return POOL[uid]
  }
}

export default Hub
