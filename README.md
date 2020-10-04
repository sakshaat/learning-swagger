# Basic Swagger/OpenAPI Project

Learning how to use Swagger/Open API with NodeJS/Express.

## Basic commands
- Run server - `npm start`/`swagger project start`
- Run tests - `swagger project test`
- Swagger Editor - `swagger project edit`
  - Run with the server if you want to test sending requests

## High Level notes

* Basic Questions:
    * What is it?
        * Swagger is a set of open-source tools built around the OpenAPI Specification that can help you design, build, document and consume REST APIs.
            * Swagger Editor – browser-based editor where you can write OpenAPI specs.
            * Swagger UI – renders OpenAPI specs as interactive API documentation.
            * Swagger Codegen – generates server stubs and client libraries from an OpenAPI spec
        * Pretty much Swagger put together with some other services let you build REST web services by describing APIs in OpenAPI specification
        * For instance, you could use APIs described by Swagger in API Gateway
        * It is very similar to what Smithy/Coral does. It pretty much just does exactly what Coral does.
    * Why is it used?
        * It is used because it lets you describe your API (design, doc and implementation) in one centralized place
        * API is language agnostic because you can create client libraries and server templates in any language
    * What problem does it solve?
        * It is a centralized place to describe your API, you can pretty much port it to any API Gateway technology and use it with any backend that can interface with OpenAPI (Swagger Codegen solves this by generating server templates and client libraries from OpenAPI specs for a number of languages, but im sure there are other tools out there)
    * What can I build with it?
        * You can build APIs for services
    * How do I use it?
        * https://swagger.io/tools/open-source/getting-started/
        * Pretty much we need to first create an OAS definition, then use Codegen to get some stubs and use that to create a service/client. Then you can deploy this API if needed.
    * What’s the smallest meaningful thing I can build with it?
        * A sample API with a backend that can be called by a client that does something
        * https://github.com/sakshaat/learning-swagger
    * How to generate a client
        * Use Swagger Editor to generate clients for any number of languages
        * Use swagger codegen cli tool (https://github.com/swagger-api/swagger-codegen/tree/3.0.0)
* Other Notes
    * Swagger != OpenAPI (OAS). OpenAPI is the specification, Swagger is a set of tools that help implement the spec
* Resources:
    * https://swagger.io/docs/specification/about/
    * https://swagger.io/resources/articles/how-to-build-an-api-from-the-ground-up/
    * https://swagger.io/docs/
    * https://swagger.io/tools/open-source/getting-started/
    * https://swagger.io/resources/webinars/getting-started-with-swagger/
    * https://app.swaggerhub.com/help/tutorials/writing-swagger-definitions
    * https://scotch.io/tutorials/speed-up-your-restful-api-development-in-node-js-with-swagger
    * https://fizzylogic.nl/2018/09/26/learn-how-to-quickly-generate-rest-clients-from-swagger-files/
