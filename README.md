# Hacker News API

Made with Typescript, ExpressJS, Jest and Docker.

Made by Aaron de los Santos

## Table of Contents

- [Hacker News API](#hacker-News-API)
  - [About the Project](#about-the-project)
  - [Features](#features)
  - [Development Approach](#development-approach)
  - [Installation and Setup](#installation-and-setup)


## About the project
This project aims to create an API that extracts news from [Hacker News](https://news.ycombinator.com/).

## Features

- **Paginated News Fetching**: 
  - Request `/1` returns an array with 30 news items from the front page.
  - Request `/2` returns 60 news items (pages 1 and 2), and so on.

- **Caching**: 
  - Efficiently fetch only new pages. For example, requesting `/1` followed by `/2` will only fetch page 2 on the second request. Similarly, requesting `/2` followed by `/4` will only fetch pages 3 and 4.

## Development Approach

1. **Testing**: 
   - Develop with tests to ensure functionality.
   
2. **Caching**: 
   - Implement caching after basic functionality is in place to optimize repeated requests.

3. **Docker Setup**: 
   - Use `docker-compose` to ensure consistency across environments.

## Installation and Setup

### Prerequisites

- Docker
- Docker Compose

### Running the API

1. Clone the repository. You will need **[node](https://nodejs.org/es)** and **[pnpm](https://pnpm.io/)** installed globally on your machine.

    `````
    git clone https://github.com/aaron25484/APINewsHN.git
    cd APINewsHN
    `````

2. Go to the project folder:
    `````
    cd APINewsHN
    ````` 
3. Install dependencies via pnpm:

    `````
    pnpm install
    `````

4. Run the application:

    `````
    pnpm run dev
    `````
5. Open manually localhost:4000/ on your browser or 

     `````
    curl http://localhost:4000/
    `````

6. Run aplication test:

    `````
    pnpm run test
    `````
    

### With Docker Compose

1. Clone this repository:

    `````
    git clone https://github.com/aaron25484/APINewsHN.git
    `````


2. Run the application with Docker Compose:

    `````
    docker-compose up -d
    `````

3. Open localhost:4000/ on your browser or 

    `````
    curl http://localhost:4000/
    `````

