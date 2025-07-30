# Section 19: Practice Project

You managed to build a running version of the project - thats good work!

## Here is what can be improved:

- instead of using one big context, it would be better to create multiple contexts that describe a certain purpose.
- instead of using 2 fetch implementations at the needed spots, you could create 1 `ùseHTTP(url, config)` hook. This hook then could export `{isError, isLoading, data, sendRequest()}`.
- the hook could be configured to use ``GET`` by default and automatically switch to ``POST``as soon as a non empty configuration object is set. That way, the post-sending method can be exported and callled in the place where the customer data is grabbed.

- instead of using many ``formData.get()`` use `Òbject.fromEntries(formData.entries)` to resolve all named inputs in a constant
- use custom ``<Input>`` component for the inputs