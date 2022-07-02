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



<script src='./RETURN_SUMMARY_TABLE.js'></script>

<script src='./return_general_journal_as_table.js'></script>
<script src='./return_trial_balance_for_each_agent_as_html_table.js'></script>


<script src='./setup.js'></script>



<div class='section border margin padding' id='main_container'> <!-- opening L0 -->

  <div class='mytables' id='summary_table_container'></div>

  <!--
  <div style='display: flex; flex-direction: row; border: 1px solid #58d;'>
    <div class='border margin padding'> desc </div>
    <div class='border margin padding'> entries </div>
    <div class='border margin padding' style='flex-grow:1;' > trial balance </div>
  </div>
  -->
  
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
    <ul>
      <li><p> what happens if later on, someone finds something with value (ie. finds copper?) </p>
      <li><p> what if someone cuts down a tree for wood, makes a house ? </p>
      <li><p> what if someone catches fish ? someone buys that fish and cooks it, and sells that ? </p>
      <li><p> are people just making up prices, ie. how much to sell the cooked fish ? ie. i spent 2h fishing, and 2h cooking = 4h, and i could have made 10 loaves of bread with that but theres risk in fishing, so maybe i think the cooked fish are worth 13 loaves of bread. and price them accordingly ? </p>
    </ul>
    <p> profit. taxes. interest. price volatility. </p>
    <p> i wont even try to go past the handful of transactions i have so far. it more or less shows how the money supply grows. at this point the economy has a life of its own. people do their own thing with prices and so on. </p>
  </div>
  
</div>

