module.exports.handler = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Severless API com DynamoDB, projeto prático com a DIO",
        input: event,
      },
      null,
      2
    ),
  };
};
