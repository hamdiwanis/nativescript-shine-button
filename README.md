<h1 align="center">
     NativeScript Shine Button<br/><br/>
<img src="https://github.com/hamdiwanis/nativescript-shine-button/raw/master/screenshots/demo.gif" height="364px" />
</h1>

> Note: This Plugin based on [WCLShineButton for IOS](https://github.com/imwcl/WCLShineButton) and [ShineButton for Android](https://github.com/ChadCSong/ShineButton) .

## Installation
```bash
tns plugin add nativescript-shine-button
```

### Usage
```html
<Page xmlns="http://schemas.nativescript.org/tns.xsd" class="page" xmlns:ui="nativescript-shine-button">
     <ui:ShineButton height="80" width="80" src="customicon" color="gray" fillColor="red">
</Page>
```

see the demo project for more info.

## Angular

Add this to app.module.ts so you can use a ShineButton tag in the view:

```
import { registerElement } from "nativescript-angular";
registerElement("ShineButton", () => require("nativescript-shine-button").ShineButton);
```

## API

| **Property**            | **Description**                          |
| ----------------------- | ---------------------------------------- |
| `src`                   | button image (png)                       |
| `color`                 | Default button color                     |
| `fillColor`             | Fill button color                        |
| `allowRandomColor`      | Allow shine color random                 |
| `animDuration`          | shine anim duration in sec               |
| `bigShineColor`         | big shine color                          |
| `enableFlashing`        | Enable effect like flash                 |
| `shineCount`            | shine count around button                |
| `shineTurnAngle`        | turn angle of shine                      |
| `shineDistanceMultiple` | multiple of distance to button           |
| `smallShineOffsetAngle` | angle offset of small shine to big shine |
| `smallShineColor`       | small shine color                        |
| `shineSize`             | size of shine by pixel                   |
## Next
- [ ] adjust the properties to be more consistent on android and ios.

## Contribute
if you want to help improve the plugin you can consider it yours and make as PRs as you want :)

## Get Help
Please, use [github issues](https://github.com/hamdiwanis/nativescript-shine-button/issues) strictly for [reporting bugs](CONTRIBUTING.md#reporting-bugs) or [requesting features](CONTRIBUTING.md#requesting-new-features).

## Contact
Twitter: [hamdiwanis](https://twitter.com/hamdiwanis)  \
Email: hamdiwanis@hotmail.com
