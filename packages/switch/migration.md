# Migration Notes

## Changes

- Support for the `color` prop has been deprecated. Use `colorScheme` prop
  instead.

For example, `<Switch colorScheme="brand"/>`

```jsx
// before
<Switch color="blue"/>

// after
<Switch colorScheme="brand"/>
```
