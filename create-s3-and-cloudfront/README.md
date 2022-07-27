A simple CloudFormation to create AWS S3 bucket

# How to use this file?

### Pre-Prerequisite
* Install aws cli
* [Windows](https://docs.aws.amazon.com/cli/latest/userguide/install-windows.html)
* [MacOs](https://docs.aws.amazon.com/cli/latest/userguide/install-macos.html)

### command
```
aws --region us-east-1 cloudformation create-stack --stack-name fooStack --template-body file://template.yml
```
