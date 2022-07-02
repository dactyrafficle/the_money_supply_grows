Economy.prototype.return_trial_balance_for_each_agent_as_html_table = function(n) {

  // go over all the records
  // all agents, all account_classes, all account_names

  let output = {};

  for (let y = 0; y < this.DATA.RECORDS.length; y++) {
    
    if (this.DATA.RECORDS[y].transaction_no > (n+1)) {
      break;
    }
    
    let record = this.DATA.RECORDS[y];
    let agent = record.agent;
    let account_class = record.account_class;
    let account_name = record.account_name;
    let amount = record.amount;
    
    // DOES OUT OUTPUT OBJECT HAVE A KEY FOR THIS AGENT ? IF NOT, CREATE IT
    if (!output.hasOwnProperty(agent)) {
      output[agent] = {};
    }
    
    // NOW, IT HAS A KEY FOR THIS AGENT
    if (output.hasOwnProperty(agent)) {

        // DOES THAT KEY (FOR THE AGENT), HAVE A KEY FOR THE ACCOUNT CLASS (ASSETS/LIABILITIES/EQUITY) ? IF NOT, CREATE IT
        if (!output[agent].hasOwnProperty(account_class)) {
          output[agent][account_class] = {};
        }
        
        // NOW, IT HAS A KEY FOR ACCOUNT CLASS. KEEP GOING.
        if (output[agent].hasOwnProperty(account_class)) {

          // DOES THAT KEY FOR ACCOUNT CLASS HAVE A KEY FOR THE SPECIFIC ACCOUNT ? IF NOT, CREATE IT
          if (!output[agent][account_class].hasOwnProperty(account_name)) {
            output[agent][account_class][account_name] = 0;
          }
          
          // NOW, IT HAS A KEY. ADD THE VALUE TO THE EXISTING VALUE
          if (output[agent][account_class].hasOwnProperty(account_name)) {
            output[agent][account_class][account_name] += amount;
          }
          
          
        }
      
    }
    
    
  }

  // output contains all the data we need
  console.log(output);
  
  let container = document.createElement('div');
  let agents = ['government', 'central_bank', 'commercial_banks', 'consumers'];
  
  for (let i = 0; i < agents.length; i++) {
    
    let agent = agents[i];
    
    let table = document.createElement('table');
    table.classList.add('mytables');
    
    let table_container = document.createElement('div');
    table_container.classList.add('box');
    table_container.classList.add('margin');
    table_container.appendChild(table);
    
    container.appendChild(table_container);
    
    let header = document.createElement('tr');
    table.appendChild(header);
    header.appendChild(return_cell({'innerHTML':agents[i],'colSpan':99}));
    
    let sub_header = document.createElement('tr');
    table.appendChild(sub_header);
    sub_header.appendChild(return_cell({'innerHTML':'assets','colSpan':1})); 
    sub_header.appendChild(return_cell({'innerHTML':'L+E','colSpan':1}));
    

    let tr = document.createElement('tr');
    table.appendChild(tr);
    let col_a = return_cell({'innerHTML':null,'colSpan':1});
    let col_b = return_cell({'innerHTML':null,'colSpan':1});
    
    col_a.style.padding = 0;
    col_b.style.padding = 0;
    
    tr.appendChild(col_a);
    tr.appendChild(col_b);
    
    let div_width = '70px';
    
    if (!output.hasOwnProperty(agent)) {
      let div = document.createElement('div');
      div.style.width = div_width;
      col_a.appendChild(div);
      
      div = document.createElement('div');
      div.style.width = div_width;
      col_b.appendChild(div);
    }
    
    if (output.hasOwnProperty(agent)) {
      
      // ASSETS
      if (output[agent].hasOwnProperty('assets')) {
        
        let assets = output[agents[i]].assets;
        Object.keys(assets).forEach(function(key, index, arr) {
          
          let account_name = key;
          let amount = assets[account_name];
          
          let div = document.createElement('div');
          div.style.width = div_width;
          div.style.padding = '3px';
          div.style.textAlign = 'right';
          div.innerHTML = amount;
          
          if (account_name === 'gold') {
            div.style.backgroundColor = '#fc09';
          }
          if (account_name === 'currency') {
            div.style.backgroundColor = '#58d9';
          }
          if (account_name === 'deposits') {
            div.style.backgroundColor = '#5c59';
          }
          if (account_name === 'reserves') {
            div.style.backgroundColor = '#f007';
          }
          col_a.appendChild(div);
          
        });
      }

      // LIABILITIES
      if (output[agent].hasOwnProperty('liabilities')) {
        
        let liabilities = output[agents[i]].liabilities;
        Object.keys(liabilities).forEach(function(key, index, arr) {
          
          let account_name = key;
          let amount = liabilities[account_name];
          
          let div = document.createElement('div');
          div.style.width = div_width;
          div.style.padding = '3px';
          div.style.textAlign = 'right';
          div.innerHTML = amount;
          
          if (account_name === 'gold') {
            div.style.backgroundColor = '#fc09';
          }
          if (account_name === 'currency') {
            div.style.backgroundColor = '#58d9';
          }
          if (account_name === 'deposits') {
            div.style.backgroundColor = '#5c59';
          }
          if (account_name === 'reserves') {
            div.style.backgroundColor = '#f007';
          }
          
          col_b.appendChild(div);
          
          
          
        });
      }
      
      // LIABILITIES
      if (output[agent].hasOwnProperty('equity')) {
        
        let equity = output[agents[i]].equity;
        Object.keys(equity).forEach(function(key, index, arr) {
          
          let account_name = key;
          let amount = equity[account_name];
          
          let div = document.createElement('div');
          div.style.width = div_width;
          div.style.padding = '3px';
          div.style.textAlign = 'right';
          div.innerHTML = amount;
          
          if (account_name === 'reserves') {
            div.style.backgroundColor = '#f007';
          }
          
          col_b.appendChild(div);
          
          
          
        });
      }
      
      
    }
    


    
  }

  return container;
};