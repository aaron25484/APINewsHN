# Hacker News API

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

## Getting Started

### Prerequisites

- Docker
- Docker Compose

### Running the API

1. Clone the repository:
   ```sh
   git clone https://github.com/aaron25484/APINewsHN.git
   cd APINewsHN

2. Install dependencies:

    ```bash
    pnpm install
    ```

3. Run the application:

    ```bash
    pnpm run dev
    ```
4. Open manually localhost:4000/ on your browser or 

     ```bash
    curl http://localhost:4000/
    ```

5. Run aplication test:

    ```bash
    pnpm run test
    ```
    

### With Docker Compose

1. Clone this repository:

    ```bash
    git clone https://github.com/aaron25484/APINewsHN.git
    ```


2. Run the application with Docker Compose:

    ```bash
    docker-compose up -d
    ```

3. Open localhost:4000/ on your browser or 

    ```bash
    curl http://localhost:4000/
    ```

