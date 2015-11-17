# Mongo | Day 2 | mongoose

## Overview
+ Day 1 -- CRUD w/ MongoJS
+ Day 2 -- Modeling w/ Mongoose
+ Day 3 -- Data Structures && Strategy

## Review
+ Quiz
+ Landscape
+ CRUD
  + general groupings for action definitions
  + comparison to MongoJS methods
+ Creating/Using A Controller
+ Documents DB Attributes
  + flexible properties (vs column creation)
  + loosely typed values (vs column data_type validation)

## Mongoose vs MongoJS Theory
+ Why/How Mongoose Adds:
  + Validations
  + Data_Types
  + Prototypical Functions
  + Code Management (chaining callbacks/promises)
+ Quiz

## Mongoose Lifecycle
+ Briefly Outline Use Case Using Prototype Discussion Above
  + Model
    1. Schema Defined -- Configuration For A Document Constructor
    2. Model Created -- Document Constructor
  + Request/Response
    1. Document||Query Instance Building
    2. Document||Query Pre Middleware Runs (explained later)
    3. Document||Query Request Sent To Mongo
    4. Document||Query Response Returned To Mongo
    5. Document||Query Post Middleware Runs (explained later)
    6. Callback/Promise invoked
+ Quiz

## Schemas
+ define the 'shape' of documents within
+ a schema is mapped to a collection
  + Data_Type
  + Validations
    + Required
  + Indexing
  + Unique
+ Quiz

## Models
+ fancy constructors compiled from schema definitions
+ instances of models represent documents

## CRUD w/ Mongoose
+ Documents
  + Build
    + Create a new instance of a Model by passing in a JS Object
  + Execution Methods
    + save
+ Queries
  + Run Methods
    + nearly every method except save
  + Building Methods
    + where
    + limit
    + sort
    + select
  + Execution Method
    + exec -- sends request && returns promise

### Middleware && Hooks
+ Inject functions to be run at certain points in the lifecycle for certain actions
+ Lifecycle Hooks
  + pre
  + post
+ Methods
  + save
  + remove
  + count
  + find
  + findOne
  + findOneAndRemove
  + findOneAndUpdate
  + update

## WARNING
+ Documents returned from Mongo are NOT plain objects!!!
  + Document\#toObject must be called for expected behavior

## Summary
+ I Mongo on vacation. Take luck.

## Credit
Some text taken from http://mongoosejs.com
