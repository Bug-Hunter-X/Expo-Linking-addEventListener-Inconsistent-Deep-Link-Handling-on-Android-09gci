While using Expo's `Linking` API to handle deep links, I encountered an issue where the `Linking.addEventListener` callback wasn't consistently firing on Android.  The event listener would sometimes miss deep link intents, leading to unexpected behavior in my app.  This was intermittent and difficult to reproduce reliably, but happened frequently enough to cause major problems.