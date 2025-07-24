# Handling Form Actions

Is natively supported in React19. It is a in built approach for handling form data in contrast to custom submission handling.
It supports extracting form values and manages them in a stateful way.

## Form Actions by using th `action` attribute on a form element
- are different to the default action that can be set on a `<form>` tag, who are used to target the path on the server.
- React will overwrite the default action and instead use a custom action handler which then gets `formData` as an argument.
- this argument then contains all the form values and can be used to process the form data by the name of the inputs.


## useActionState()
- is a hook that can be used to manage the state of the form action.
- takes an initial value (before the form is submitted) and the action function as arguments
- returns the current state of the form (initial value before submit, an updated version after submit...), the updated action function and a pending state (used for async actions)
- your action function now also has access to a ``prevState`` of the action as an argument


- useActionState is typically used to:
  - display loading states
  - display error messages
  - display success messages

## useOptimistic()
- is a hook that can be used to change the state of a value of a form before the action is completed (evaluated by the backend e.g.)
- takes the initial form value and a function that has the previousValue and a dispatch keyword as arguments
- returns the optimisticValue and a dispatch function (like useState)
- the optimistic Value is replaced by the final value once the action is completed

## useFormStatus()
- is a hook that can be used to manage the status of a form
- can only be used inside a subcomponent inside a form
- returns the current status of the form (idle, submitting, error, success) and a formId that can be used to identify the form