
Economy.prototype.consumer_finds_gold = function(obj) {

  // a transaction contains 1 or more entries
  // an entry contains 2 or more records (for the same agent)

  let transaction_id = '001';
  let desc = 'consumers find gold and establish its value';
  
  if (obj.hasOwnProperty('desc')) {
    desc = obj.desc;
  }

  let x = obj.x;
  
  let agent = 'consumers';
  
  let record_1 = new Record({
    'year':this.current_year,
    'transaction_id':transaction_id,
    'transaction_no':(this.DATA.TRANSACTIONS.length + 1),
    'entry_no':(this.DATA.ENTRIES.length + 1),
    'record_no':(this.DATA.RECORDS.length + 1),
    'agent':agent,
    'record_type':'DR',
    'account_class':'assets',
    'account_name':'gold',
    'amount':x
  });
  this.DATA.RECORDS.push(record_1);
  
  let record_2 = new Record({
    'year':this.current_year,
    'transaction_id':transaction_id,
    'transaction_no':(this.DATA.TRANSACTIONS.length + 1),
    'entry_no':(this.DATA.ENTRIES.length + 1),
    'record_no':(this.DATA.RECORDS.length + 1),
    'agent':agent,
    'record_type':'CR',
    'account_class':'equity',
    'account_name':'equity',
    'amount':x
  });
  this.DATA.RECORDS.push(record_2);
  
  // THE ENTRY SUMMARY
  let entry_1 = new Entry({
    'entry_no':(this.DATA.ENTRIES.length+1),
    'agent':agent,
    'DR':[record_1],
    'CR':[record_2]
  });
  this.DATA.ENTRIES.push(entry_1);

  
  // THE TRANSACTION SUMMARY
  let transaction_1 = new Transaction({
    'transaction_no':(this.DATA.TRANSACTIONS.length + 1),
    'desc':desc,
    'entries':[entry_1]
  });
  this.DATA.TRANSACTIONS.push(transaction_1);

};