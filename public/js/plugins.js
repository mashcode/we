
// remap jQuery to $
(function($){
})(this.jQuery);

// usage: log('inside coolFunc',this,arguments);
// paulirish.com/2009/log-a-lightweight-wrapper-for-consolelog/
window.log = function(){
  log.history = log.history || [];   // store logs to an array for reference
  log.history.push(arguments);
  if(this.console){
    console.log( Array.prototype.slice.call(arguments) );
  }
};

// catch all document.write() calls
(function(doc){
  var write = doc.write;
  doc.write = function(q){ 
    log('document.write(): ',arguments); 
    if (/docwriteregexwhitelist/.test(q)) write.apply(doc,arguments);  
  };
})(document);

// disable scrolling covers.addCovers() event.preventDefault()

covers = {

	addCovers: function() {
	
		var elements = document.getElementsByTagName( "input" );
		var elements2 = document.getElementsByTagName( "textarea" );
				
		for( var i = 0; i < elements.length; i++ ) {
		
			var elem = elements[ i ];
			covers.addCover( elem );
					
		}
				
		for( var i = 0; i < elements2.length; i++ ) {
		
			var elem = elements2[ i ];
			covers.addCover( elem );
					
		}
	
	},
		
	addCover: function( element ) {
	
		var fromTop =	element.offsetTop	+ "px";
		var fromLeft =	element.offsetLeft	+ "px";
		var height =	element.offsetHeight+ "px";
		var width =		element.offsetWidth	+ "px";
		
		var cover = document.createElement( "div" );
		cover.style.position =	"absolute";
		cover.style.top =		fromTop;
		cover.style.left =		fromLeft;
		cover.style.display =	"block";
		cover.style.height =	height;
		cover.style.width =		width;
		
		cover.addEventListener( 'click', function() { covers.hideLayover( cover, element ) }, false );
		element.addEventListener( 'focus', function() { covers.hideLayover( cover, element ) }, true );
		
		document.body.appendChild( cover );
		
	},
	
	hideLayover: function( layoverElement, inputElement ) {
	
		layoverElement.style.display = "none";
		inputElement.focus();
		
		inputElement.addEventListener( 'blur', function() { covers.showLayover( layoverElement ) }, false );
	
	},
	
	showLayover: function( layoverElement ) {
	
		layoverElement.style.display = "block";
	
	}
	
}
