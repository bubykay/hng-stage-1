@channel
Stage 1 Backend- Number Classification API

Resources

- Fun fact API: http://numbersapi.com/#42
- https://en.wikipedia.org/wiki/Parity_(mathematics)

Task Description
Create an API that takes a number and returns interesting mathematical properties about it, along with a fun fact.

Requirements

1. Technology Stack:
   - Use any programming language or framework of your choice (See Sharp (C #), PHP 🐘, Python 🐍, Go 🏃🏾, Java ☕, JS/TS 🤢)
   - Must be deployed to a publicly accessible endpoint
   - Must handle CORS (Cross-Origin Resource Sharing)
   - Must return responses in JSON format
2. Version Control:
   - Code must be hosted on GitHub
   - Repository must be public
   - Must include a well-structured http://README.md

API Specification

- Endpoint: GET\*\* <http://your-domain.com>/api/classify-number?number=371
- Required JSON Response Format (200 OK):
  {
  "number": 371,
  "is_prime": false,
  "is_perfect": false,
  "properties": ["armstrong", "odd"],
  "digit_sum": 11, // sum of its digits
  "fun_fact": "371 is an Armstrong number because 3^3 + 7^3 + 1^3 = 371" //gotten from the numbers API
  }
- Required JSON Response Format (400 Bad Request)
  {
  "number": "alphabet",
  "error": true
  }

Acceptance Criteria
Functionality

- Accepts GET requests with a number parameter.
- Returns JSON in the specified format.
- Accepts all valid integers as the only possible inputs
- Provides appropriate HTTP status codes.

Code Quality

- Organized code structure.
- Basic error handling and input validation.
- Avoids hardcoded values.

Documentation

- Complete README.

Deployment

- Publicly accessible and stable API.
- Fast response time (< 500ms).

Submission Mode:
Submit your task through the designated https://forms.gle/eM8sqYLSvwSt2Qes8. Ensure you've:

- Hosted the API on a platform of your choice.
- Double-checked all requirements and acceptance criteria.
- Tested your API thoroughly before submission.
- Thoroughly reviewed your work to ensure accuracy, functionality, and adherence to the specified guidelines before you submit it.

Submission Deadline:
The deadline for submissions is 6th February, 2025 11:59 PM WAT (GMT +1). Late submissions will not be entertained.

Additional Note

- Use the math type from the http://numbersapi.com/#42 to get the fun fact.
- This task weighs 10 marks. An average mark is needed to proceed to the next stage.
- The possible combinations for the properties field:
  a. ["armstrong", "odd"] - if the number is both an Armstrong number and odd
  b. ["armstrong", “even”] - if the number is an Armstrong number and even
  c. ["odd"] - if the number is not an Armstrong number but is odd
  d. [”even”] - if the number is not an Armstrong number but is even

📢 Important Reminder

- Read, read, and read again! Ensure you fully understand the task requirements, API specifications, and acceptance criteria before starting. Double-check your work to ensure it meets all the guidelines and is free of errors.

https://hng-stage-1-wo7e.onrender.com/api/classify-number?number=371
https://github.com/bubykay/hng-stage-1
