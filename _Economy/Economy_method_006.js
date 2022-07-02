Economy.prototype.consumer_borrows_from_commercial_bank = function(x) {
  
  let year = '2022';
  let transaction_id = "006";
  let transaction_desc = 'consumers borrow from commercial banks';

  // ENTRY 1
  let agent_1 = 'commercial_banks';
  let entry_1 = new Entry({
    'entry_no':(this.DATA.ENTRIES.length+1),
    'agent':agent_1,
    'DR':[
      this.ADD_RECORD({
        'year':year,
        'transaction_id':transaction_id,
        'agent':agent_1,
        'record_type':'DR',
        'account_class':'assets',
        'account_name':'loans',
        'amount':x
      })
    ],
    'CR':[
      this.ADD_RECORD({
        'year':year,
        'transaction_id':transaction_id,
        'agent':agent_1,
        'record_type':'CR',
        'account_class':'liabilities',
        'account_name':'deposits',
        'amount':x
      })
    ]
  });
  this.DATA.ENTRIES.push(entry_1);
  
  // ENTRY 2
  let agent_2 = 'consumers';
  let entry_2 = new Entry({
    'entry_no':(this.DATA.ENTRIES.length+1),
    'agent':agent_2,
    'DR':[
      this.ADD_RECORD({
        'year':year,
        'transaction_id':transaction_id,
        'agent':agent_2,
        'record_type':'DR',
        'account_class':'assets',
        'account_name':'deposits',
        'amount':x
      })
    ],
    'CR':[
      this.ADD_RECORD({
        'year':year,
        'transaction_id':transaction_id,
        'agent':agent_2,
        'record_type':'CR',
        'account_class':'liabilities',
        'account_name':'loans',
        'amount':x
      })
    ]
  });
  this.DATA.ENTRIES.push(entry_2);
  
  // THE TRANSACTION SUMMARY
  let transaction_1 = new Transaction({
    'transaction_no':(this.DATA.TRANSACTIONS.length + 1),
    'entries':[entry_1, entry_2]
  });
  this.DATA.TRANSACTIONS.push(transaction_1);

};