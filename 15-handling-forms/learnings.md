# Section 17: Working with Forms & User Input

## Handling Submissions
via:
- state
- refs
- FormData API of the browser
By default any button acts as a submit button that sends a HTTP request to the server.

The best way to prevent default behaviour, and executing your own validation before submitting, is to use the `onSubmit` event handler on the form element and call `event.preventDefault()`.

## Validation is the tricky part
Especially presenting a good UX when handling errors:
- every keystroke -> error too early
- on lost focus -> errors shown for too kong
- on submit -> errors shown too late