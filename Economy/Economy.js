function Economy() {
  
  this.current_year = 1;
  
  // A TRANSACTION IS A GROUP OF ENTRIES WHICH ARE RELATED
  this.current_transaction_no = 1;
  
  // AN ENTRY IS AT LEAST 2 RECORDS MADE FOR THE SAME AGENT, WHICH BALANCE ACCORDING TO A = L + E
  this.current_entry_no = 1;
  
  // A RECORD IS A SINGLE LINE IN THE GENERAL JOURNAL (IE. BOB : CASH + 1000)
  this.current_record_no = 1;

  this.DATA = {
    'TRANSACTIONS':new Array(),
    'ENTRIES':new Array(),
    'RECORDS':new Array()
  };
  
  /*
  this.NEW_TRANSACTION = function() {
    
    // autoincrement
    let n = this.DATA.TRANSACTIONS.length;
    this.DATA.TRANSACTIONS[n] = new Transaction() {
      this.transaction_no = n;
      this.entries = {};
    }
    
  }; */

};


Economy.prototype.ADD_RECORD = function(obj) {
  
  /*
  {
    'year':this.current_year,
    'transaction_id':transaction_id,
    'agent':agent_1,
    'record_type':'DR',
    'account_class':'assets',
    'account_name':'government bonds',
    'amount':x
    
  }
  
  */
  
  let record = new Record({
    'transaction_no':(this.DATA.TRANSACTIONS.length + 1),
    'entry_no':(this.DATA.ENTRIES.length + 1),
    'record_no':(this.DATA.RECORDS.length + 1),
    'year':obj.year,
    'transaction_id':obj.transaction_id,
    'agent':obj.agent,
    'record_type':obj.record_type,
    'account_class':obj.account_class,
    'account_name':obj.account_name,
    'amount':obj.amount
  });
  
  this.DATA.RECORDS.push(record);

  return record;
};
