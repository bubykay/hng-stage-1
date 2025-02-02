# Number Classification API Documentation

This API classifies a given number based on various mathematical properties and provides a fun fact about the number using an external Numbers API.

## **Installation and Setup**

### **Environment Variables**

To run the application locally, ensure that the following environment variables are set:

```

port=5400
swagger_domain=https://localhost:5400
node_env=development
is_production=false

```

### **Steps to Start the Application**

1. Install dependencies:

   ```bash
   yarn install
   ```

2. For local development, run:

   ```bash
   yarn dev
   ```

3. To build and start the production app:
   ```bash
   yarn start
   ```

---

## **Endpoint: Classify Number**

### **GET `/classify-number`**

This endpoint classifies a given number based on various mathematical properties and provides a fun fact about it.

---

## **Request Parameters**

| Parameter | Type  | Required | Description            |
| --------- | ----- | -------- | ---------------------- |
| `number`  | `int` | ✅ Yes   | The number to classify |

📌 **Example Request:**

```bash
GET /classify-number?number=42
```

---

## **Response Format**

### **Success Response (`200 OK`)**

If a valid number is provided, the API returns an object with the number's properties.

#### ✅ **Example Response:**

```json
{
  "number": 42,
  "is_prime": false,
  "is_perfect": false,
  "properties": ["even"],
  "digit_sum": 6,
  "fun_fact": "42 is the answer to the ultimate question of life, the universe, and everything."
}
```

### **Response Fields:**

| Field        | Type      | Description                                                        |
| ------------ | --------- | ------------------------------------------------------------------ |
| `number`     | `int`     | The number provided in the request                                 |
| `is_prime`   | `boolean` | Whether the number is prime (`true` or `false`)                    |
| `is_perfect` | `boolean` | Whether the number is a perfect square                             |
| `properties` | `array`   | List of mathematical properties (e.g., "odd", "even", "armstrong") |
| `digit_sum`  | `int`     | Sum of the digits of the number                                    |
| `fun_fact`   | `string`  | A fun fact about the number from the Numbers API                   |

---

## **Error Responses**

### **400 Bad Request – Missing or Invalid Number**

#### ❌ **Example Response:**

```json
{
  "error": "Number is required"
}
```

Occurs if the `number` parameter is missing.

#### ❌ **Example Response (Invalid Input)**

```json
{
  "error": true,
  "number": "alphabet"
}
```

Occurs if the provided value is **not a valid number** (e.g., `"abc"` instead of `42`).

### **500 Internal Server Error**

#### ❌ **Example Response:**

```json
{
  "error": "Internal Server Error"
}
```

Occurs if there is an unexpected issue with the server or external API.

---

## **How to Use**

### **With cURL**

```bash
curl -X GET "http://localhost:5400/classify-number?number=42"
```

### **With JavaScript (Axios)**

```javascript
import axios from "axios";

axios
  .get("http://localhost:5400/classify-number?number=42")
  .then((response) => console.log(response.data))
  .catch((error) => console.error(error.response.data));
```

---

## **Notes**

- This API relies on an external **Numbers API** (`http://numbersapi.com`).
- Ensure your server is **running and has internet access**.
- If the Numbers API is down, the response may not include a fun fact.

---

## **Swagger Documentation**

You can view the Swagger documentation for this API at the following URL:

[Swagger UI Documentation](https://hng-stage-1-wo7e.onrender.com/api-docs)

---

## **License**

This project is licensed under the MIT License.

### Key Features:

- The **Installation and Setup** section helps users get the app up and running locally or in production.
- The **Endpoint** section documents how the API should be used, with clear request and response examples.
- **Error Responses** highlight potential issues, helping users troubleshoot.
- **Swagger Documentation** provides a link to view the interactive API documentation.
