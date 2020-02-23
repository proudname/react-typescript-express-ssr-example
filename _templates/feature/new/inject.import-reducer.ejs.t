---
inject: true
to: src/core/features/reducers.ts
after: <inject:import>
before: </inject:import>
---
import { reducer as <%= name %>Reducer , <%= h.capitalize(name) %>ReducerType } from '../features/<%= name %>';