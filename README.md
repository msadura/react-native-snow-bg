# react-native-snow-bg
React Native animated snow background theme. Snowlakes have randomized style - look, opacity, size and position and custom animation - fall, rotation and "shake" movement from left to right.

It can be used for ios and android as nice winter theme addition!

# Usage
Install module:
```
npm install --save react-native-snow-bg
```

or

```
yarn add react-native-snow-bg
```

Import Snow component in your app:
```
import Snow from 'react-native-snow-bg';
```

Add it to any View in you app:
```
export default function App() {
  return (
    <View>
      ...
      <Snow />
    </View>
  );
}
```

# Snow props
| Props                | Type          | Description  | Default      |
| --------------------- |:-------------:| ------------ | ------------ |
| `snowflakesCount` | `Integer`     | How many snowflakes to render.      |`100` |
| `fallSpeed`  | `String<slow | medium | fast>`     | How fast snowflakes will fall.| `medium`         |
| `fullScreen`    | `Boolean`     | If `true` component will always take screen width and height. If `false` it will take 100% parent width and height. Usefult if  you want snow background to fill jsut a part of your screen.      | `false` |

# React Native Epicode Academy
This package is a part of [React Native Epicode Academy](https://www.youtube.com/channel/UCjeodJlopQe4b91Y-uS18Ow) YouTube series.