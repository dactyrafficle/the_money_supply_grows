
let e1;
let main_container;
let summary_table_container;

(function() {

  window.addEventListener('load', function() {
    
    main_container = document.getElementById('main_container');
    summary_table_container = document.getElementById('summary_table_container');
    
    e1 = new Economy();
    
    // INITIALIZING
    e1.consumer_finds_gold({
      "x":5000,
      "desc":"<p> initialize the economy </p><p> the consumers havings things that everyone agrees have value </p><p> what if Dan borrows a chicken from Steve ?"
    });
    e1.central_bank_issues_currency_for_gold(4950);
    e1.consumer_deposits_currency_in_a_comercial_bank(4250);
    
    // THE TRIO
    e1.government_issues_government_bonds(1475);
    e1.central_bank_buys_bonds(1324);
    e1.consumer_borrows_from_commercial_bank(7000);
    
    summary_table_container.appendChild(e1.RETURN_SUMMARY_TABLE());
    

    // THE GENERAL JOURNAL IS THE LIST OF ALL THE RECORDS
    general_journal_container.appendChild(e1.return_general_journal_as_table());
    
  }); // closing window.onload

})(); // closing anon

function return_row() {
  let tr = document.createElement('tr');
  return tr;
};

function return_cell(obj) {
  let td = document.createElement('td');
  
  if (obj.hasOwnProperty('colSpan')) {
    td.colSpan = obj.colSpan;
  }
  
  if (obj.hasOwnProperty('innerHTML')) {
    td.innerHTML = obj.innerHTML;
  }
  
  return td;
};

function return_div(x) {
  let div = document.createElement('div');
  div.innerHTML = x;
  return div;
};
