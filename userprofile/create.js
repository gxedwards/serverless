import * as dynamoDbLib from "../libs/dynamodb-lib";
import { success, failure } from "../libs/response-lib";
/**
 * 
 * @param {*} event 
 * @param {*} context 
 * @param {*} callback 
 */
export async function main(event, context, callback) {
  const data = JSON.parse(event.body);
  const params = {
    TableName: process.env.tableNameUserProfile,
    Item: {
      userId: event.requestContext.identity.cognitoIdentityId,
      cardPrefs: data.cardPrefs,
      cards: data.cards,
      lastUpdated: data.lastUpdated,
      registered: data.registered,
      userName: data.userName,
      rewards: data.rewards
    }
  };

  try {
    await dynamoDbLib.call("put", params);
    callback(null, success(params.Item));
  } catch (e) {
    callback(null, failure({ status: false }));
  }
}