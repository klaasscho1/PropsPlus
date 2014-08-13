var PropsPlus = require("com.studiokapps.propsplus");

var win = Ti.UI.createWindow({
	backgroundColor : "white"
});

PropsPlus.setProperty("String", "Test String");

PropsPlus.setProperty("Number1", 213);

PropsPlus.setProperty("Number2", 18.5);

PropsPlus.setProperty("Object", {
	name : "value"
});

PropsPlus.setProperty("Array", ["1", 2, "3"]);

PropsPlus.setProperty("Function", function(){
	Ti.API.info("Hello world from PropsPlus function!");
	return Ti.UI.createView({
		backgroundColor: "black",
		height: 100,
		width: 100
	});
});



//STRING

var string = PropsPlus.getProperty("String");

Ti.API.info("String property: " + string);



//NUMBER

var number1 = PropsPlus.getProperty("Number1");

var number2 = PropsPlus.getProperty("Number2");

Ti.API.info(number1 + " + " + number2 + " = "+(number1 + number2));



//OBJECT

var object = PropsPlus.getProperty("Object");

Ti.API.info("Value of object.name: " + object.name);



//ARRAY

var array = PropsPlus.getProperty("Array");

for ( i = 0; i < array.length; i++) {
	Ti.API.info("Value "+i+" of Array: "+array[i]);
}



//FUNCTION

var func = PropsPlus.getProperty("Function");



win.add(func());

win.open();
