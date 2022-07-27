A simple CloudFormation for S3 + CloudFront + Route53, suitable to host static content and SPA web app

# How to use this file?

### Pre-Prerequisite
* Install aws cli
* [Windows](https://docs.aws.amazon.com/cli/latest/userguide/install-windows.html)
* [MacOs](https://docs.aws.amazon.com/cli/latest/userguide/install-macos.html)

### command
```
aws --region us-east-1 cloudformation create-stack --stack-name foo-stack --template-body file://template.yml --parameters ParameterKey=DomainName,ParameterValue=foo.example.com ParameterKey=FullDomainName,ParameterValue=subdomain.foo.example.com ParameterKey=AcmCertificateArn,ParameterValue=arn:aws:acm:us-east-1:8888888:certificate/xxxx-xxx-xxxx-xxx-xxxxx
```
