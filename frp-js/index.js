var refreshButton 		     = document.querySelector('.refresh')
	, refreshClickStream     = Rx.Observable.fromEvent(refreshButton, 'click')
	, startupRequestStream   = Rx.Observable.just('https://api.github.com/users')

var requestOnRefreshStream = refreshClickStream
.map(function(){
	var randomOffset = Math.floor(Math.random()*500)
	return 'https://api.github.com/users?since=' + randomOffset
})

var requestStream = Rx.Observable.merge(
	requesetOnRefreshStream, startupRequestStream
)

var responseStream = requestStream
.flatMap(function(requestUrl){
	return Rx.Observable.fromPromise(jQuery.getJSON(requestUrl))
})

responseStream.subscribe(function(response){

})

