# Second lecture hometask

In this task you should create nodejs express https server. 
To understand your task, please read the text below.

## Motivation

Let's create something real and useful.
This application is inspired by the site [tokyodev](https://www.tokyodev.com/) - the way how software engineers can help each other to find a position in Japan.


## Technical requirements

API client is required to test this application.
Please install app (Postman, Insomnia etc.) on your computer.

Do not forget to install required dependencies to package.json file.
Use npm libraries such as 'sendmail', 'nodemailer' etc. to send mails to applicants.

_**Note:** If you select library with required auth, do not store your email and password in the code._ 
_Use placeholders instead: e.g. '\<email>', '\<password>'._

_You can investigate and add a logic to read passwords_
_from local `config(local).json(yaml) file` (e.g use npm library `conƒig` or do it on your own)_,
_but this is not required._


# Description

Everyone can post a position.

Everyone can be an applicant.

We keep only active positions

### Available values
>in case of PUT/POST requests and GET request with query string values with be coersed to available values

Available position categories: `nodejs`, `angular`, `javascript`, `react`.

Available position levels: `junior`, `middle`, `senior`.

Available position `japaneseRequired` values are: `true` (Japanese language required) and `false` (Japanese language not required).

Available applicant `japaneseKnowledge` values are: `true` (Japanese language is ok) and `false` (Japanese language is not ok).

### Subscription
Applicant will receive notifications (emails) about positions (new position added, existing position removed).

If an applicant has `"japaneseKnowledge": true`, he can receive notifications about positions with both  `"japaneseRequired": true` and `"japaneseRequired": false` properties.

If an applicant has `"japaneseKnowledge": false`, he can receive notifications about positions with `"japaneseRequired": false`.

#### Position added
Examples: 

(a) if an applicant has the following interests:

```json
{
    "categories": ["nodejs"],
    "level": "middle",
    "japaneseKnowledge": false
}
```
he will receive emails about new positions with:
 - `japaneseRequired: false`
 - `category: nodejs`
 - `level: middle`

(b) if an applicant has the following interests:

```json
{
    "japaneseKnowledge": true,
    "categories": ["nodejs", "react"],
    "level": "senior"
}
```
he will receive emails about new positions with:
- `category: nodejs` or `category: react` 
- `"japaneseRequired": true` or `"japaneseRequired": false`,
 - `level: senior`


#### Position removed

Examples:

(a) if the following position is removed:
```json 
{
    "category": "nodejs",
    "level": "senior",
    ...
    "japaneseRequired": true
}
```

Applicants with (1) `nodejs` in list of categories and (2) level = `senior`  and (3) with `"japaneseKnowledge": true` will be notified.


(b) if the following position is removed:
```json 
{
    "category": "angular",
    "level": "junior",
    ...
    "japaneseRequired": false
}
```

Applicants with (1) `angular` in list of categories and (2) level = `junior` 
and (3.1) with `"japaneseKnowledge": true` or (3.2) with `"japaneseKnowledge": false` will be notified


---
# API
# Positions


## GET /positions - Get list of all available positions in Japan

### Request
Query parameter:
- `category` - filter positions by category (will be coersed to available categories)
- `level` - filter positions by lever
- `tag` - free search in description


Examples:

(1) _GET /positions?category=nodejs&level=middle&tag=relocation_ - get positions, filtered by category, level and tag

(2) _GET /positions?level=middle_ - get positions, filtered by level (no checks for tag and category required)

(3) _GET /positions_ - just return all positions


### Response
Success Code _"200 OK"_

Body = ```Position[]```
___
## GET /positions/{position_id} - Get position details by id
### Request
Example: 
_GET /positions/1_
### Response 
Success Code _"200 OK"_

Response Body = ```Position[]```
___
## POST /positions - Create a new opened position
### Request

Body = ```PositionToAdd```

Example:

_POST /positions_

```json
{
    "category": "nodejs",
    "level": "middle",
    "company": "Rakuten",
    "description": "We are looking for people who are flexible and highly skilled, with an interest in languages and other cultures. We are open to overseas candidates looking to relocate to Japan.",
    "japaneseRequired": false
}
```

### Response
Success Code *"201 Created"*. "id" in location

___
## PATCH /positions/{position_id} - Update a position (OPTIONAL)
>Unlike PUT method, PATCH method applies a partial update to the resource.

### Request
Body = ```PositionToPatch```

Example:

_PATCH /positions/1_

```json
{
    "japaneseRequired": true
}
```
### Response
Success Code: *200 OK*

___
## DELETE /positions/{position_id} - Close position and delete
### Request
Example: 
_DELETE /positions/1_
### Response
Success Code: *"204 No Content"*

___
___

# Applications
## POST /applicants - Create a new application
### Request
Body = ```ApplicantToAdd```

Example:

_POST /applicants_
```json
{
    "email": "you.mail@mail.run",
    "categories": ["react", "angular"],
    "level": "middle"
}
```

### Response
Success Code *"201 Created"*. "id" in location

___
## PUT /applicants/{applicant_id} - Update an application
Body = ```ApplicantToSet```
>PUT is a method of modifying resource where the client sends data that updates the entire resource

Example:

_PUT /applicants/1_
```json
{
    "email": "you.mail@mail.run",
    "categories": ["react", "angular"],
    "japaneseKnowledge": true,
    "level": "middle"
}
```

### Response
Success Code *"200 OK"*.

___
## DELETE /applicants/{applicant_id} - Delete an applicant
### Request
Example:
_DELETE /applicants/1_
### Response
Success Code: *"204 No Content"*

___
# Contracts
NOTE: if property marked as '?' - this property is not required
### Position
```ts
type Position = {
    category: string,
    level: string,
    company: string,
    description?: string,
    japaneseRequired: boolean
}
```


### PositionToAdd
```ts
type PositionToAdd = {
    category: string,
    level: string,
    company: string,
    description?: string,
    japaneseRequired: boolean
}
```

### PositionToPatch

```ts
type PositionToPatch = {
    japaneseRequired?: boolean,
    description?: string
}
```

### Applicant
```ts
type Application = {
    email: sting,
    categories: string[],
    japaneseKnowledge: boolean,
    level: string
}
```

### ApplicantToAdd
```ts
type ApplicationToAdd = {
    email: sting,
    categories: string[],
    japaneseKnowledge: boolean,
    level: string
}
```

### ApplicantToSet
```ts
type ApplicationToSet = {
    email: sting,
    categories: string[],
    japaneseKnowledge: boolean,
    level: string
}
```