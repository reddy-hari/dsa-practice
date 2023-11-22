# Spring Boot CRUD Application

This is a simple Spring Boot application that demonstrates basic CRUD (Create, Read, Update, Delete) operations for managing items.

## Getting Started

### Prerequisites

- Java Development Kit (JDK) installed
- Maven installed

### Running the Application

1. Clone the repository - `git clone https://github.com/reddy-hari/prep.git`
2. Navigate to the project directory - `cd snippets/spring-boot-crud`
3. Build and run the application using Maven - `mvn spring-boot:run`
4. The application will start on `http://localhost:8081`.

### H2 Database Console

The H2 Database Console is accessible for development purposes. Follow the steps below to access it:

- Open a web browser.
- Go to the H2 Console URL at `http://localhost:8081/h2-console`
- Configure the following settings in the H2 Console login form:

```bash
JDBC URL: jdbc:h2:~/test
Username: sa
Password: password
Click Connect.
```

- You can now interact with the H2 Database Console.

### API Endpoints

GET all items:
`GET http://localhost:8081/api/items`

GET item by ID:
`GET http://localhost:8081/api/items/{id}`

POST create new item:

```bash
POST http://localhost:8081/api/items
Request Body:
json
{
"name": "New Item",
"price": 29.99
}
```

PUT update item by ID:

```bash
PUT http://localhost:8081/api/items/{id}
Request Body:
json
{
"name": "Updated Item",
"price": 39.99
}
```

DELETE item by ID:
`DELETE http://localhost:8081/api/items/{id}`
