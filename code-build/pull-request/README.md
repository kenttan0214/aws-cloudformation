Codebuild job run when a Pull request created/updated/reopened

# How to use this file?

### Pre-Prerequisite
* Install aws cli
* [Windows](https://docs.aws.amazon.com/cli/latest/userguide/install-windows.html)
* [MacOs](https://docs.aws.amazon.com/cli/latest/userguide/install-macos.html)

### command
```
aws --region us-east-1 cloudformation deploy \
--stack-name foo-pull-request \
--template-file ./template.yml \
--tags \
Environment=Test \
--parameter-overrides \
ProjectName=foo-pull-request \
RepositoryUrl=https://github.com/foo-api \
BuildSpecPath=pull-request.yml \
Repository=foo-api \
ServiceRole=foo-code-build-role
```

### command
```
aws --region us-east-1 cloudformation update-stack \
--stack-name foo-pull-request \
--template-body file://template.yml \
--tags \
Key=Environment,Value=Test \
--parameters \
ParameterKey=ProjectName,ParameterValue=foo-pull-request \
ParameterKey=Repository,ParameterValue=foo-api \
ParameterKey=RepositoryUrl,ParameterValue=https://github.com/foo-api \
ParameterKey=BuildSpecPath,ParameterValue=pull-request.yml \
ParameterKey=ServiceRole,ParameterValue=foo-code-build-role
```
