//Haha, I bet you thought there would be more code to this didn't you? Nope

var addition = "[PropsPlus]";

var typeofSupported = ["string", "number", "boolean", "object"]; //Values supported out-of-the-box

function setProperty(identifier, valueOf) {
	Ti.API.info("Set "+identifier+" to "+valueOf);
	Ti.App.Properties.setObject(identifier + addition, {
		value : (typeofSupported.indexOf( typeof valueOf) != -1 ? valueOf : valueOf.toString()),
		type : typeof valueOf
	});
	return valueOf;
}

function getProperty(identifier, type) {
	if (Ti.App.Properties.hasProperty(identifier + addition)) {
		if(Ti.App.Properties.getObject(identifier+addition).type!="function"){
			return Ti.App.Properties.getObject(identifier+addition).value;
		}else{
			var funcAsString = Ti.App.Properties.getObject(identifier+addition).value;
			var fixedString = funcAsString.replace(funcAsString.split("(")[0], "function()");
			eval("var func = "+fixedString);
			return func;
		}
	} else {
		return undefined;
	}
}

function hasProperty(identifier) {
	return Ti.App.Properties.hasProperty(identifier + addition);
}

exports = {
	setProperty : setProperty,
	getProperty : getProperty,
	hasProperty : hasProperty
};
