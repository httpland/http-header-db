# http-header-db

This is a large database of http header field and information about them.

Data from the following sources:

- <https://www.iana.org/assignments/http-fields/http-fields.xml>

## Packages

The package supports multiple platforms.

- deno.land/x - `https://deno.land/x/http_header_db@$VERSION`
- npm - `http-header-db`

## Usage

```ts
import { default as db } from "https://deno.land/x/http_header_db/db.json" assert { type: "json" };

db["content-type"];
```

## Data Structure

The JSON file is a map lookup for lowercased header field names. Each field has
the following properties:

| Name     | Description                                                                                                                                                               |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| listable | Whether the field allows multiple members or not. <br>This is synonymous with [RFC9110, 5.5, list-based fields](https://www.rfc-editor.org/rfc/rfc9110.html#section-5.5). |

## License

Copyright © 2022-present [httpland](https://github.com/httpland).

Released under the [MIT](./LICENSE) license

This project is strongly inspired by the
[mime-db](https://github.com/jshttp/mime-db)
