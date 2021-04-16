# PremiumCalculator
This is a repo for a Coding Assignment.

## What is the programming challenge about?

### Challenge Context

An insurance company needs to calculate the Premium according to the data of the client.
A **Premium** is an amount paid by the insured periodically to cover health insurance.

### Challenge Result

For the **Back-End**:

- We are going to create a Web Service.
- We can use C# and .NET Core 3.0 (or greater).
- The Web Service needs to get 3 parameters:
  - Date of Birth
  - State
  - Age
- According to this payload, it needs to calculate the **Premium** using the following table:

| State | Month of Birth | Age   | Premium |
|:-----:|----------------|-------|---------|
| NY    | August         | 18-45 | 150.00  |
| NY    | January        | 46-65 | 200.50  |
| NY    | *              | 18-65 | 120.99  |
| AL    | November       | 18-65 | 85.50   |
| AL    | *              | 18-65 | 100.00  |
| AK    | December       | 65+   | 175.20  |
| AK    | December       | 18-64 | 125.16  |
| AK    | *              | 18-65 | 100.80  |
| *     | *              | 18-65 | 90.00   |

_Note: The " * " represents Wild Cards that matches anything within the context._

_For example: State " * " means any valid US state, Month of Birth " * " means any month._

- The **Age** and **Date of Birth** should be validated that they do match.
- The result provided should be in **JSON format* like this:

```json
{
   "premium": "123455.12"
}
```

For the **Front-End**:

- Create a Web App using HTML, CSS and Vanilla Javascript **(No Frameworks)**
- The Website should have the layout similar to this mockup:

![imagen](https://user-images.githubusercontent.com/21108071/115006583-aa8eab80-9e6e-11eb-91bc-42b0683858f1.png)

- This website will consume the web service created in the **Back-End** side.
- The result of the Web Service needs to be printed inside a **TextBox** in the page.
- There should be a **Drop Down** with frequencies:
  - **Monthly**: Means that the **Premium** is paid monthly.
  - **Quarterly**: Means that the **Premium** is paid every 3 months.
  - **Semi-Anually**: Means that the **Premium** is paid every 6 months.
  - **Annually**: Means that the **Premium** is paid annually.
- There should be 2 more **Text Box** to calculate the Monthly and Annual amount.
- The values need to be calculated automatically each time the **Drop Down** value changes.
- The **Age** should be auto-calculated based on the **Date of Birth**.
- The Fields should be validated before calculation.
- Disable the controls while the response has not been retrieved from the Web Service.
- Validate numeric entries on fields.
- Handle all possible exceptions when calculating values.

---

## Solution

### Applications Used

To code the Challenge I used:

- Visual Studio 2019
- Visual Studio Code
- Postman
- npm
- node.js

## Back-End

The project is structured into 6 sections:

- **Model**: Data structure
- **Application**: Classes that control the application.
- **Controllers**: Classes with our HTTP Requests.
- **wwwroot**: HTML file used when launching.
- **Properties**: Json file with our launch settings.
- **StartUp.cs**: .cs file that holds our program configuration.

The project also uses the following:

- **NuGET Packages**

### Model:

For the **Model** section, we have 1 class:

- **Calculator Data**: Class that contains the structure of data to Calculate the Premium.

### Application:

For the **Application** section, we have 2 classes.

- **Validator**: Class that has the logic to validate the Age.
- **Calculator**: Class that has the logic to calculate the Premium.

### Controllers:

For the **Controllers** section, we have 1 class.

- **PremiumController**: Class that has the HTTP Post Request to send the "Premium" value. It expects a JSON Object. The URL to call it is "https://localhost:44381/api/Premium".

As an example, for this to work the payload should be:

```json
{
  "birthDate": "1998-08-26",
  "state": "NY",
  "age": "22"
}
```

The response will have the following structure:

```json
{
  "premium": "90.00"
}
```

### wwwroot:

This folder contains an **index.html**. Its used when launching the API.

### Properties:

This folder contains **launchSettings.json**. In it, it will have the following:

```json
  "iisSettings": {
    "windowsAuthentication": false,
    "anonymousAuthentication": true,
    "iisExpress": {
      "applicationUrl": "http://localhost:54392",
      "sslPort": 44381
    }
  }
```

The Web API uses SSL, so the actual URL will be **"https://localhost:44381"**.

### StartUp.cs:

In here, we add a few things to the **ConfigureServices** method:

- Added CORS and Mvc services.
- Added NewtonsoftJson.

We also add a few more things to the **Configure** method:

- Added app.UseDefaultFiles() and app.UseStaticFiles() to use our **index.html** inside the **wwwroot** folder.
- Added app.UseCors() and app.UseMvc() to be compliant with CORS. In this case, we only allow this URL to use our API "http://localhost:3000".

### NuGet Packages:

This project uses the following packages:

- **Newtonsoft.Json**: JSON framework for .NET.
- **Microsoft.AspNetCore.Mvc.NewtonsoftJson**: Features input and output formatters for JSON.
- **Microsoft.AspNetCore.Cors**: CORS middleware and policy for ASP.NET Core.

## Front-End

The project is structured into 4 sections:

- **js files**:
- **css files**: 
- **html files**:
- **package.json**:

### Js files:

This project have the following javascript files:

  - **server.js**: Holds the logic to use "Express" and run the server on "http://localhost:3000/";
  - **main.js**: Hold the main script used by the .html file.
  - **validator.js**: Validates the values in the form.
  - **helper.js**: Varied functions to help the main script.
  - **events.js**: Functions used by the Event Listener of the different Elements.
  - **apiHandler.js**: Handles the API POST Request.
  - **toast.js**: Sets a custom message alert.

### css files:

This project uses 2 css files:

  - **style.css**: Holds the styling for our html.
  - **toast.css**: Holds the styling for the Toast custom message element.

### html files:

The project only uses the **index.html** file. Here, we have 3 sections:

  - **Title**: Title of the Page
  - **Form**: Holds the values that are validated and then used for our HTTP POST Request.
  - **results**: Hold the output values that are calculated automatically (**Premium**).
  
### package.json:

Here in this file, we have 2 sections worth mentioning:

  - **scripts**: It now holds a "serve" script to launch **Express**.
  - **dependencies**: As stated, we are using **Express** to serve our application.

---

## Issues

### Firefox

The web app gets the response correctly using:

- Google Chrome
- Microsoft Edge

Unfortunately, it won't get the response using Firefox. 
The issue here is that, in the **Back End** we are using SSL with a self-signed certificate.
This is not safe, so Firefox returns this error: *MOZILLA_PKIX_ERROR_SELF_SIGNED_CERT*.

---

## How can we run the Application?

1. For the **Back-End**, launch the Web API with **IIS Express**.

2. For the **Front-End**, first install the dependencies **(Express)** with npm inside the "./frontend" folder.

```
npm install
```

3. Run the command:

```
npm run serve
```

4. Open in Google Chrome "http://localhost:3000".
