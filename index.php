<?php
 include "./includes.php";
?>


<script src='./Record.js'></script>

<script src='./Economy/Economy.js'></script>
<script src='./Economy/Economy_method_001_consumer_finds_gold.js'></script>
<script src='./Economy/Economy_method_002_central_bank_issues_currency.js'></script>
<script src='./Economy/Economy_method_003.js'></script>
<script src='./Economy/Economy_method_004.js'></script>
<script src='./Economy/Economy_method_005_omo.js'></script>
<script src='./Economy/Economy_method_006.js'></script>


<script src='./return_general_journal_as_table.js'></script>
<script src='./return_trial_balance_for_each_agent_as_html_table.js'></script>


<script src='./setup.js'></script>



<div class='section border margin padding'> <!-- opening L0 -->

  <div class='section border margin padding'>
      <div class='box' id='trial_balance_container'></div>
    <div class='box' id='general_journal_container'></div>

  </div>

  <div class='section border margin padding'>
    <h4> observations </h4>
    <p> the government issues bonds, slowly, over time, to raise money to spend </p>
    <p> the central bank buys bonds, to increase the money supply, to keep pace with the growing economy </p>
    <p> the government and the central bank could work together tho, couldn't they ? </p>
    <p> prices will be fixed in the short term, but over time, they will change </p>
  </div>

  <div class='section border margin padding'>
    <h4> model complexity </h4>
    <p> profit. taxes. interest. price volatility. </p>
    <p> i wont even try to go past the handful of transactions i have so far. it more or less shows how the money supply grows. at this point the economy has a life of its own. people do their own thing with prices and so on. </p>
  </div>
  
</div>

