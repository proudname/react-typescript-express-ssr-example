---
inject: true
to: src/core/features/reducers.ts
after: <inject:reducer-type>
before: </inject:reducer-type>
---
    <%= name %>: <%= h.capitalize(name) %>ReducerType