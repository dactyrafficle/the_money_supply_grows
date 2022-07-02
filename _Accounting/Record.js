function Record(obj) {
  
  this.year = obj.year; // year
  
  this.transaction_no = obj.transaction_no; // a bunch of transactions might be a group
  this.transaction_id = obj.transaction_id; // the code representing the transaction
  
  this.entry_no = obj.entry_no; // AT LEAST 2 RECORDS FOR A GIVEN AGENT, BALANCING VIA A = L + E
  this.record_no = obj.record_no; // A SINGLE LINE ON THE GENERAL JOURNAL
  this.agent = obj.agent;
  
  this.account_class = obj.account_class;
  
  this.record_type = (obj.record_type || null);
  
  this.account_name = obj.account_name;
  this.amount = obj.amount;
  
};





