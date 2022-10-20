const perform = async (z, bundle) => {
  const options = {
    url: 'https://dspot-test.herokuapp.com/zapier/candidate_events',
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'X-API-KEY': bundle.authData.api_key,
    },
    params: {
      candidate_hash: bundle.inputData.candidate_hash,
      job_hash: bundle.inputData.job_hash,
      api_key: bundle.authData.api_key,
      page: bundle.meta.page + 1,
      limit: 25,
    },
  };

  return z.request(options).then((response) => {
    response.throwForStatus();
    const results = response.json;

    // You can do any parsing you need for results here before returning them

    return results;
  });
};

module.exports = {
  operation: {
    perform: perform,
    inputFields: [
      {
        key: 'job_hash',
        type: 'string',
        label: 'Job hash',
        helpText: 'Hash of job to subscribe (Opcional)',
        required: false,
        list: false,
        altersDynamicFields: false,
      },
      {
        key: 'candidate_hash',
        type: 'string',
        label: 'Candidate Hash',
        helpText: 'Hash of Candidate to subscribe. (Optional)',
        required: false,
        list: false,
        altersDynamicFields: false,
      },
    ],
    canPaginate: true,
    outputFields: [
      { key: 'id', label: 'ID', type: 'string' },
      { key: 'job', label: 'Job' },
      { key: 'candidate__first_name', label: 'First Name (Candidate)' },
      { key: 'candidate__last_name', label: 'Last Name (Candidate)' },
      { key: 'candidate__available', label: 'Available (Candidate)' },
      { key: 'prev_stage', label: 'Prev Stage' },
      { key: 'current_stage', label: 'Current Stage', type: 'string' },
    ],
  },
  key: 'candidate_event',
  noun: 'Candiate',
  display: {
    label: 'Candidate Event',
    description:
      'Triggers when a candidate has moved to the selected stage in a Viterbit Job.',
    hidden: false,
    important: true,
  },
};
