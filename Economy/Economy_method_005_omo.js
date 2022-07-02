

Economy.prototype.central_bank_buys_bonds = function(x) {
  
  let transaction_id = "OMO";
  let transaction_desc = 'the central bank buys bonds from consumers';

  // ENTRY 1
  let agent_1 = 'central_bank';
  let entry_1 = new Entry({
    'entry_no':(this.DATA.ENTRIES.length+1),
    'agent':agent_1,
    'DR':[
      this.ADD_RECORD({
        'year':'2022',
        'transaction_id':'005',
        'agent':agent_1,
        'record_type':'DR',
        'account_class':'assets',
        'account_name':'government bonds',
        'amount':x
      })
    ],
    'CR':[
      this.ADD_RECORD({
        'year':'2022',
        'transaction_id':'005',
        'agent':agent_1,
        'record_type':'CR',
        'account_class':'liabilities',
        'account_name':'reserves',
        'amount':x
      })
    ]
  });
  this.DATA.ENTRIES.push(entry_1);
  
  
  // ENTRY 2
  let agent_2 = 'commercial_banks';
  let entry_2 = new Entry({
    'entry_no':(this.DATA.ENTRIES.length+1),
    'agent':agent_2,
    'DR':[
      this.ADD_RECORD({
        'year':'2022',
        'transaction_id':'005',
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
        'transaction_id':'005',
        'agent':agent_2,
        'record_type':'CR',
        'account_class':'liabilities',
        'account_name':'deposits',
        'amount':x
      })
    ]
  });
  this.DATA.ENTRIES.push(entry_2);
  
  
  // ENTRY 3
  let agent_3 = 'consumers';
  let entry_3 = new Entry({
    'entry_no':(this.DATA.ENTRIES.length+1),
    'agent':agent_3,
    'DR':[
      this.ADD_RECORD({
        'year':'2022',
        'transaction_id':'005',
        'agent':agent_3,
        'record_type':'DR',
        'account_class':'assets',
        'account_name':'deposits',
        'amount':x
      })
    ],
    'CR':[
      this.ADD_RECORD({
        'year':'2022',
        'transaction_id':'005',
        'agent':agent_3,
        'record_type':'CR',
        'account_class':'assets',
        'account_name':'government bonds',
        'amount':-x
      })
    ]
  });
  this.DATA.ENTRIES.push(entry_3);

  
  // THE TRANSACTION SUMMARY
  let transaction_1 = new Transaction({
    'transaction_no':(this.DATA.TRANSACTIONS.length + 1),
    'entries':[entry_1, entry_2, entry_3]
  });
  this.DATA.TRANSACTIONS.push(transaction_1);

};