var Client = require('../../client/v1');

describe('`Device` class', function() {
    var device1;
    var device1Same;
    var device2;

    before(function() {
        device1 = new Client.Device('someuser1');
        device1Same = new Client.Device('someuser1');
        device2 = new Client.Device('someuser2');
    })

    it('should not be problem to access username', function() {
        device1.username.should.be.equal('someuser1');
        device2.username.should.be.equal('someuser2');
    });


    it('should not be problem to access id', function() {
        device1.id.should.match(/^android-[a-zA-Z0-9]{16}$/);
    })

    it('should match same ids 2 times', function() {
        device1.id.should.be.equal(device1Same.id);
    });

    it('should have md5', function() {
        device1.md5.should.not.be.empty();
        device1.md5.should.be.String();
        device1.md5.length.should.be.equal(32);
    });

    it('should have property api', function() {
        device1.api.should.be.Number();
        device1.api.should.be.oneOf([18, 19, 20, 21, 22, 23]);
    })

    it('should have property release', function() {
        device1.release.should.be.String();
        device1.release.should.be.oneOf(['4.0.4', '4.3.1', '4.4.4', '5.1.1', '6.0.1']);
    })

    it('should have property dpi', function() {
        device1.dpi.should.be.String();
        device1.dpi.should.be.oneOf(['801', '577', '576', '538', '515', '424', '401', '373']);
    })

    it('should have property resolution', function() {
        device1.resolution.should.be.String();
        device1.resolution.should.be.oneOf(['3840x2160', '1440x2560', '2560x1440', '1440x2560',
            '2560x1440', '1080x1920', '1080x1920', '1080x1920']);
    });

    it('should have property language', function() {
        device1.language.should.be.String();
        device1.language.should.be.oneOf(['en_US']);
    });

    it('should not be problem to get device info', function() {
        device1.info.should.have.property('model');
        device1.info.should.have.property('manufacturer');
        device1.info.should.have.property('device');
    });

    it('should not be problem to get device payload', function() {
        device1.payload.should.have.property('manufacturer');
        device1.payload.should.have.property('model');
        device1.payload.should.have.property('android_version');
        device1.payload.should.have.property('android_release');

        device1.payload.manufacturer.should.be.String();
        device1.payload.manufacturer.should.not.be.empty();
        device1.payload.model.should.be.String();
        device1.payload.model.should.not.be.empty();
        device1.payload.android_version.should.be.Number();
        device1.payload.android_version.should.be.above(17);
        device1.payload.android_release.should.be.String();
        device1.payload.android_release.should.not.be.empty();
    });

    it('should not be problem to get userAgent', function() {
        var yellowstone = /^Instagram\s[0-9\.]*\sAndroid\s\(18\/4.0.4\;\s424dpi\;\s1080x1920\;\sGoogle\;\sYellowstone\;\syellowstone\;\sen_US\)$/;
        device1.userAgent().should.match(yellowstone);
    });

});
