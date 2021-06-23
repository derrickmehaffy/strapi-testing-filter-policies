# Strapi pre-filtering example

This application is used to show two different methods for more complex draft workflows, the logic is very basic but could be modified for more advanced options.

There are two sets of models:

- A basic `article` model that has an enum to set it's "status", these status values cannot be modified in production but provide a very simple model structure
- A more complex `alternative-article` model as well as a `status` model that have a oneWay relationship. This allows for the status model to be used in other models but provide more flexibility on adjusting the status values in production.

## Policies

Included are two sample policies that effectively do the same thing but are slightly modified to allow for the relation in the complex example.

- [basic policy](./config/policies/defaultStatus.js) => This policy simple checks there is no `status` filter supplied and applies a default for `production` else if a filter is applied then that filter is used.
- [advanced policy](./config/policies/altDefaultStatus.js) => This policy is a bit more advanced as it's filtering on a nested relation value (in this case the UID) but does the same thing as the basic policy.

## Applying the policies

### REST

For REST these are applied in the `routes.json` for each model:

- [The basic article model](./api/article/config/routes.json) => applied from a global level
- [The advanced alt article model](./api/alternative-article/config/routes.json) => also applied from a global level

### GraphQL

For GraphQL, the schemas must be modified to include the policy:

- [basic](./api/article/config/schema.graphql.js)
- [advanced](./api/alternative-article/config/schema.graphql.js)
