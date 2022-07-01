Economy.prototype.central_bank_issues_currency_for_gold = function(x) {

  let transaction_id = '002';
  let transaction_desc = "the central bank issues currency, giving it to consumers in exchange for gold";
  
  // THE FIRST ENTRY
  
  let agent_1 = 'central_bank';
  
  // TRANSACTION 1
  let record_1 = new Record({
    'year':this.current_year,
    'transaction_id':transaction_id,
    'transaction_no':(this.DATA.TRANSACTIONS.length + 1),
    'entry_no':(this.DATA.ENTRIES.length + 1),
    'record_no':(this.DATA.RECORDS.length + 1),
    'agent':agent_1,
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
    'agent':agent_1,
    'record_type':'CR',
    'account_class':'liabilities',
    'account_name':'currency',
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
    'account_name':'gold',
    'amount':-x
  });
  this.DATA.RECORDS.push(record_3);
  
  let record_4 = new Record({
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
  this.DATA.RECORDS.push(record_4);
  
  // THE ENTRY SUMMARY
  let entry_2 = new Entry({
    'entry_no':(this.DATA.ENTRIES.length+1),
    'agent':agent_2,
    'DR':[record_4],
    'CR':[record_3]
  });
  this.DATA.ENTRIES.push(entry_2);
  
  

  // THE TRANSACTION SUMMARY
  let transaction_1 = new Transaction({
    'transaction_no':(this.DATA.TRANSACTIONS.length + 1),
    'entries':[entry_1, entry_2]
  });
  this.DATA.TRANSACTIONS.push(transaction_1);
  
};