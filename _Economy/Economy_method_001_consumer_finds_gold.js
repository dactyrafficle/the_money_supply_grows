
Economy.prototype.consumer_finds_gold = function(obj) {

  let x = obj.x; // THE MINIMUM THIS FUNCTION ACCEPTS AS A PARAMETER

  let transaction_id = "001-INIT";
  let transaction_desc = 'consumers find gold and agree it has value'; // DEFAULT
    
  // ENTRY 1
  let agent_1 = 'consumers';
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
        'account_name':'gold',
        'amount':x
      })
    ],
    'CR':[
      this.ADD_RECORD({
        'year':'2022',
        'transaction_id':transaction_id,
        'agent':agent_1,
        'record_type':'CR',
        'account_class':'equity',
        'account_name':'equity',
        'amount':x
      })
    ]
  });
  this.DATA.ENTRIES.push(entry_1);
  
  // THE TRANSACTION SUMMARY
  let transaction_1 = new Transaction({
    'transaction_no':(this.DATA.TRANSACTIONS.length + 1),
    'transaction_id':transaction_id,
    'desc':(obj.desc || transaction_desc),
    'entries':[entry_1]
  });
  this.DATA.TRANSACTIONS.push(transaction_1);

};