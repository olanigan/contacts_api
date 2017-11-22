## Overview

This is a RESTful API endpoint for contacts built on Node.js, Express, Sequelize and Sqlite.

## API Specifications

### List all contacts

Returns a list of contacts

```

GET /contacts/

```

### Create contact

create new contact

```

POST /contacts/

```

**Body**

<table>
    <tr>
        <th>Name</th>
        <th>Required</th>
    </tr>
    <tr>
        <td>first_name</td>
        <td>yes</td>
    </tr>
    <tr>
        <td>last_name</td>
        <td>yes</td>
    </tr>
    <tr>
        <td>phone</td>
        <td>no</td>
    </tr>
    <tr>
        <td>email</td>
        <td>no</td>
    </tr>
</table>

### Retrieve contact

Retrieve existing contact by ID

```

GET /contacts/:contactId

```

**Parameters**

<table>
    <tr>
        <th>Name</th>
        <th>Datatype</th>
    </tr>
    <tr>
        <td>contactId</td>
        <td>INTEGER</td>
    </tr>
</table>

### Update contact

Update existing contact

```

PUT /contacts/:contactId

```

**Body**

<table>
    <tr>
        <th>Name</th>
        <th>Required</th>
    </tr>
    <tr>
        <td>first_name</td>
        <td>optional but one field is required</td>
    </tr>
    <tr>
        <td>last_name</td>
        <td>optional but one field is required</td>
    </tr>
    <tr>
        <td>phone</td>
        <td>optional but one field is required</td>
    </tr>
    <tr>
        <td>email</td>
        <td>optional but one field is requiredno</td>
    </tr>
</table>

#### Delete contact

Delete existing contact by ID

```

DELETE /contacts/:contactId

```

**Parameters**

<table>
    <tr>
        <th>Name</th>
        <th>Datatype</th>
    </tr>
    <tr>
        <td>contactId</td>
        <td>INTEGER</td>
    </tr>
</table>
