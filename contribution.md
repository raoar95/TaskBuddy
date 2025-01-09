# `TaskBuddy Contribution Guidelines`

<!-- prettier-ignore -->
**_Welcome to TaskBuddy 😊!_**

`Please Review the Guidelines Carefully Before Making a Contribution.`<br><br>

## 👉 `File Import Sequence`

`When Importing Files, Always Follow this Sequence:`

```ts
/** 1. core libraries & installed libraries */

/** 2. user defined component */

/** 3. services (apis) */

/** 4. query & context */

/** 5. custom hooks */

/** 6. utils */

/** 8. style */

/** 7. fonts & assets */

/** 8. interfaces */
```

### 👉 `EXAMPLE:`

```ts
/** core libraries & installed libraries */
import React from "react";

/** user defined component */
import Home from "./home/Home";
import About from "../about/About";
import Contact from "../../contact/Contact";

/** services */
import { logout } from "../../services/api";

/** query & context */
import { useQuery } from "react-query"; // Query
import { UserContext } from "../../path/to/contexts"; // Context

/** custom hooks */
import useFetch from "../../hooks/useFetch";

/** utils */
import { formatCurrency } from "../../utils/formatters";

/** fonts & assets */
import "./fonts/Roboto-Regular.ttf"; // Fonts
import logo from "../../assets/path/to/logo.png"; // Logo File (Image Assets)
import { FaCalendarCheck } from "react-icons/fa"; // React Icons (Icon Assets)

/** style */
import "./home.css";

/** interfaces */
import type { IUser } from "../../path/to/user-interface";
```

<br>

## 👉 `Code Structure`

`The Structure of Code must be followed in a Following Sequence.`

```ts
// All Imports
import React, { useState, useEffect } from "react";

// Global Variables
const someVariable = "";

const MyComponent = () => {
  // 1. useState
  const [count, setCount] = useState(0);

  // 2. Variables
  const someVariable = "";

  // 3. useEffect
  useEffect(() => {
    fetchData();

    return () => {
      cleanUp();
    };
  }, []);

  // 4. Functions
  const fetchData = async () => {
    try {
      const response = await fetch("https://api.example.com/data");
      const data = await response.json();
      // Process data
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const cleanUp = () => {
    // Cleanup code
  };

  // 5. Return Component
  return (
    <IonPage>
      <IonContent>
        <div>
          <h1>Count: {count}</h1>
          <button onClick={incrementCount}>Increment</button>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default MyComponent;
```

<br>

## 👉 `File Directory Import Sequence`

`The Import Sequence for File Directories Should be as Follows:`

```js
1. Same Folder
2. Parent of Current Directory
3. Parent of Parent Directory, and so on.
```

### 👉 `EXAMPLE:`

```ts
import something from "./filename.tsx"; // Same Folder
import something from "../filename.tsx"; // Parent of Current Directory
import something from "../../filename.tsx"; // Parent of Parent Directory
```

<br>

## 👉 `File Naming Conventions`

## `1. Folders`

All folders inside the `src` folder, must follow these conventions:

- **`Single Word:`** The `Folder Name` must be in `Lowercase`.
- **`Multiple Words:`** The `Folder Name` must be in `camelCase`.

### 👉 `EXAMPLE:`

```js
// home
// aboutUs
// contactForm
```

<br>

## `2. Screens`

`In App, We use` `Screens` `Instead of Page Folder`

`All Files Inside the` `Screens Folder`, `Must follow these Conventions`

- **`Name:`** ` Last word of name` must be `Screen`.
- **`Single / Multiple Word:`** The `folder Name` must be in `pascal case`.
- **`Extension:`** `Extension` must be `.tsx`.

### 👉 `EXAMPLE:`

```ts
// HomeScreen.tsx
// AboutScreen.tsx
// ProductScreen.tsx
```

<br>

## `3. Components`

`All Files` inside the `components / protectedRoutes / provider Folder`, Must be Named in `PascalCase`

The `Extension` must be `.tsx`.

### 👉 `EXAMPLE:`

```ts
// Dashboard.tsx
// CreateProduct.tsx
// UpdateProduct.tsx
```

<br>

## `4. Services / Interface / Utils`

`All Files` inside the `services / interface / utils Folder`, Must follow these Conventions.

- **`Single Word:`** The `File Name` must be in `lowercase`.
- **`Multiple Words:`** The `File Name` must be in`camelCase`.
- **`Extension:`** `Extension` must be `.ts`.

### 👉 `EXAMPLE:`

```ts
// auth.ts
// user.ts
// calculate.ts
```

<br>

## `5. Custom HooK`

`All Files` inside the `hooK Folder`, Must follow these Conventions:

- **`Single Word:`** The `Folder Name` must be in `Lowercase`.
- **`Multiple Words:`** The `Folder Name` must be in `camelCase`.
- **`Extension:`** `Extension` must be `.tsx`.

### 👉 `EXAMPLE:`

```ts
// useMultiStepForm.tsx
// useReactQuery.tsx
```

<br>

## `6. Context`

`All Files` inside the `contexts Folder`, Must follow these Conventions:

- **`Single Word:`** The `File Name` must be in `lowercase`.
- **`Multiple Words:`** The `File Name` must be in`camelCase`.
- **`Extension:`** `Extension` must be `.context.tsx`.

### 👉 `EXAMPLE:`

```ts
// sidebar.context.tsx
// productData.context.tsx
```

<br/>

## 👉 `Variable Naming Convention`

`Normal variables` are `Simply Declared` using `let, or const` `Depending on the Scope and Mutability Requirements`.

<br/>

## 👉 `Interface Naming Convention`

The `Interface Names` should `Start with an I` to `Distinguish it From Classes and Other Types`.

### 👉 `EXAMPLE:`

```ts
// IUser
// IRepository
```

<br/>

## 👉 `Function Naming Convention`

### `1. Function For Getting Data`

`Functions Used to Get Service or Data that Needs to be Fetched`.

- **`Prefix:`** `get`
- **`Suffix:`** `Service Name`

### 👉 `EXAMPLE:`

```ts
// getUserData()
// getSellerData()
```

### `2. Handle Function used to Perform a Task`

`Handler Functions can be Used to Handle Task Like Creating, Updating, Deleting, and so on`.

- **`Prefix:`** `handle`
- **`Suffix:`** `Service Name`

### 👉 `EXAMPLE:`

```ts
// handleCreateUser()
// handleOnSubmit()
```

<br/>

## 👉 `CSS Class & Id Naming Convention`

The `CSS class` should be in `lowercase` with `Each Words Separated by Underscore` and `Id` should be in `camelCase`.

### 👉 `EXAMPLE:`

```ts
/*================
👉 Class Example:
================*/

// singleWord
// multiple_words     // lowercase and underscore

/*=============
👉 Id Example:
==============*/

// singleWord
// multipleWords      // camelCase
```

<br/>

## 👉 ` Better Comments`

`Use Proper Comment Techniques to Comment`.
<br/><br/>
<img src="https://raw.githubusercontent.com/aaron-bond/better-comments/084a906e73a3ca96d5319441714be8e3a2a8c385/images/better-comments.PNG" alt="better-comments">
<br/>
