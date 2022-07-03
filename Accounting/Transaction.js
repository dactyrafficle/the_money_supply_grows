function Transaction(obj) {
  
  this.transaction_no = obj.transaction_no;
  
  this.transaction_id = (obj.transaction_id || null);
  this.desc = (obj.desc || null);
  this.entries = obj.entries;

};

Transaction.prototype.RETURN_ENTRIES_IN_THE_TRANSACTION = function() {
  
  let container = document.createElement('div');
  
  // FOR EACH ENTRY
  for (let i = 0; i < this.entries.length; i++) {
    
    let entry = this.entries[i];
    
    // MAKE A TABLE, APPEND IT TO THE CONTAINER
    let table = document.createElement('table');
    table.classList.add('mytables');
    table.classList.add('margin');
    container.appendChild(table);
    
    // THE HEADER CONTAINS THE AGENT NAME
    let header = RETURN_TR();
    header.appendChild(RETURN_TH({'x':entry.agent,'colSpan':99}));
    table.appendChild(header);
    
    // THE SUBHEADER LABELS THE COLUMNS
    let sub_header = RETURN_TR();
    sub_header.appendChild(RETURN_TH({'x':'&middot;'}));
    sub_header.appendChild(RETURN_TH({'x':'DR'}));
    sub_header.appendChild(RETURN_TH({'x':'CR'}));
    table.appendChild(sub_header);
    
    // START WITH THE DEBIT ENTRIES
    for (let j = 0; j < entry.DR.length; j++) {
      
      let record = entry.DR[j];
      
      // MAKE A ROW
      let row = RETURN_TR();
      row.appendChild(RETURN_TD({'x':record.account_name}));
      row.appendChild(RETURN_TD({'x':Math.abs(record.amount)}));
      row.appendChild(RETURN_TD({}));
      table.appendChild(row);
    }
    
    
    // THEN WE DO THE CREDIT ENTRIES
    for (let j = 0; j < entry.CR.length; j++) {
      
      let record = entry.CR[j];
      
      // MAKE A ROW
      let row = RETURN_TR();
      row.appendChild(RETURN_TD({'x':record.account_name}));
      row.appendChild(RETURN_TD({}));
      row.appendChild(RETURN_TD({'x':Math.abs(record.amount)}));
      table.appendChild(row);
    }
    
  }
  
  return container;
  
};