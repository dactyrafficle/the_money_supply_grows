
Economy.prototype.RETURN_SUMMARY_TABLE = function() {
  
  let tbody = document.createElement('tbody');
  
  
    for (let i = 0; i < this.DATA.TRANSACTIONS.length; i++) {
      
      let transaction = this.DATA.TRANSACTIONS[i];
      let tr = RETURN_TR();
      tbody.appendChild(tr);
      
      // THE DESCRIPTION
      (function() {
        let td = return_cell({});
        td.innerHTML = transaction.desc;
        tr.appendChild(td);
      })();
      
      // THE ENTRY
      (function() {
        let td = return_cell({});
        td.appendChild(transaction.RETURN_ENTRIES_IN_THE_TRANSACTION());
        tr.appendChild(td);
      })();

      // THE CUMULATIVE TRIAL BALANCE
      (function() {
        let td = return_cell({});
        td.appendChild(e1.return_trial_balance_for_each_agent_as_html_table(i));
        tr.appendChild(td);
      })();
      
      
      
    }
  
  return tbody;
  
};