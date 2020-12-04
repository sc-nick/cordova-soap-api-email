var exec = require('cordova/exec')

var SendEmailManager = function (options, callback) {
  this.options = options

  if (typeof callback !== 'function') {
    throw new Error('Event handler must be a function')
  }

  this.callback = callback
  exec(this.callback, null, 'SendEmailManager', 'initManager', [this.options])
}

SendEmailManager.prototype.sendEmail = function(payload, successCb, errorCb){
  if(payload){
    exec(successCb, errorCb, 'SendEmail', 'send', [payload]);
  }
}

module.exports = {
  init: function (options, cb) {
    return new SendEmailManager(options || {}, cb)
  },
  SendEmailManager: SendEmailManager
}
