// conf.js
exports.config = {
	baseUrl: 'http://localhost:8080',
	seleniumAddress: 'http://localhost:4444/wd/hub',
	directConnect: true,
	capabilities: {
	    browserName: 'chrome',
	    count: 1,
	    shardTestFiles: true,
    	maxInstances: 2
	},
	framework: 'jasmine',
	jasmineNodeOpts: {
    	defaultTimeoutInterval: 30000
  	},
	suites: {
	    lab1: 'suites/lab1/*.js'
  	}
}