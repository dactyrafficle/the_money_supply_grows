
let e1;
(function() {

  window.addEventListener('load', function() {
    
    e1 = new Economy();
    
    let table = document.createElement('table');
    table.classList.add('mytables');
    trial_balance_container.appendChild(table);
    
    (function() {
      
      let tr = document.createElement('tr');
      table.appendChild(tr);
      
      let cells = [];
      
      cells[0] = return_cell({'innerHTML':'il y a une groupe de personnes qui habitent qqpart cest pas important. a bunch of people in a village have been living their lives, and they use these rocks to trade for stuff. everyone agrees the rocks have value','colSpan':1});
      cells[0].style.maxWidth = '30vw';
      
      cells[1] = return_cell({'innerHTML':null,'colSpan':1});
      cells[2] = return_cell({'innerHTML':null,'colSpan':1});
      
      tr.appendChild(cells[0]);
      tr.appendChild(cells[1]);
      tr.appendChild(cells[2]);

      e1.consumer_finds_gold(5000);
      cells[1].appendChild(e1.DATA.TRANSACTIONS[0].SHOW_ENTRIES());
      cells[2].appendChild(e1.return_trial_balance_for_each_agent_as_html_table());  
      
    })();
    
    (function() {
      
      let tr = document.createElement('tr');
      table.appendChild(tr);
      
      let cells = [];
      
      cells[0] = return_cell({'innerHTML':'but the rocks are heavy, and hard to carry. so everyone puts their rocks in the middle of the village. Everyone trusts Helen, who is a yellow lab, to issue pieces of paper with numbers on them to each person who threw their rocks in the pile. The smallest rocks are 1. The shiny rocks are 2. Helen is the central bank.','colSpan':1});
      cells[0].style.maxWidth = '30vw';
      
      cells[1] = return_cell({'innerHTML':null,'colSpan':1});
      cells[2] = return_cell({'innerHTML':null,'colSpan':1});
      
      tr.appendChild(cells[0]);
      tr.appendChild(cells[1]);
      tr.appendChild(cells[2]);

      e1.central_bank_issues_currency_for_gold(4950);
      cells[1].appendChild(e1.DATA.TRANSACTIONS[1].SHOW_ENTRIES());
      cells[2].appendChild(e1.return_trial_balance_for_each_agent_as_html_table());  
      
    })();

    (function() {
      
      let tr = document.createElement('tr');
      table.appendChild(tr);
      
      let cells = [];
      cells[0] = return_cell({'innerHTML':'<h4>consumers deposit currency in a commercial bank </h4> <p> but even the paper can be inconvenient. Le papier est facile à voler. Seymore est une abeille. Some people take their currency to Seymore so that he can hold it for them. He does. And he writes down on his little ledger who gave him how many pieces of paper. Seymore is a commercial bank. </p>','colSpan':1});
      cells[0].style.maxWidth = '30vw';
      
      cells[1] = return_cell({'innerHTML':null,'colSpan':1});
      cells[2] = return_cell({'innerHTML':null,'colSpan':1});
      
      tr.appendChild(cells[0]);
      tr.appendChild(cells[1]);
      tr.appendChild(cells[2]);
      
      e1.consumer_deposits_currency_in_a_comercial_bank(4250);
      cells[1].appendChild(e1.DATA.TRANSACTIONS[2].SHOW_ENTRIES());
      cells[2].appendChild(e1.return_trial_balance_for_each_agent_as_html_table()); 
      
    })();

    (function() {
      
      let tr = document.createElement('tr');
      table.appendChild(tr);
      
      let cells = [];
      cells[0] = return_cell({'innerHTML':'<h4> . </h4> <p> the government issues bonds </p>','colSpan':1});
      cells[0].style.maxWidth = '30vw';
      
      cells[1] = return_cell({'innerHTML':null,'colSpan':1});
      cells[2] = return_cell({'innerHTML':null,'colSpan':1});
      
      tr.appendChild(cells[0]);
      tr.appendChild(cells[1]);
      tr.appendChild(cells[2]);
      
      e1.government_issues_government_bonds(1475);
      cells[1].appendChild(e1.DATA.TRANSACTIONS[3].SHOW_ENTRIES());
      cells[2].appendChild(e1.return_trial_balance_for_each_agent_as_html_table()); 
      
    })();

    
    (function() {
      
      let tr = document.createElement('tr');
      table.appendChild(tr);
      
      let cells = [];
      cells[0] = return_cell({'innerHTML':'<h4> . </h4> <p> . </p>','colSpan':1});
      cells[0].style.maxWidth = '30vw';
      
      cells[1] = return_cell({'innerHTML':null,'colSpan':1});
      cells[2] = return_cell({'innerHTML':null,'colSpan':1});
      
      tr.appendChild(cells[0]);
      tr.appendChild(cells[1]);
      tr.appendChild(cells[2]);
      
      e1.central_bank_buys_bonds(1324);
      cells[1].appendChild(e1.DATA.TRANSACTIONS[4].SHOW_ENTRIES());
      cells[2].appendChild(e1.return_trial_balance_for_each_agent_as_html_table()); 
      

      

       
      
    })();
    
    (function() {
      
      let tr = document.createElement('tr');
      table.appendChild(tr);
      
      let cells = [];
      cells[0] = return_cell({'innerHTML':'<h4> consumers take out loans </h4> <p> consumers take out loans </p>','colSpan':1});
      cells[0].style.maxWidth = '30vw';
      
      cells[1] = return_cell({'innerHTML':null,'colSpan':1});
      cells[2] = return_cell({'innerHTML':null,'colSpan':1});
      
      tr.appendChild(cells[0]);
      tr.appendChild(cells[1]);
      tr.appendChild(cells[2]);
      
      e1.consumer_borrows_from_commercial_bank(7000);
      cells[1].appendChild(e1.DATA.TRANSACTIONS[5].SHOW_ENTRIES());
      cells[2].appendChild(e1.return_trial_balance_for_each_agent_as_html_table());
     
      
    })();
    
    
    
    
    // the trio
    // 1. the government issues bonds
    // 2. the central bank buys bonds
    // 3. consumers take out loans



    // THE GENERAL JOURNAL IS THE LIST OF ALL THE RECORDS
    general_journal_container.appendChild(e1.return_general_journal_as_table());
    
  }); // closing window.onload

})(); // closing anon

function return_cell(obj) {
  let td = document.createElement('td');
  td.colSpan = obj.colSpan;
  td.innerHTML = obj.innerHTML;
  return td;
}

function return_div(x) {
  let div = document.createElement('div');
  div.innerHTML = x;
  return div;
}
