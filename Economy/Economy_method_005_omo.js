
// really this is 2 transactions
// 1. the central bank increases reserves
// 2. the central bank buys the government bonds from consumers

Economy.prototype.central_bank_increases_reserves = function(obj) {
  
  let x = obj.x; // THE MINIMUM THIS FUNCTION ACCEPTS AS A PARAMETER
  
  let transaction_id = "005-OMO-A";
  let transaction_desc = 'the central bank buys bonds from consumers';

  // ENTRY 1 : the central bank increases reserves
  let agent_1 = 'central_bank';
  let entry_1 = new Entry({
    'entry_no':(this.DATA.ENTRIES.length+1),
    'agent':agent_1,
    'DR':[
      this.ADD_RECORD({
        'year':'2022',
        'transaction_id':transaction_id,
        'agent':agent_1,
        'record_type':'DR',
        'account_class':'assets',
        'account_name':'deposits, central bank',
        'amount':x
      })
    ],
    'CR':[
      this.ADD_RECORD({
        'year':'2022',
        'transaction_id':transaction_id,
        'agent':agent_1,
        'record_type':'CR',
        'account_class':'liabilities',
        'account_name':'reserves',
        'amount':x
      })
    ]
  });
  this.DATA.ENTRIES.push(entry_1);
  
  // ENTRY 2 : the commercial bank side of this
  let agent_2 = 'commercial_banks';
  let entry_2 = new Entry({
    'entry_no':(this.DATA.ENTRIES.length+1),
    'agent':agent_2,
    'DR':[
      this.ADD_RECORD({
        'year':'2022',
        'transaction_id':transaction_id,
        'agent':agent_2,
        'record_type':'DR',
        'account_class':'assets',
        'account_name':'reserves',
        'amount':x
      })
    ],
    'CR':[
      this.ADD_RECORD({
        'year':'2022',
        'transaction_id':transaction_id,
        'agent':agent_2,
        'record_type':'CR',
        'account_class':'liabilities',
        'account_name':'deposits, central bank',
        'amount':x
      })
    ]
  });
  this.DATA.ENTRIES.push(entry_2);
  

  // THE TRANSACTION SUMMARY
  let transaction_1 = new Transaction({
    'transaction_no':(this.DATA.TRANSACTIONS.length + 1),
    'transaction_id':transaction_id,
    'desc':(obj.desc || transaction_desc),
    'entries':[entry_1, entry_2]
  });
  this.DATA.TRANSACTIONS.push(transaction_1);

};


Economy.prototype.central_bank_buys_bonds = function(obj) {
  
  let x = obj.x; // THE MINIMUM THIS FUNCTION ACCEPTS AS A PARAMETER
  
  let transaction_id = "005-OMO-B";
  let transaction_desc = 'the central bank buys bonds from consumers';

  // ENTRY 2 : the commercial bank transfers ownership to the consumers
  let agent_2 = 'central_bank';
  let entry_2 = new Entry({
    'entry_no':(this.DATA.ENTRIES.length+1),
    'agent':agent_2,
    'DR':[
      this.ADD_RECORD({
        'year':'2022',
        'transaction_id':transaction_id,
        'agent':agent_2,
        'record_type':'CR',
        'account_class':'assets',
        'account_name':'deposits, central bank',
        'amount':-x
      })
    ],
    'CR':[
      this.ADD_RECORD({
        'year':'2022',
        'transaction_id':transaction_id,
        'agent':agent_2,
        'record_type':'DR',
        'account_class':'assets',
        'account_name':'government bonds',
        'amount':x
      })
    ]
  });
  this.DATA.ENTRIES.push(entry_2);


  // ENTRY 3 : the commercial bank transfers ownership to the consumers
  let agent_3 = 'commercial_banks';
  let entry_3 = new Entry({
    'entry_no':(this.DATA.ENTRIES.length+1),
    'agent':agent_3,
    'DR':[
      this.ADD_RECORD({
        'year':'2022',
        'transaction_id':transaction_id,
        'agent':agent_3,
        'record_type':'DR',
        'account_class':'liabilities',
        'account_name':'deposits, central bank',
        'amount':-x
      })
    ],
    'CR':[
      this.ADD_RECORD({
        'year':'2022',
        'transaction_id':transaction_id,
        'agent':agent_3,
        'record_type':'CR',
        'account_class':'liabilities',
        'account_name':'deposits, consumers',
        'amount':x
      })
    ]
  });
  this.DATA.ENTRIES.push(entry_3);
  
  
  // ENTRY 3
  let agent_4 = 'consumers';
  let entry_4 = new Entry({
    'entry_no':(this.DATA.ENTRIES.length+1),
    'agent':agent_4,
    'DR':[
      this.ADD_RECORD({
        'year':'2022',
        'transaction_id':transaction_id,
        'agent':agent_4,
        'record_type':'DR',
        'account_class':'assets',
        'account_name':'deposits, consumers',
        'amount':x
      })
    ],
    'CR':[
      this.ADD_RECORD({
        'year':'2022',
        'transaction_id':transaction_id,
        'agent':agent_4,
        'record_type':'CR',
        'account_class':'assets',
        'account_name':'government bonds',
        'amount':-x
      })
    ]
  });
  this.DATA.ENTRIES.push(entry_4);

  
  // THE TRANSACTION SUMMARY
  let transaction_1 = new Transaction({
    'transaction_no':(this.DATA.TRANSACTIONS.length + 1),
    'transaction_id':transaction_id,
    'desc':(obj.desc || transaction_desc),
    'entries':[entry_2, entry_3, entry_4]
  });
  this.DATA.TRANSACTIONS.push(transaction_1);

};