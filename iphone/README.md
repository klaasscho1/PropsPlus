PropsPlus
=========

This CommonJS module enables you to create Titanium Properties with less code, and more options like saving a function as a property.

#Commands

##.setProperty(identifier, value)

Creates a property with a value that can be accessed by .getProperty(), value can be of the following types:

- String (like Ti.App.Properties.setString)
- Number (like Ti.App.Properties.setInt or Ti.App.Properties.setDouble)
- Array (like Ti.App.Properties.setList)
- Object (like Ti.App.Properties.setObject)
- Function (not in standard SDK)

```javascript
PropsPlus.setProperty("function", function(){
  alert("Hello world!")
});
```

##.getProperty(identifier)

Returns the value of the property identified by the given identifier, if property doesn't exist it returns ```javascript undefined```

```javascript
var func = PropsPlus.getProperty("function");
func(); //alerts "Hello world!" (see previous command)
```

##.hasProperty(identifier)

R
