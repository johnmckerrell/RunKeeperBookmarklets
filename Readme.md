# RunKeeper Bookmarklets

A collection of Bookmarklets to run against RunKeeper's website to add functionality. Currently a collection of one part-finished bookmarklet:

## Toggle Units

This bookmarklet will toggle the units used on the page between metric and imperial.

To use the units switching bookmarklet, add the following link to your bookmarks and then press it when on the RunKeeper site:
 * [Toggle Units](javascript:(function(){if(window.bookmarklet&&window.bookmarklet["toggleunits"]){window.bookmarklet["toggleunits"]()}else{var script = document.createElement("script");script.type="text/javascript";script.src="https://raw.github.com/johnmckerrell/RunKeeperBookmarklets/master/runkeeper-units.js?"+Math.random();document.getElementsByTagName("head")[0].appendChild(script);}})())
 * [Toggle Units]<javascript:(function(){if(window.bookmarklet&&window.bookmarklet["toggleunits"]){window.bookmarklet["toggleunits"]()}else{var script = document.createElement("script");script.type="text/javascript";script.src="https://raw.github.com/johnmckerrell/RunKeeperBookmarklets/master/runkeeper-units.js?"+Math.random();document.getElementsByTagName("head")[0].appendChild(script);}})()>
 * <javascript:(function(){if(window.bookmarklet&&window.bookmarklet["toggleunits"]){window.bookmarklet["toggleunits"]()}else{var script = document.createElement("script");script.type="text/javascript";script.src="https://raw.github.com/johnmckerrell/RunKeeperBookmarklets/master/runkeeper-units.js?"+Math.random();document.getElementsByTagName("head")[0].appendChild(script);}})()>
 * <a href="javascript:(function(){if(window.bookmarklet&&window.bookmarklet['toggleunits']){window.bookmarklet["toggleunits"]()}else{var script = document.createElement('script');script.type='text/javascript';script.src='https://raw.github.com/johnmckerrell/RunKeeperBookmarklets/master/runkeeper-units.js?'+Math.random();document.getElementsByTagName('head')[0].appendChild(script);}})())">Toggle Units</a>
