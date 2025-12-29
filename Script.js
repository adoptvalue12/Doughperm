// Recherche des fruits
document.getElementById("search").addEventListener("keyup", function(){
  let value = this.value.toLowerCase();
  let rows = document.querySelectorAll("#fruitTable tr");
  rows.forEach((row,index)=>{if(index===0) return; row.style.display=row.textContent.toLowerCase().includes(value)?'':'none';});
});

// Trade Calculator
let giveList = [];
let receiveList = [];

function addTrade(name, phys, perm, side){
  let val = perm; // utilise valeur permanente
  let list = (side==='give')?giveList:receiveList;
  list.push({name,val});
  updateTradeDisplay();
}

function updateTradeDisplay(){
  let giveUl = document.getElementById('giveList');
  let receiveUl = document.getElementById('receiveList');
  giveUl.innerHTML = ''; receiveUl.innerHTML='';
  let sumGive=0,sumReceive=0;
  giveList.forEach(f=>{giveUl.innerHTML+='<li>'+f.name+': '+f.val.toLocaleString()+'</li>'; sumGive+=f.val;});
  receiveList.forEach(f=>{receiveUl.innerHTML+='<li>'+f.name+': '+f.val.toLocaleString()+'</li>'; sumReceive+=f.val;});
  let diff = sumReceive - sumGive;
  let text = 'Différence totale: '+diff.toLocaleString()+' ';
  if(diff>0) text+='✅ Bon trade';
  else if(diff<0) text+='⚠️ Mauvais trade';
  else text+='⚖️ Trade équilibré';
  document.getElementById('diffText').textContent=text;
}
