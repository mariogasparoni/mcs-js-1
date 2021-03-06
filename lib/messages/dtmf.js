'use strict';

const MCSMessage = require('./MCSMessage');
const C = require('../constants');

class DTMF extends MCSMessage {
  constructor(mediaId, tone) {
    super(C.DTMF);
    this.body.mediaId = mediaId;
    this.body.tone = tone;
  }
}

module.exports = DTMF;
