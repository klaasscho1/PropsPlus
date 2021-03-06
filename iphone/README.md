PropsPlus
=========

This CommonJS module enables you to create Titanium Properties with less code, and more options like saving a function as a property.

###TODO:
- List properties
- Save circular objects as property

#Commands

##.setProperty(identifier, value)

Creates a property with a value that can be accessed by ```.getProperty()```, value can be of the following types:

- String (like ```Ti.App.Properties.setString```)
- Number (like ```Ti.App.Properties.setInt``` or ```Ti.App.Properties.setDouble```)
- Array (like ```Ti.App.Properties.setList```)
- Object (like ```Ti.App.Properties.setObject```)
- Function (not in standard SDK)

```javascript
PropsPlus.setProperty("function", function(){
  alert("Hello world!")
});
```

##.getProperty(identifier)

Returns the value of the property identified by the given identifier, returns ```undefined``` if property doesn't exists

```javascript
var func = PropsPlus.getProperty("function");
func(); //alerts "Hello world!" (see previous command)
```

##.hasProperty(identifier)

Returns ```true``` if property exists or ```false``` if it doesn't (same as ```Ti.App.Properties.hasProperty```)

```javascript
var propExists = PropsPlus.hasProperty("function");
Ti.API.info("Does property exist: "+propExists); //true
```

#Comparison

##Saving a function as a property

```javascript
var testFunction = function(){
  Ti.API.info("Hello World!");
}


//---Standard SDK

//Set

var setFunctionAsString = testFunction.toString();
Ti.App.Properties.setString("function", functionAsString);

//Get

var getFunctionAsString = Ti.App.Properties.getString("function");
eval("var backToFunction = "+getFunctionAsString);
backToFunction(); // "Hello World!"


//---PropsPlus

//Set

PropsPlus.setProperty("function", testFunction);

//Get

var backToFunction = PropsPlus.getProperty("function");
backToFunction(); // "Hello World!"

```
##Save property as integer if it has no decimals, and as double if it does
```javascript
var numberInt = 1;
var numberDouble = 2.32;


//---Standard SDK

//Set

function saveNumber(name, number){
  if(number%1==0){
    Ti.App.Properties.setInt(name, number);
  }else{
    Ti.App.Properties.setDouble(name, number);
  }
}

saveNumber("int", numberInt);
saveNumber("double", numberDouble);

//Get

//You are unable to get the property back in the standard SDK unless you know if it is an Int or a Double


//---PropsPlus

//Set

PropsPlus.setProperty("int", numberInt);
PropsPlus.setProperty("double", numberDouble);

//Get

PropsPlus.getProperty("int"); //1
PropsPlus.getProperty("double"); //2.32
```

#Examples

##Save a view as a property:

```javascript
var win = Ti.UI.createWindow();

PropsPlus.setProperty("blackSquare", function(){
  return Ti.UI.createView({
    height: 100,
    width: 100,
    backgroundColor: "black"
  });
});

win.add(PropsPlus.getProperty("blackSquare"));

win.open();
```
