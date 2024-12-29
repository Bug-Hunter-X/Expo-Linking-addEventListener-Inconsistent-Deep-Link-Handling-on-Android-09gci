# Expo Linking.addEventListener Inconsistent Deep Link Handling on Android

This repository demonstrates an uncommon bug encountered while using Expo's `Linking` API to handle deep links on Android. The `Linking.addEventListener` callback intermittently fails to fire when receiving deep link intents.

## Problem Description

The issue lies in the unreliability of the `Linking.addEventListener` method on Android.  Deep links are sometimes successfully handled, but at other times, the event listener simply doesn't trigger, resulting in the app not responding to the external link. This issue makes it difficult to build a robust deep linking system.

## Reproduction Steps

1. Clone the repository.
2. Run `npm install` or `yarn install`.
3. Run the app on an Android emulator or device.
4. Try opening a deep link that should trigger the event listener.  Observe that it is not always successful.

## Solution

The provided `bugSolution.js` file demonstrates a workaround. While the underlying cause is unknown, the solution uses a combination of `Linking.getInitialURL` to handle initial links when the app starts, and using a timeout for the `Linking.addEventListener` to make it more resilient. This solution is not perfect and might still miss some links in certain cases but improves the reliability of the deep link handling significantly.

## Note

This bug seems to be related to Android's background process management and potentially inconsistent intent delivery.  It is recommended to test thoroughly on various Android devices and versions.
