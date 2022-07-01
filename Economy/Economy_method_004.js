Economy.prototype.government_issues_government_bonds = function(x) {
  
  let transaction_id = "GIB";
  let transaction_desc = 'gov issues gov bonds';

  // THE FIRST ENTRY
  
  let agent_1 = 'government';

  let record_1 = new Record({
    'year':this.current_year,
    'transaction_id':transaction_id,
    'transaction_no':(this.DATA.TRANSACTIONS.length + 1),
    'entry_no':(this.DATA.ENTRIES.length + 1),
    'record_no':(this.DATA.RECORDS.length + 1),
    'agent':agent_1,
    'record_type':'DR',
    'account_class':'assets',
    'account_name':'deposits',
    'amount':x
  });
  this.DATA.RECORDS.push(record_1);

  let record_2 = new Record({
    'year':this.current_year,
    'transaction_id':transaction_id,
    'transaction_no':(this.DATA.TRANSACTIONS.length + 1),
    'entry_no':(this.DATA.ENTRIES.length + 1),
    'record_no':(this.DATA.RECORDS.length + 1),
    'agent':agent_1,
    'record_type':'DR',
    'account_class':'liabilities',
    'account_name':'government bonds',
    'amount':x
  });
  this.DATA.RECORDS.push(record_2);

  // THE ENTRY SUMMARY
  let entry_1 = new Entry({
    'entry_no':(this.DATA.ENTRIES.length+1),
    'agent':agent_1,
    'DR':[record_1],
    'CR':[record_2]
  });
  this.DATA.ENTRIES.push(entry_1);
  
  
  // THE SECOND ENTRY

  let agent_2 = 'consumers';
  
  let record_3 = new Record({
    'year':this.current_year,
    'transaction_id':transaction_id,
    'transaction_no':(this.DATA.TRANSACTIONS.length + 1),
    'entry_no':(this.DATA.ENTRIES.length + 1),
    'record_no':(this.DATA.RECORDS.length + 1),
    'agent':agent_2,
    'record_type':'DR',
    'account_class':'assets',
    'account_name':'government bonds',
    'amount':x
  });
  this.DATA.RECORDS.push(record_3);
  
  let record_4 = new Record({
    'year':this.current_year,
    'transaction_id':transaction_id,
    'transaction_no':(this.DATA.TRANSACTIONS.length + 1),
    'entry_no':(this.DATA.ENTRIES.length + 1),
    'record_no':(this.DATA.RECORDS.length + 1),
    'agent':agent_2,
    'record_type':'CR',
    'account_class':'assets',
    'account_name':'deposits',
    'amount':-x
  });
  this.DATA.RECORDS.push(record_4);
  
  // THE ENTRY SUMMARY
  let entry_2 = new Entry({
    'entry_no':(this.DATA.ENTRIES.length+1),
    'agent':agent_2,
    'DR':[record_3],
    'CR':[record_4]
  });
  this.DATA.ENTRIES.push(entry_2);

  // THE TRANSACTION SUMMARY
  let transaction_1 = new Transaction({
    'transaction_no':(this.DATA.TRANSACTIONS.length + 1),
    'entries':[entry_1, entry_2]
  });
  this.DATA.TRANSACTIONS.push(transaction_1);

};