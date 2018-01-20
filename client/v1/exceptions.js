var _ = require("lodash");
var util = require("util");
var routes = require('./routes');



// Basic error
function APIError(message) {
    this.name = "APIError";
    this.message = (message || "Instagram API error was made.");
}
util.inherits(APIError, Error);
exports.APIError = APIError;

APIError.prototype.serialize = function () {
    return {
        error: this.constructor.name,
        errorMessage: this.message
    }
};



function NotImplementedError(message) {
    this.name = "NotImplementedError";
    this.message = (message || "This method is actually not implemented");
}
util.inherits(NotImplementedError, APIError);
exports.NotImplementedError = NotImplementedError;



function NotAbleToSignError() {
    this.name = "NotAbleToSign";
    this.message = "It's not possible to sign request!";
}
util.inherits(NotAbleToSignError, APIError);
exports.NotAbleToSignError = NotAbleToSignError;



function RequestError(payload) {
    this.name = "RequestError";
    this.message = "It's not possible to make request!";
    this.json = {};
    if(_.isString(payload.message))
        this.message = payload.message;
    if(_.isObject(payload)) {
        this.json = payload
    }
}
util.inherits(RequestError, APIError);
exports.RequestError = RequestError;



function AuthenticationError(message) {
    this.name = "AuthenticationError";
    this.message = message || "Not possible to authenticate";
}
util.inherits(AuthenticationError, APIError);
exports.AuthenticationError = AuthenticationError;



function ParseError(response, request) {
    this.name = "ParseError";
    this.message = "Not possible to parse API response";
    this.response = response;
    this.request = request;
}

util.inherits(ParseError, APIError);
exports.ParseError = ParseError;

ParseError.prototype.getUrl = function () {
    return this.request.url;
};



function ActionSpamError(json) {
    this.json = json;
    this.name = "ActionSpamError";
    this.message = "This action was disabled due to block from instagram!";
}
util.inherits(ActionSpamError, APIError);
exports.ActionSpamError = ActionSpamError;

ActionSpamError.prototype.serialize = function () {
    return _.extend(APIError.prototype.serialize.call(this), {
        errorData: {
            blockTime: this.getBlockTime(),
            message: this.getFeedbackMessage()
        }
    });
};

ActionSpamError.prototype.getBlockTime = function () {
    if (_.isObject(this.json) && _.isString(this.json.feedback_message)) {
        var hours = this.json.feedback_message.match(/(\d+)(\s)*hour(s)/);
        if (!hours || !_.isArray(hours)) return 0;
        var blockTime = parseInt(hours[1]) * 60 * 60 * 1000;
        return blockTime + (1000 * 60 * 5);
    }
    return 0;
};

ActionSpamError.prototype.getFeedbackMessage = function () {
    var message = "No feedback message";
    if(_.isString(this.json.feedback_message)) {
        var title = _.isString(this.json.feedback_title) ? (this.json.feedback_title + ": ") : "";
        message = title + this.json.feedback_message;
    };
    return message;
};


function CheckpointError(json, session) {
    this.json = json;
    this.name = "CheckpointError";
    this.message = "Instagram call checkpoint for this action!";
    if(_.isString(json.checkpoint_url))
        this.url = json.checkpoint_url;
    if(!this.url && _.isObject(json.checkpoint) && _.isString(json.checkpoint.url))
        this.url = json.checkpoint.url;
    if(!this.url && _.isObject(json.challenge) && _.isString(json.challenge.url))
        this.url = json.challenge.url;
    if(!this.url)
        this.url = routes.getWebUrl('challenge')
    this.session = session;
}
util.inherits(CheckpointError, APIError);
exports.CheckpointError = CheckpointError;


function SentryBlockError(json) {
    this.name = "SentryBlockError";
    this.message = "Sentry block from instagram";
    this.json = json;
}
util.inherits(SentryBlockError, APIError);
exports.SentryBlockError = SentryBlockError;


function OnlyRankedItemsError() {
    this.name = "OnlyRankedItemsError";
    this.message = "Tag has only ranked items to show, due to blocked content";
}
util.inherits(OnlyRankedItemsError, APIError);
exports.OnlyRankedItemsError = OnlyRankedItemsError;



function NotFoundError(response) {
    this.name = "NotFoundError";
    this.message = "Page wasn't found!";
    this.response = response;
}

util.inherits(NotFoundError, APIError);
exports.NotFoundError = NotFoundError;



function PrivateUserError() {
    this.name = "PrivateUserError";
    this.message = "User is private and you are not authorized to view his content!";
}

util.inherits(PrivateUserError, APIError);
exports.PrivateUserError = PrivateUserError;


function InvalidParamsError(object) {
    this.name = "InvalidParamsError";
    this.message = "There was validation error and problem with input you supply";
    this.errorData = object;
}

util.inherits(InvalidParamsError, APIError);
exports.InvalidParamsError = InvalidParamsError;

InvalidParamsError.prototype.serialize = function () {
    var object = APIError.prototype.serialize.call(this);
    return _.extend(object, {
        errorData: this.errorData
    })
};



function TooManyFollowsError() {
    this.name = "TooManyFollowsError";
    this.message = "Account has just too much follows";
}

util.inherits(TooManyFollowsError, APIError);
exports.TooManyFollowsError = TooManyFollowsError;



