PropsPlus
=========

This CommonJS module enables you to create Titanium Properties with less code, and more options like saving a function as a property.

##Commands

#.setProperty(identifier, value)
Creates a property with a value that can be accessed by .getProperty(), value can be of the following types:

- String (like Ti.App.Properties.setString)
- Number (like Ti.App.Properties.setInt or Ti.App.Properties.setDouble)
- Array (like Ti.App.Properties.setList)
- Object (like Ti.App.Properties.setObject)
- Function (not in standard SDK)

