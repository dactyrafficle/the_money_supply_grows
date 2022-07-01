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

function Entry(obj) {

/*
  obj = {
    'DR':[],
    'CR':[]
  }
*/
  this.entry_no = obj.entry_no;
  this.agent = obj.agent;
  this.DR = obj.DR;
  this.CR = obj.CR;

};


function Transaction(obj) {
  
  this.transaction_no = obj.transaction_no;
  this.entries = obj.entries;

};

Transaction.prototype.SHOW_ENTRIES = function() {
  
  let container = document.createElement('div');
  
  // FOR EACH ENTRY
  for (let i = 0; i < this.entries.length; i++) {
    
    let entry = this.entries[i];
    
    // MAKE A TABLE, APPEND IT TO THE CONTAINER
    let table = document.createElement('table');
    table.classList.add('mytables');
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

function RETURN_TR() {
  let tr = document.createElement('tr');
  return tr;
};

function RETURN_TH(obj) {
  let th = document.createElement('th');

  if (obj.hasOwnProperty('colSpan')) {
    th.colSpan = parseInt(obj.colSpan);
  }
  
  if (obj.hasOwnProperty('x')) {
    th.innerHTML = obj.x;
  }
  
  return th;
};

function RETURN_TD(obj) {
  let th = document.createElement('td');

  if (obj.hasOwnProperty('colSpan')) {
    th.colSpan = parseInt(obj.colSpan);
  }
  
  if (obj.hasOwnProperty('x')) {
    th.innerHTML = obj.x;
  }
  
  return th;
};