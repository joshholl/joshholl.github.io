---
creation-date: 2023-02-03T22:38:00
modification-date: 2023-07-21 08:49
type: note
publish: "true"
parent: "[[Data Engineering#Theory]]"
title: Unstructured Data
---
## Defining Unstructured Data

Unstructured data is any data that has the following characteristics:
- No predefined structures
- No explicit data types
- No labels, fields, or other ways to annotate specific datum

> [!caution] 
> Unstructured data is historically hard to process. Ideally you will have some specialized tooling in place that can process the unstructured data then store the resulting information in a [structured](../../../Structured%20Data.md) or [semi-structured](../../../Semi%20Structured%20Data.md) manner

## Examples

- Videos
- Images
- Audio Files
- Large free text files

## Storage

Typically unstructured data should just live in a file system or an [Object Store](Object%20Store.md)