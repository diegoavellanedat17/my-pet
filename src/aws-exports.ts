const awsConfig = {
  Auth: {
    Cognito: {
      userPoolId: process.env.COGNITO_USER_POOL_ID || 'default-pool-id',
      userPoolClientId: process.env.COGNITO_USER_POOL_CLIENT_ID || 'client-id',
      identityPoolId:
        process.env.COGNITO_IDENTITY_POOL_ID || 'identity-pool-id',
    },
  },
};

export default awsConfig;
