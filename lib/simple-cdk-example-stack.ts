import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import * as sqs from "aws-cdk-lib/aws-sqs";
import { PythonFunction } from "@aws-cdk/aws-lambda-python-alpha";
import { join } from "path";
import { IFunction, Runtime } from "aws-cdk-lib/aws-lambda";

export class SimpleCdkExampleStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const queue = new sqs.Queue(this, "SimpleCdkExampleQueue", {
      visibilityTimeout: cdk.Duration.seconds(300),
    });

    const fn = new PythonFunction(this, "pandas-example", {
      entry: join(__dirname, "..", "src", "hello"),
      runtime: Runtime.PYTHON_3_9,
      bundling: {
        assetExcludes: [".venv"],
      },
      environment: {

      },
      index: "lambda_handler.py",
      handler: "lambda_handler",
    });
  }
}
