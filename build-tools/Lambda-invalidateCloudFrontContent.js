// event is expected to be a JSON-encoded object defined as
//   "{
//      distributionId: 'CloudFront-Distribution-ID',
//      items: [
//        'list-of-items-to-invalidate.html',
//        'index.html',
//        'asset.png'
//      ]
//    }"
const AWS = require('aws-sdk');
AWS.config.update({region: 'us-west-2'});

exports.handler = async (event) => {

  try {

    console.log("Raw input (typeof: ", typeof event, "): ", event);

    const input = JSON.parse(event);

    console.log("Parsed input: ", input);

    var cfParams = {
      DistributionId: input.distributionId,
      InvalidationBatch: {
        CallerReference: '',
        Paths: {
          Quantity: input.items.length,
          Items: input.items
        }
      }
    }

    const cloudfront = new AWS.CloudFront();
    const resp = await cloudfront.createInvalidation(cfParams);

    return {
      statusCode: 200,
      body: JSON.stringify("CloudFront invalidation created successfully.")
    };

  } catch (err) {

    console.error(err);
    return {
      statusCode: 500,
      body: JSON.stringify(err)
    };

  }
};
