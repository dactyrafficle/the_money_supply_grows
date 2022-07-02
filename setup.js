
let e1;
let main_container;
let summary_table_container;

(function() {

  window.addEventListener('load', function() {
    
    main_container = document.getElementById('main_container');
    summary_table_container = document.getElementById('summary_table_container');
    
    e1 = new Economy();
    
    // STARTING THE TRANSACTIONS
    
    // INITIALIZING
    e1.consumer_finds_gold({
      "x":5000,
      "desc":"<p> initializing the economy </p><p> the consumers havings things that everyone agrees have value </p>"
    });
    
    e1.central_bank_issues_currency_for_gold({
      "x":4950,
      "desc":"<p> the central bank is born </p><p> it issues currency, giving it to consumers in exchange for gold </p>"
    });
    
    e1.consumer_deposits_currency_in_a_comercial_bank({
      "x":4250,
      "desc":"<p> someone opens a commercial bank </p><p> consumers use it to deposit some of their currency </p><p> the bank accept currency, and records the deposits </p>"
    });
    
    // THE TRIO
    e1.government_issues_government_bonds(1475);
    e1.central_bank_buys_bonds(1324);
    e1.consumer_borrows_from_commercial_bank(7000);
    
    // END OF THE TRANSACTIONS
    
    // SUMMARIES
    summary_table_container.appendChild(e1.RETURN_SUMMARY_TABLE());
    

    // THE GENERAL JOURNAL IS THE LIST OF ALL THE RECORDS
    general_journal_container.appendChild(e1.return_general_journal_as_table());
    
  }); // closing window.onload

})(); // closing anon

