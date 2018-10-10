# Credit Dog  - Server Side code

Based on [Serverless Stack](http://serverless-stack.com) is a free comprehensive guide to creating full-stack serverless applications. We create a [note taking app](http://demo2.serverless-stack.com) from scratch.

The starter for this is from(https://github.com/AnomalyInnovations/serverless-stack-demo-client). And the repo for the tutorial [here](https://github.com/AnomalyInnovations/serverless-stack-com).

#### AWS set up

Make sure you have an AWS account configured to administer everything

* https://docs.aws.amazon.com/cli/latest/userguide/cli-config-files.html

TBD Add instructions on how to do this. `aws configure` etc

#### Usage

To use this repo locally you need to have the [Serverless framework](https://serverless.com) installed.

``` bash
$ npm install serverless -g
```

Clone this repo and install the NPM packages.

``` bash
$ git clone <put repo url>
$ npm install
```

Run a single API on local.

``` bash
$ serverless invoke local --function list --path event.json
```

Where, `event.json` contains the request event info and looks something like this.

``` json
{
  "requestContext": {
    "authorizer": {
      "claims": {
        "sub": "USER-SUB-1234"
      }
    }
  }
}
```

Finally, run this to deploy to your AWS account which you will need to have set up with 'aws configure'

``` bash
$ serverless deploy -v
```

This will deploy the server side into your AWS subscription. 

The information that is needed for the client will have been put into the console window when deploying. Alternately you can also find this information in the CloudFormation stack output window from AWS console.

#### Key Concepts

## Serverless & serverless.yml
The serverless framework (https://serverless.com/) is a CLI tool that simplifies the building and deploying of serverless applications. This is aimed primarily at the backend code. The key to the serverless is a service which is defined in the serverless.yml file. Serverless was originally for AWS but it is now an abtraction layer over most cloud providers.

For AWS Serverless is an abstraction layer that will generate CloudFormation files. In this respect it has many similarities with AWS SAM.

CLI Reference commands for AWS: https://serverless.com/framework/docs/providers/aws/cli-reference/

Plugin registry: https://github.com/serverless/plugins.

The following seem like useful plugins:
* fullstack-serverless
* serverless-offline
* serverless-s3-encryption
* serverless-plugin-simulate

## Cognito
Amazon Cognito lets you add user sign-up, sign-in, and access control to your web and mobile apps quickly and easily. Amazon Cognito scales to millions of users and supports sign-in with social identity providers, such as Facebook, Google, and Amazon, and enterprise identity providers via SAML 2.0

## API Gateway & Lambda Functions
Amazon API Gateway is an AWS service that enables developers to create, publish, maintain, monitor, and secure APIs at any scale. You can create APIs that access AWS or other web services, as well as data stored in the AWS Cloud. API Gateway can be considered a backplane in the cloud to connect AWS services and other public or private websites. It provides consistent RESTful application programming interfaces (APIs) for mobile and web applications to access AWS services.

AWS Lambda is an event-driven, serverless computing platform provided by Amazon as a part of the Amazon Web Services. It is a computing service that runs code in response to events and automatically manages the computing resources required by that code.

## Cloud Formation
AWS CloudFormation provides a common language for you to describe and provision all the infrastructure resources in your cloud environment. CloudFormation allows you to use a simple text file to model and provision, in an automated and secure manner, all the resources needed for your applications across all regions and accounts. This file serves as the single source of truth for your cloud environment.

## Connecting from Client
TBD

## Deploy & Teardown

To deploy an installation
``` bash
$ serverless deploy -v
```

To teardown an installation
``` bash
$ serverless remove
```
