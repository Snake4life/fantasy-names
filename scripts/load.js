function loadScript(url, callback) {
	var script                = document.createElement('script');
	script.type               = 'text/javascript';
	script.src                = url;
	script.onreadystatechange = callback;
	script.onload             = callback;
	document.getElementsByTagName('head')[0].appendChild(script);
}