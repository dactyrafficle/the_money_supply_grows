Economy.prototype.return_general_journal_as_table = function() {

  let arr = [
    'year',
    'transaction_no',
    'transaction_id',
    'entry_no',
    'record_no',
    'agent',
    'account_class',
    'account_name',
    'amount'
  ];

  let table = document.createElement('table');
  table.classList.add('mytables');

  let header = document.createElement('tr');
  table.appendChild(header);
  for (let x = 0; x < arr.length; x++) {
    header.appendChild(return_cell({'innerHTML':arr[x].replace(/_/g,' '),'colSpan':1})); 
  }

  for (let y = 0; y < this.DATA.RECORDS.length; y++) {
   
    let obj = this.DATA.RECORDS[y];  // the record
   
    let row = document.createElement('tr');
    table.appendChild(row);
    
    for (let x = 0; x < arr.length; x++) {
      let key = arr[x]; // the key, or property
      row.appendChild(return_cell({'innerHTML':obj[key],'colSpan':1})); 
    }
    
  }

  return table;
};