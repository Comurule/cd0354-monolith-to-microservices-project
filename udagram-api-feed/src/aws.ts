import AWS = require('aws-sdk');
import {config} from './config/config';


// Configure AWS
// const credentials = new AWS.SharedIniFileCredentials({profile: config.aws_profile});
// AWS.config.credentials = credentials;

export const s3 = new AWS.S3({
  apiVersion: '2006-03-01',
  accessKeyId: config.access_key_id,
  secretAccessKey: config.secret_access_key,
  signatureVersion: 'v4',
  region: config.aws_region,
  params: {Bucket: config.aws_media_bucket},
});
console.log({
  s3:s3.config,
  accessKeyId: config.access_key_id,
  secretAccessKey: config.secret_access_key,})
// Generates an AWS signed URL for retrieving objects
export function getGetSignedUrl( key: string ): string {
  const signedUrlExpireSeconds = 60 * 5;

  return s3.getSignedUrl('getObject', {
    Bucket: config.aws_media_bucket,
    Key: key,
    Expires: signedUrlExpireSeconds,
  });
}

// Generates an AWS signed URL for uploading objects
export function getPutSignedUrl( key: string ): string {
  const signedUrlExpireSeconds = 60 * 5;

  return s3.getSignedUrl('putObject', {
    Bucket: config.aws_media_bucket,
    Key: key,
    Expires: signedUrlExpireSeconds,
  });
}
