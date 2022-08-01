IAM Role Creaction Example

# How to use this file?

### Pre-Prerequisite
* Install aws cli
* [Windows](https://docs.aws.amazon.com/cli/latest/userguide/install-windows.html)
* [MacOs](https://docs.aws.amazon.com/cli/latest/userguide/install-macos.html)

### command
```
aws --region us-east-1 cloudformation update-stack \
--tags \
Key=Environment,Value=Test \
--stack-name example-iam-stack \
--template-body file://sample-1.yml \
--capabilities CAPABILITY_NAMED_IAM
```
