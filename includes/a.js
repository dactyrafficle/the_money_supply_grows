
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