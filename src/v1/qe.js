var util = require("util");
var _ = require("lodash");
var Resource = require("./resource");
const CONSTANTS = require("./constants");


function QE() {
    Resource.apply(this, arguments);
}

util.inherits(QE, Resource);

module.exports = QE;
var Exceptions = require('./exceptions');
var Request = require("./request");

// Lets fake this experiment bullshit
QE.sync = function (session) {
    var random = parseInt(Math.random() * 100) + 1;   
    var experiments = _.sampleSize(CONSTANTS.EXPERIMENTS, random);
    return session.getAccountId()
        .then(function(id) {
            return new Request(session)
                .setMethod('POST')
                .setResource('qeSync')
                .generateUUID()
                .setData({
                    id: id,
                    _uid: id,
                    experiments: experiments.join(',')
                }) 
                .signPayload()
                .send();
        });
};
