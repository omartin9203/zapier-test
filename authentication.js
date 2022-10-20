module.exports = {
  type: 'custom',
  test: {
    headers: { 'X-API-KEY': '{{bundle.authData.api_key}}' },
    params: { api_key: '{{bundle.authData.api_key}}' },
    url: 'https://dspot-test.herokuapp.com/zapier/me',
  },
  fields: [
    {
      computed: false,
      key: 'api_key',
      required: true,
      label: 'Api Key',
      type: 'string',
    },
  ],
  customConfig: {},
};
