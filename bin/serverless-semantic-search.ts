#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { ServerlessSemanticSearchStack } from '../lib/serverless-semantic-search-stack';

const app = new cdk.App();
new ServerlessSemanticSearchStack(app, 'ServerlessSemanticSearchStack');
