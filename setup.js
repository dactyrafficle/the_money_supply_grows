
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
    
    // THE GOVERNMENT ISSUES GOVERNMENT BONDS
    e1.government_issues_government_bonds({
      "x":1475,
      "desc":"<h4> the government creates and sells bonds </h4><p> commercial banks are an intermediary </p>"
    });
    
    // THE CENTRAL BANK INCREASES ITS RESERVES
    e1.central_bank_increases_reserves({
      "x":1324,
      "desc":"<h4> omo, part 1 </h4><p> the central bank increases its reserves </p><p> this is like, the central bank owes the commercial bank x </p><p> and the commercial bank owes the central bank x </p>"
    });
    
    // THE CENTRAL BANK BUYS BONDS FROM CONSUMERS, USING THE COMMERCIAL BANK AS AN INTERMEDIARY
    e1.central_bank_buys_bonds({
      "x":1324,
      "desc":"<h4> omo, part 2 </h4><p> the central bank buys government bonds from consumers </p><p> commercial banks are the intermediary </p>"
    });

    // CONSUMERS TAKE OUT LOANS
    e1.consumer_borrows_from_commercial_bank({
      "x":2124,
      "desc":"<h4> consumers take out loans </h4><p> they borrow money from the commercial bank </p>"
    });
    
    // END OF THE TRANSACTIONS
    
    // SUMMARIES
    summary_table_container.appendChild(e1.RETURN_SUMMARY_TABLE());
    

    // THE GENERAL JOURNAL IS THE LIST OF ALL THE RECORDS
    general_journal_container.appendChild(e1.return_general_journal_as_table());
    
  }); // closing window.onload

})(); // closing anon