function RequestsLimitError() {
    this.name = "RequestsLimitError";
    this.message = "You just made too many request to instagram API";
}

util.inherits(RequestsLimitError, APIError);
exports.RequestsLimitError = RequestsLimitError;


function CookieNotValidError(cookieName) {
    this.name = "CookieNotValidError";
    this.message = "Cookie `"+cookieName+"` you are searching found was either not found or not valid!";
}

util.inherits(CookieNotValidError, APIError);
exports.CookieNotValidError = CookieNotValidError;


function IGAccountNotFoundError() {
    this.name = "IGAccountNotFoundError";
    this.message = "Account you are searching for was not found!";
}

util.inherits(IGAccountNotFoundError, APIError);
exports.IGAccountNotFoundError = IGAccountNotFoundError;


function ThreadEmptyError() {
    this.name = "ThreadEmptyError";
    this.message = "Thread is empty there are no items!";
}

util.inherits(ThreadEmptyError, APIError);
exports.ThreadEmptyError = ThreadEmptyError;



function AccountInactive(accountInstance) {
    this.name = 'AccountInactive';
    this.message = "The account you are trying to propagate is inactive";
    this.account = accountInstance;
}

util.inherits(AccountInactive, APIError);
exports.AccountInactive = AccountInactive;


function AccountBanned(message) {
    this.name = 'AccountBanned';
    this.message = message;
}

util.inherits(AccountBanned, APIError);
exports.AccountBanned = AccountBanned;


function AccountActivityPrivateFeed() {
    this.name = 'AccountActivityPrivateFeed';
    this.message = "The Account has private feed, account activity not really completed";
}

util.inherits(AccountActivityPrivateFeed, APIError);
exports.AccountActivityPrivateFeed = AccountActivityPrivateFeed;


function PlaceNotFound() {
    this.name = 'PlaceNotFound';
    this.message = "Place you are searching for not exists!";
}

util.inherits(PlaceNotFound, APIError);
exports.PlaceNotFound = PlaceNotFound;


function NotPossibleToResolveChallenge(reason, code) {
    this.name = 'NotPossibleToResolveChallenge';
    this.reason = reason || 'Unknown reason';
    this.code = code || NotPossibleToResolveChallenge.CODE.UNKNOWN;
    this.message = "Not possible to resolve challenge ("+reason+")!";
}

util.inherits(NotPossibleToResolveChallenge, APIError);
exports.NotPossibleToResolveChallenge = NotPossibleToResolveChallenge;

NotPossibleToResolveChallenge.CODE = {
    RESET_NOT_WORKING: "RESET_NOT_WORKING",
    NOT_ACCEPTING_NUMBER: "NOT_ACCEPTING_NUMBER",
    INCORRECT_NUMBER: "INCORRECT_NUMBER",
    INCORRECT_CODE: "INCORRECT_CODE",
    UNKNOWN: "UNKNOWN",
    UNABLE_TO_PARSE: "UNABLE_TO_PARSE",
    NOT_ACCEPTED: "NOT_ACCEPTED"
};




function NotPossibleToVerify() {
    this.name = 'NotPossibleToVerify';
    this.message = "Not possible to verify trough code!";
}

util.inherits(NotPossibleToVerify, APIError);
exports.NotPossibleToVerify = NotPossibleToVerify;


function NoChallengeRequired() {
    this.name = 'NoChallengeRequired';
    this.message = "No challenge is required to use account!";
}

util.inherits(NoChallengeRequired, APIError);
exports.NoChallengeRequired = NoChallengeRequired;


function InvalidEmail(email, json) {
    this.name = 'InvalidEmail';
    this.message = email + " email is not an valid email";
    this.json = json;
}

util.inherits(InvalidEmail, APIError);
exports.InvalidEmail = InvalidEmail;


function InvalidUsername(username, json) {
    this.name = 'InvalidUsername';
    this.message = username + " username is not an valid username";
    this.json = json;
}

util.inherits(InvalidUsername, APIError);
exports.InvalidUsername = InvalidUsername;


function InvalidPhone(phone, json) {
    this.name = 'InvalidPhone';
    this.message = phone + " phone is not a valid phone";
    this.json = json;
}

util.inherits(InvalidPhone, APIError);
exports.InvalidPhone = InvalidPhone;


function InvalidPassword() {
    this.name = 'InvalidPassword';
    this.message = "Password must be at least 6 chars long";
}

util.inherits(InvalidPassword, APIError);
exports.InvalidPassword = InvalidPassword;



function AccountRegistrationError(message, json) {
    this.name = 'AccountRegistrationError';
    this.message = message
    this.json = json;
    if(_.isObject(json) && json.errors && !message) {
        this.message = '';
        for(var key in json.errors) {
            this.message += json.errors[key].join('. ')
        }
    }
}

util.inherits(AccountRegistrationError, APIError);
exports.AccountRegistrationError = AccountRegistrationError;

function TranscodeTimeoutError() {
    this.name = "TranscodeError";
    this.message = "Server did not transcoded uploaded video in time";
}
util.inherits(TranscodeTimeoutError, APIError);
exports.TranscodeTimeoutError = TranscodeTimeoutError;


function MediaUnavailableError() {
    this.name = "MediaUnavailableError";
    this.message = "Media is unavailable";
}
util.inherits(MediaUnavailableError, APIError);
exports.MediaUnavailableError = MediaUnavailableError;
