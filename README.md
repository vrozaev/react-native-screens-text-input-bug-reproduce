
This repository demonstrates issue with TextInput and react-native-screens.

For reproduce run:

`yarn install && yarn start` and `yarn android` in second tab.

What's going on:

1. Open `HomeScreen` with `TextInput`.
2. Redirect to `SecondScreen`.
3. Redirect back to `HomeScreen` and in the same time reset value of `TextInput`.

Expected behavior: input value should be changed.

Actual behavior: input value is not changed.

More information:
1. If you comment line `useScreens();` then everything will work.
2. Check console logs. You can see that `handleOnChangeText` once more more than it should (it's called `'Initial value'` string).
