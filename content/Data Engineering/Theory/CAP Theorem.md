---
creation-date: 2022-11-11T04:32:34
modification-date: 2023-07-21T09:27:06
type: note
publish: "true"
parent: "[[Data Engineering#Theory]]"
title: CAP Theorem
---
CAP Theorem is the theorem that states that any distributed data store can on provide 2 of the three consistency guarantees, they are:

## C - Consistency
Every read will get the most recent write, or an error

## A - Availability

Every request receives a non error response but it may not have the most recent write

## P - Partition tolerance

The system will continue to operate despite messages being dropped or delayed between nodes

---
