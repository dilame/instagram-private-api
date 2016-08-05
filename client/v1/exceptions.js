var _ = require("underscore");
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
    if(!this.url)
        this.url = routes.getWebUrl('challange')
    this.session = session;
}
util.inherits(CheckpointError, APIError);
exports.CheckpointError = CheckpointError;



function OnlyRankedItemsError() {
    this.name = "OnlyRankedItemsError";
    this.message = "Tag has only ranked items to show, due to blocked content";
}
util.inherits(OnlyRankedItemsError, APIError);
exports.OnlyRankedItemsError = OnlyRankedItemsError;



function RegistrationError(errors) {
    this.name = "RegistrationError";
    this.data = _.clone(errors);
    var messages = [];
    _.each(errors, function (val, key) {
        messages.push(val.join(' '));
    });
    this.message = messages.join('. ');
}
util.inherits(RegistrationError, APIError);
exports.RegistrationError = RegistrationError;

RegistrationError.prototype.serialize = function () {
    var object = APIError.prototype.serialize.call(this);
    return _.extend(object, { 
        errorData: this.data 
    });
};


function NotFoundError() {
    this.name = "NotFoundError";
    this.message = "Page wasn't found!";
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


function NotPossibleToResolveChallange(reason, code) {
    this.name = 'NotPossibleToResolveChallange';
    this.reason = reason || 'Unknown reason';
    this.code = code || NotPossibleToResolveChallange.CODE.UNKNOWN;
    this.message = "Not possible to resolve challange ("+reason+")!";
}

util.inherits(NotPossibleToResolveChallange, APIError);
exports.NotPossibleToResolveChallange = NotPossibleToResolveChallange;

NotPossibleToResolveChallange.CODE = {
    RESET_NOT_WORKING: "RESET_NOT_WORKING",
    NOT_ACCEPTING_NUMBER: "NOT_ACCEPTING_NUMBER",
    INCORRECT_NUMBER: "INCORRECT_NUMBER",
    INCORRECT_CODE: "INCORRECT_CODE",
    UNKNOWN: "UNKNOWN",
    UNABLE_TO_PARSE: "UNABLE_TO_PARSE"
};




function NotPossibleToVerify() {
    this.name = 'NotPossibleToVerify';
    this.message = "Not possible to verify trough code!";
}

util.inherits(NotPossibleToVerify, APIError);
exports.NotPossibleToVerify = NotPossibleToVerify;


function NoChallangeRequired() {
    this.name = 'NoChallangeRequired';
    this.message = "No challange is required to use account!";
}

util.inherits(NoChallangeRequired, APIError);
exports.NoChallangeRequired = NoChallangeRequired;