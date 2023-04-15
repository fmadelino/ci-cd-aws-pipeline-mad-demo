import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { CodePipeline, CodePipelineSource, ShellStep, Step } from 'aws-cdk-lib/pipelines';
import { ManualApprovalStep } from 'aws-cdk-lib/pipelines';
//import { MyPipelineAppStage } from './stage';

export class CiCdAwsPipelineMadDemoStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // const pipeline = new CodePipeline(this, 'Pipeline', {
    new CodePipeline(this, 'Pipeline', {
      pipelineName: 'MadCDKdemoPipeline',
      synth: new ShellStep('Synth', {
        input: CodePipelineSource.gitHub('fmadelino/ci-cd-aws-pipeline-mad-demo', 'main'), //Remember to change 
        commands: ['npm ci', 
                   'npm run build', 
                   'npx cdk synth']
      })
    });
    

  //   const testingStage = pipeline.addStage(new MyPipelineAppStage(this, "test", {
  //     env: { account: "837397238330", region: "ap-southeast-2" }
  //   }));


  //   testingStage.addPre(new ShellStep("Run Unit Tests", { commands: ['npm install', 'npm test'] }));
  //   testingStage.addPost(new ManualApprovalStep('Manual approval before production'));

  //   const prodStage = pipeline.addStage(new MyPipelineAppStage(this, "prod", {
  //     env: { account: "837397238330", region: "ap-southeast-2" }
  //   }));
  // }
}




// Original Code - for reference
// import * as cdk from 'aws-cdk-lib';
// import { Construct } from 'constructs';
// // import * as sqs from 'aws-cdk-lib/aws-sqs';

// export class CiCdAwsPipelineMadDemoStack extends cdk.Stack {
//   constructor(scope: Construct, id: string, props?: cdk.StackProps) {
//     super(scope, id, props);

//     // The code that defines your stack goes here

//     // example resource
//     // const queue = new sqs.Queue(this, 'CiCdAwsPipelineMadDemoQueue', {
//     //   visibilityTimeout: cdk.Duration.seconds(300)
//     // });
//   }
// }
