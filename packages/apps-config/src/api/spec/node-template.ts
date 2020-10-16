// Copyright 2017-2020 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

// structs need to be in order
/* eslint-disable sort-keys */
// my custom type: NumberStruct

export default {
  Address: 'AccountId',
  LookupSource: 'AccountId',
  NumberStruct: {
    number: 'u32',
    option: 'Option<u32>'
  }
};
