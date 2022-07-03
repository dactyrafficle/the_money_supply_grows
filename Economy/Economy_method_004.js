Economy.prototype.government_issues_government_bonds = function(obj) {

  let x = obj.x; // THE MINIMUM THIS FUNCTION ACCEPTS AS A PARAMETER
  
  let transaction_id = "GIB";
  let transaction_desc = 'gov issues gov bonds';

  // ENTRY 2
  let agent_1 = 'government';
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
        'account_name':'deposits, government',
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
        'account_name':'government bonds',
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
        'year':'2022',
        'transaction_id':transaction_id,
        'agent':agent_2,
        'record_type':'DR',
        'account_class':'assets',
        'account_name':'government bonds',
        'amount':x
      })
    ],
    'CR':[
      this.ADD_RECORD({
        'year':'2022',
        'transaction_id':transaction_id,
        'agent':agent_2,
        'record_type':'CR',
        'account_class':'assets',
        'account_name':'deposits, consumers',
        'amount':-x
      })
    ]
  });
  this.DATA.ENTRIES.push(entry_2);
  

  // ENTRY 3
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
        'account_name':'deposits, consumers',
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
        'account_name':'deposits, government',
        'amount':x
      })
    ]
  });
  this.DATA.ENTRIES.push(entry_3);

  // THE TRANSACTION SUMMARY
  let transaction_1 = new Transaction({
    'transaction_no':(this.DATA.TRANSACTIONS.length + 1),
    'transaction_id':transaction_id,
    'desc':(obj.desc || transaction_desc),
    'entries':[entry_1, entry_2, entry_3]
  });
  this.DATA.TRANSACTIONS.push(transaction_1);

};