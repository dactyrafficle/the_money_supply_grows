
Economy.prototype.consumer_deposits_currency_in_a_comercial_bank = function(obj) {
  
  let x = obj.x;
  
  let transaction_id = '003';
  let transaction_desc = 'consumers deposit currency in a commercial bank in exchange for deposits';
  
  // THE FIRST ENTRY
  
  let agent_1 = 'consumers';
  
  let record_1 = new Record({
    'year':this.current_year,
    'transaction_id':transaction_id,
    'transaction_no':(this.DATA.TRANSACTIONS.length + 1),
    'entry_no':(this.DATA.ENTRIES.length + 1),
    'record_no':(this.DATA.RECORDS.length + 1),
    'agent':agent_1,
    'record_type':'DR',
    'account_class':'assets',
    'account_name':'deposits, consumers',
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
    'record_type':'CR',
    'account_class':'assets',
    'account_name':'currency',
    'amount':-x
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

  let agent_2 = 'commercial_banks';
  
  let record_3 = new Record({
    'year':this.current_year,
    'transaction_id':transaction_id,
    'transaction_no':(this.DATA.TRANSACTIONS.length + 1),
    'entry_no':(this.DATA.ENTRIES.length + 1),
    'record_no':(this.DATA.RECORDS.length + 1),
    'agent':agent_2,
    'record_type':'DR',
    'account_class':'assets',
    'account_name':'currency',
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
    'account_class':'liabilities',
    'account_name':'deposits, consumers',
    'amount':x
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
    'transaction_id':transaction_id,
    'desc':(obj.desc || transaction_desc),
    'entries':[entry_1, entry_2]
  });
  this.DATA.TRANSACTIONS.push(transaction_1);
  
};