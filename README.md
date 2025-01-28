# React Router Template

A modern, production-ready template for building full-stack React applications using React Router.

## Getting Started

### Prerequisites

You must install Bun to use this template. Follow the instructions at https://bun.sh/docs/installation to install Bun.

If for some reason you don't want to install Bun, you can start the project using Docker as described in the Deployment section below.


### Installation

Install the dependencies and start the development server:

```bash
bun i
bun dev
```

Your application will be available at `http://localhost:5173`.


> [!CAUTION]
> There is a bug that prevents the generation of clients from Swagger in React 19. An issue is already open on the Kubb repository: https://github.com/kubb-labs/kubb/issues/1448 we should expect a fix soon. Meanwhile, you can use a React 18 project to generate clients from Swagger.

<!-- TODO Add more info once the bug is resolvec -->

This template includes a tool to generate clients from Swagger. To generate React Query clients from a Swagger file:

1. Update the input path in `kubb.config.js` to point to your OpenAPI file.

2. Run the following command to generate the clients and types:

```bash
bun kubb:gen
```

> [!NOTE]
> All clients will be generated in the `app/api` directory. React Query clients will use the http client defined in `app/http.ts`.
