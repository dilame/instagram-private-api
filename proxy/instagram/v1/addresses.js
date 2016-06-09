var _ = require('underscore');
var NodeCache = require('node-cache');

var counter = {};
const DEFAULT_GROUP = 'dgroup';


var priorities = new NodeCache({
    stdTTL: 24 * 60 * 60 * 1000,
    checkperiod: 60 * 1000
});


function keyWithGroup(address, group) {
    if(!group) group = DEFAULT_GROUP;
    return address + "_" + group;
}


var os = require('os');
var ifaces = os.networkInterfaces();
var addresses = [];

Object.keys(ifaces).forEach(function (ifname) {
  var alias = 0;
  ifaces[ifname].forEach(function (iface) {
    if ('IPv4' !== iface.family || iface.internal !== false)
        return;
    addresses.push(iface.address)
    ++alias;
  });
});



function getSorted(group) {
    return _.sortBy(_.keys(counter), function(ip) {
        var value = counter[ip];
        var key = keyWithGroup(ip, group);
        var priority = priorities.get(key);
        return priority === -1 ? value * 10e10 : value;
    }); 
}


module.exports = {
    register: function (address, force) {
        if(!force && (!_.isString(address) || !_.contains(addresses, address)))
            throw new Error("Address must be valid ip address within network interface")
        counter[address] = 0;
        return this;
    },
    
    
    rankAddress: function(group) {
        var address = _.first(getSorted(group));
        if(!address) return;
        counter[address] += 1;
        return address;    
    },
    
    
    getAddressWithPriority: function(group) {
        return _.first(getSorted(group));    
    },
    
    
    getAddressesWithPriority: function(group) {
        return getSorted(group);
    },  
    
    
    stepDownInPriority: function(address, group) {
        priorities.set(keyWithGroup(address, group), -1);
        return this;
    },
    
    
    count: function() {
        return _.keys(counter).length;
    },
    
    
    cleanUp: function() {
        counter = {};
        return this;
    } 
}