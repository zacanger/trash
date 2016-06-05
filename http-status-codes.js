// http status codes, as defined in
// RFC1945 (HTTP/1.0, RFC2616 (HTTP/1.1), RFC2518 (WebDAV)
// based on the apache api. ported by bryce neal.

;(function () {
  'use strict'

  var httpStatusCode = {
    ACCEPTED                        : 202
  , BAD_GATEWAY                     : 502
  , BAD_REQUEST                     : 400
  , CONFLICT                        : 409
  , CONTINUE                        : 100
  , CREATED                         : 201
  , EXPECTATION_FAILED              : 417
  , FORBIDDEN                       : 403
  , GATEWAY_TIMEOUT                 : 504
  , GONE                            : 410
  , HTTP_VERSION_NOT_SUPPORTED      : 505
  , INSUFFICIENT_SPACE_ON_RESOURCE  : 419
  , INSUFFICIENT_STORAGE            : 507
  , INTERNAL_SERVER_ERROR           : 500
  , LENGTH_REQUIRED                 : 411
  , LOCKED                          : 423
  , METHOD_FAILURE                  : 420
  , METHOD_NOT_ALLOWED              : 405
  , MOVED_PERMANENTLY               : 301
  , MOVED_TEMPORARILY               : 302
  , MULTI_STATUS                    : 207
  , MULTIPLE_CHOICES                : 300
  , NO_CONTENT                      : 204
  , NON_AUTHORITATIVE_INFORMATION   : 203
  , NOT_ACCEPTABLE                  : 406
  , NOT_FOUND                       : 404
  , NOT_IMPLEMENTED                 : 501
  , NOT_MODIFIED                    : 304
  , OK                              : 200
  , PARTIAL_CONTENT                 : 206
  , PAYMENT_REQUIRED                : 402
  , PRECONDITION_FAILED             : 412
  , PROCESSING                      : 102
  , PROXY_AUTHENTICATION_REQUIRED   : 407
  , REQUEST_TIMEOUT                 : 408
  , REQUEST_TOO_LONG                : 413
  , REQUEST_URI_TOO_LONG            : 414
  , REQUESTED_RANGE_NOT_SATISFIABLE : 416
  , RESET_CONTENT                   : 205
  , SEE_OTHER                       : 303
  , SERVICE_UNAVAILABLE             : 503
  , SWITCHING_PROTOCOLS             : 101
  , TEMPORARY_REDIRECT              : 307
  , UNAUTHORIZED                    : 401
  , UNPROCESSABLE_ENTITY            : 422
  , UNSUPPORTED_MEDIA_TYPE          : 415
  , USE_PROXY                       : 305
  }

  var statusCodes = {}

  statusCodes[httpStatusCode.ACCEPTED]                        = 'Accepted'
  statusCodes[httpStatusCode.BAD_GATEWAY]                     = 'Bad Gateway'
  statusCodes[httpStatusCode.BAD_REQUEST]                     = 'Bad Request'
  statusCodes[httpStatusCode.CONFLICT]                        = 'Conflict'
  statusCodes[httpStatusCode.CONTINUE]                        = 'Continue'
  statusCodes[httpStatusCode.CREATED]                         = 'Created'
  statusCodes[httpStatusCode.EXPECTATION_FAILED]              = 'Expectation Failed'
  statusCodes[httpStatusCode.FAILED_DEPENDENCY]               = 'FailedDependency'
  statusCodes[httpStatusCode.FORBIDDEN]                       = 'Forbidden'
  statusCodes[httpStatusCode.GATEWAY_TIMEOUT]                 = 'Gateway Timeout'
  statusCodes[httpStatusCode.GONE]                            = 'Gone'
  statusCodes[httpStatusCode.HTTP_VERSION_NOT_SUPPORTED]      = 'HTTP Version Not Supported'
  statusCodes[httpStatusCode.INSUFFICIENT_SPACE_ON_RESOURCE]  = 'Insufficient Space on Resource'
  statusCodes[httpStatusCode.INSUFFICIENT_STORAGE]            = 'Insufficient Storage'
  statusCodes[httpStatusCode.INTERNAL_SERVER_ERROR]           = 'Server Error'
  statusCodes[httpStatusCode.LENGTH_REQUIRED]                 = 'Length Required'
  statusCodes[httpStatusCode.LOCKED]                          = 'Locked'
  statusCodes[httpStatusCode.METHOD_FAILURE]                  = 'Method Failure'
  statusCodes[httpStatusCode.METHOD_NOT_ALLOWED]              = 'Method Not Allowed'
  statusCodes[httpStatusCode.MOVED_PERMANENTLY]               = 'Moved Permanently'
  statusCodes[httpStatusCode.MOVED_TEMPORARILY]               = 'Moved Temporarily'
  statusCodes[httpStatusCode.MULTI_STATUS]                    = 'Multi-Status'
  statusCodes[httpStatusCode.MULTIPLE_CHOICES]                = 'Multiple Choices'
  statusCodes[httpStatusCode.NO_CONTENT]                      = 'No Content'
  statusCodes[httpStatusCode.NON_AUTHORITATIVE_INFORMATION]   = 'Non Authoritative Information'
  statusCodes[httpStatusCode.NOT_ACCEPTABLE]                  = 'Not Acceptable'
  statusCodes[httpStatusCode.NOT_FOUND]                       = 'Not Found'
  statusCodes[httpStatusCode.NOT_IMPLEMENTED]                 = 'Not Implemented'
  statusCodes[httpStatusCode.NOT_MODIFIED]                    = 'Not Modified'
  statusCodes[httpStatusCode.OK]                              = 'OK'
  statusCodes[httpStatusCode.PARTIAL_CONTENT]                 = 'Partial Content'
  statusCodes[httpStatusCode.PAYMENT_REQUIRED]                = 'Payment Required'
  statusCodes[httpStatusCode.PRECONDITION_FAILED]             = 'Precondition Failed'
  statusCodes[httpStatusCode.PROCESSING]                      = 'Processing'
  statusCodes[httpStatusCode.PROXY_AUTHENTICATION_REQUIRED]   = 'Proxy Authentication Required'
  statusCodes[httpStatusCode.REQUEST_TIMEOUT]                 = 'Request Timeout'
  statusCodes[httpStatusCode.REQUEST_TOO_LONG]                = 'Request Entity Too Large'
  statusCodes[httpStatusCode.REQUEST_URI_TOO_LONG]            = 'Request-URI Too Long'
  statusCodes[httpStatusCode.REQUESTED_RANGE_NOT_SATISFIABLE] = 'Requested Range Not Satisfiable'
  statusCodes[httpStatusCode.RESET_CONTENT]                   = 'Reset Content'
  statusCodes[httpStatusCode.SEE_OTHER]                       = 'See Other'
  statusCodes[httpStatusCode.SERVICE_UNAVAILABLE]             = 'Service Unavailable'
  statusCodes[httpStatusCode.SWITCHING_PROTOCOLS]             = 'Switching Protocols'
  statusCodes[httpStatusCode.TEMPORARY_REDIRECT]              = 'Temporary Redirect'
  statusCodes[httpStatusCode.UNAUTHORIZED]                    = 'Unauthorized'
  statusCodes[httpStatusCode.UNPROCESSABLE_ENTITY]            = 'Unprocessable Entity'
  statusCodes[httpStatusCode.UNSUPPORTED_MEDIA_TYPE]          = 'Unsupported Media Type'
  statusCodes[httpStatusCode.USE_PROXY]                       = 'Use Proxy'

  httpStatusCode.getStatusText = function (statusCode) {
    if (statusCodes.hasOwnProperty(statusCode)) {
      return statusCodes[statusCode]
    } else {
      throw 'Status code does not exist: ' + statusCode
      return null
    }
  }

  window.httpStatusCode = httpStatusCode

})()
