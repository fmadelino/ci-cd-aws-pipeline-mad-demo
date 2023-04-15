
Pre-Reqs
---
1) CDK
2) NPM
3) A Github repository


1. Run this command 
export CDK_NEW_BOOTSTRAP=1 
npx cdk bootstrap aws://<YOUR_ACCONT_ID>/<YOUR_REGION> --cloudformation-execution-policies arn:aws:iam::aws:policy/AdministratorAccess aws://<YOUR_ACCONT_ID>/<YOUR_REGION>

It seems that the above command is not completely correct... as the last aws://<YOUR_ACCONT_ID>/<YOUR_REGION> is not needed unless you want to bootstrap to a second region???

2. Create github repo - mine is https://github.com/beabetterdevv/ci-cd-aws-pipeline-demo.git

3. Clone your repo onto local - git clone https://github.com/beabetterdevv/ci-cd-aws-pipeline-demo.git ci-cd-aws-pipeline-demo


