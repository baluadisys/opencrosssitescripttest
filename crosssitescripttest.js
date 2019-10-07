$( document ).ready(function() {
    console.log( "ready!" );
    alert('cross site scripting');
    
    var classname = document.getElementsByClassName("glyphicon glyphicon-floppy-saved");
	
	var myFunction = function() {
				var attribute = this.getAttribute("data-myattribute");
				alert(attribute);
				
				var ele = document.getElementsByTagName('input');

				// LOOP THROUGH EACH ELEMENT.
				for (i = 0; i < ele.length; i++) {

					// CHECK THE ELEMENT TYPE.
					if (ele[i].type == 'text') {
						console.log('Value: ' + ele[i].value);

						for (j = 0; j < ele[i].attributes.length; j++) {
							console.log(ele[i].attributes[j]);
						}
					}

				};
	};

	for (var i = 0; i < classname.length; i++) {
		classname[i].addEventListener('click', myFunction, false);
	}


}
