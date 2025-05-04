## AOI COMPONENTS V2
> Bringing **Discord Components V2** into the world of aoi.js!

### Introduction 

This package add extra functions to aoi.js allowing users to use components V2 of discord. 

> [!CAUTION]
> Using functions like `$addButton` instead of `$addButtonComponent` and the likes won't work for this package's `$sendComponent`. Basically it's better not to use any aoi.js functions inside it, except the database ones. 
>
> Also all these functions here would use the **JSON structure of API** and hence it's possible to directly supply the JSON but beware that any error in JSON will end up with `Discord API Error` as error handling is left to them to ease my work. 

### Functions

#### `$addButtonComponent`

##### Syntax

```
$addButtonComponent[label?;style;customId?;disabled?;emoji?;url?]
```

##### Options

| Option | Description | Required | Default |
| ----- | ----- | ----- | ----- |
| label | The text inside the button | false (if emoji is there), else true | No Value |
| style | Style of Button: PRIMARY, SECONDARY, DANGER, SUCCESS, LINK | true | No Value |
| customId | Custom ID for button | false (if URL)  else true | No Value |
| disabled | Is button Disabled? false or true | false | false |
| emoji | Emoji inside button | false | No Value |
| URL | URL if style of button is URL | true (if URL button) else false | No Value |