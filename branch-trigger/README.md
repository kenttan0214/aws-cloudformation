Codebuild job with a Github branch trigger

# How to use this file?

### Pre-Prerequisite
* Install aws cli
* [Windows](https://docs.aws.amazon.com/cli/latest/userguide/install-windows.html)
* [MacOs](https://docs.aws.amazon.com/cli/latest/userguide/install-macos.html)

### command
```
aws --region us-east-1 cloudformation update-stack \
--stack-name foo-deploy-test \
--template-body file://template.yml \
--tags \
Key=Environment,Value=test \
--parameters \
ParameterKey=ProjectName,ParameterValue=foo-deploy-test \
ParameterKey=RepositoryUrl,ParameterValue=https://github.com/foo-api \
ParameterKey=BuildSpecPath,ParameterValue=deploy-test.yml \
ParameterKey=BranchName,ParameterValue=main \
ParameterKey=Repository,ParameterValue=foo-api \
ParameterKey=ServiceRole,ParameterValue=foo-code-build-role
```
