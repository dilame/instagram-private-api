var Promise = require('bluebird');
var should = require('should');
var _ = require('underscore');
var Addresses = require('../../../proxy/instagram/v1/addresses');

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



describe("addresses", function () {
    
    it("should not be able to register non existing ip", function() {
        should.throws(function(){
            Addresses.register('1.1.1.1')    
        }, Error);
        
        try {
            Addresses.register(null) 
        } catch(e) {
            (/valid ip/gi).test(e.message).should.be.ok();
        }
    });
    
    
    it("should be able to register local machine ip", function() {
        _.each(addresses, function(address) {
            Addresses.register(address).should.be.equal(Addresses)
        });
        Addresses.count().should.be.equal(addresses.length)
    });
    
    
    it("should be able to clean up", function() {
        Addresses.cleanUp();
        Addresses.count().should.be.equal(0);
    });
    
    describe("involving fake ips", function() {
        
        beforeEach("should be able to force ips", function() {
            Addresses.register("0.0.0.1", true);
            Addresses.register("0.0.0.2", true);
            Addresses.register("0.0.0.3", true);
            Addresses.register("0.0.0.4", true);
        });
        
        
        it("should be able to get list of addresses", function() {
            var list = Addresses.getAddressesWithPriority();
            list.length.should.be.equal(4)
        });
        
        
        it("should be able to get address with lowest rank", function() {
            var address1 = Addresses.rankAddress();
            var address2 = Addresses.rankAddress();
            var address3 = Addresses.rankAddress();
            var address4 = Addresses.rankAddress();
            address1.should.not.be.equal(address2);
            address2.should.not.be.equal(address3);
            address3.should.not.be.equal(address4);
            address4.should.not.be.equal(address1);
            var addrs = Addresses.getAddressesWithPriority();
            addrs[0].should.be.equal(address1)
            addrs[1].should.be.equal(address2)
            addrs[2].should.be.equal(address3)
            addrs[3].should.be.equal(address4)
            var address5 = Addresses.rankAddress();
            address1.should.be.equal(address5)
            var inPriority = Addresses.getAddressWithPriority();
            inPriority.should.be.equal(address2);
        });
        
        
        it("should be able to step down", function() {
            var address1 = Addresses.rankAddress();
            var address2 = Addresses.rankAddress();
            var address3 = Addresses.rankAddress();
            var address4 = Addresses.rankAddress();
            var inPriority;
            Addresses.stepDownInPriority(address1);
            Addresses.stepDownInPriority(address4);
            inPriority = Addresses.getAddressWithPriority();
            inPriority.should.be.equal(address2);
            Addresses.stepDownInPriority(address2);
            inPriority = Addresses.getAddressWithPriority();
            inPriority.should.be.equal(address3);
            Addresses.stepDownInPriority(address3);
            inPriority = Addresses.getAddressWithPriority();
            inPriority.should.be.equal(address1);
        });
    
        
        it("should be able to step down for group", function() {
            var address1 = Addresses.rankAddress();
            var address2 = Addresses.rankAddress();
            var address3 = Addresses.rankAddress();
            var address4 = Addresses.rankAddress();
            var rankNewOne, inPriority;
            Addresses.stepDownInPriority(address1, 'directs');
            Addresses.stepDownInPriority(address2, 'directs');
            address1 = Addresses.rankAddress();
            address2 = Addresses.rankAddress();
            address3 = Addresses.rankAddress();
            address4 = Addresses.rankAddress();
            var addrs = Addresses.getAddressesWithPriority('directs');
            addrs[2].should.be.equal(address1)
            addrs[3].should.be.equal(address2)
            addrs = Addresses.getAddressesWithPriority();
            addrs[0].should.be.equal(address1)
            addrs[1].should.be.equal(address2)
            var address5 = Addresses.rankAddress();
            address5.should.be.equal(address1)
            var addr = Addresses.getAddressWithPriority('directs');
            addr.should.be.equal(address3)
            addr = Addresses.getAddressWithPriority();
            addr.should.be.equal(address2)
            var ranked = Addresses.rankAddress('directs');
            ranked.should.be.equal(address3);
            ranked = Addresses.rankAddress('directs');
            ranked.should.be.equal(address4);
            ranked = Addresses.rankAddress('directs');
            ranked.should.be.equal(address3);
        });
    
    })
    
    after(Addresses.cleanUp)
})

