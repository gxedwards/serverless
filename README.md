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

## serverless.yml
TBD

## Cognito
TBD

## API & Lambda Functions
TBD

## Cloud Formation
TBD

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
