# serverless-security-group-list

This service is to get the list of EC2 security groups of an AWS account

## Todo

1. Create a Serverless application.
2. More info: https://serverless.com/framework/docs/providers/aws/events/apigateway#configuring-endpoint-types
3. Create a Lambda to list all EC2 security groups in an AWS Account.
4. Make the Lambda function available via an AWS API Gateway endpoint.
5. Write unit tests for your code by mocking AWS EC2 API.
6. Hint: You can use the aws-sdk-mock npm module
7. Produce a code coverage report for your test suite.
8. Secure the endpoint using a custom API Gateway Lambda Authoriser.
9. More info: https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-use-lambda-authorizer.html
10. Write an end-to-end API test for the endpoint.
11. Make response JSON:API 1.0 (https://jsonapi.org/format/1.0/) compatible.
