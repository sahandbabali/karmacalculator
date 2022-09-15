var addbutton = document.getElementById("addbutton");
var selectproduct = document.getElementById("selectproduct");
var productcount = document.getElementById("productcount");
var itemstablebody = document
  .getElementById("itemstable")
  .getElementsByTagName("tbody")[0];
var totalpartsdiv = document.getElementById("totalpartsdiv");

var itemlist = [];
var totallist = {
  totalcm: 0,
  totalparts: {
    A: 0,
    B: 0,
    C: 0,
    D: 0,

    I: 0,
    II: 0,
    III: 0,
    IV: 0,
    V: 0,
    VI: 0,
    VII: 0,
    VIII: 0,

    S: 0,
    M: 0,
    X: 0,
    Z: 0,

    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    9: 0,
  },
};

var productdata = {
  E1A: { A: 2, I: 1, S: 1, 1: 1 },
  E1B: { A: 2, II: 1, M: 1, 2: 1 },
  E2A: { A: 2, I: 1, II: 1, M: 1, 2: 1 },
  E2D: { B: 2, I: 2, S: 1, 2: 1 },
  E2L: { B: 1, I: 1, II: 1, V: 1, S: 1, 3: 1 },

  E3L: { B: 1, I: 2, II: 1, V: 1, S: 1, 3: 1 },
  E2C: { A: 2, I: 1, III: 1, X: 1, 4: 1 },
  E3A: { A: 2, I: 2, III: 1, X: 1, 4: 1 },
  E3D: { A: 2, I: 3, II: 1, VI: 1, S: 1, 5: 1 },
  E4D: { A: 2, I: 4, VI: 1, S: 1, 5: 1 },

  E2B: { B: 2, II: 2, M: 1, 3: 1 },
  E3B: { B: 2, I: 1, II: 2, M: 1, 3: 1 },
  E4A: { B: 2, I: 2, II: 2, M: 1, 3: 1 },
  E2E: { A: 2, I: 1, IV: 1, Z: 1, 6: 1 },
  E3E: { A: 2, I: 2, IV: 1, Z: 1, 6: 1 },

  E4E: { A: 2, I: 3, IV: 1, Z: 1, 6: 1 },
  E4C: { B: 2, I: 2, III: 2, X: 1, 4: 1 },
  E5A: { B: 2, I: 3, III: 2, X: 1, 4: 1 },
  E4B: { C: 2, I: 1, II: 3, M: 1, 4: 1 },
  E5B: { C: 2, I: 2, II: 3, M: 1, 4: 1 },

  E5C: { C: 2, I: 2, II: 3, M: 1, 4: 1 },
  E6C: { C: 2, I: 3, II: 3, M: 1, 4: 1 },
  E6A: { B: 2, I: 4, III: 2, M: 1, 4: 1 },
  E4F: { A: 2, I: 4, IV: 1, VII: 1, M: 1, 7: 1 },
  E5F: { A: 2, I: 5, IV: 1, VII: 1, M: 1, 7: 1 },

  E6F: { A: 2, I: 6, IV: 1, VII: 1, M: 1, 7: 1 },
  E6L: { A: 1, C: 1, I: 5, V: 1, VIII: 1, M: 1, 8: 1 },
  E6E: { B: 2, I: 4, IV: 2, Z: 1, 7: 1 },
  E6D: { B: 2, I: 4, IV: 2, Z: 1, 7: 1 },
  E7B: { B: 2, I: 5, IV: 2, Z: 1, 7: 1 },

  E8A: { B: 2, I: 6, IV: 2, Z: 1, 7: 1 },
  E6B: { C: 2, I: 3, III: 3, X: 1, 8: 1 },
  E7A: { C: 2, I: 4, III: 3, X: 1, 8: 1 },
  E9A: { C: 2, I: 6, III: 3, X: 1, 8: 1 },
  E12: { D: 2, I: 8, IV: 4, Z: 1 },

  E16: { D: 2, I: 12, IV: 4, Z: 1 },
};

var woodlength = {
  A: 100,
  B: 189,
  C: 278,
  D: 375,

  I: 8,
  II: 170,
  III: 259,
  IV: 348,
  V: 178,
  VI: 278,
  VII: 368,
  VIII: 267,

  S: 120,
  M: 210,
  X: 300,
  Z: 390,

  1: 0,
  2: 0,
  3: 0,
  4: 0,
  5: 0,
  6: 0,
  7: 0,
  8: 0,
  9: 0,
};

addbutton.onclick = function () {
  // add item to list
  let currentitem = {};
  currentitem.name = selectproduct.value;
  currentitem.count = productcount.value;
  itemlist.push(currentitem);
  console.log(itemlist);

  // update items list
  updateitemslist();

  // updatetotal
  updatetotal();
};

function updateitemslist() {
  itemstablebody.innerHTML = ``;
  for (var i = 0; i < itemlist.length; i++) {
    itemstablebody.innerHTML += `<tr>
      <th scope="row">${i + 1}</th>
      <td>${itemlist[i].name}</td>
      <td>${itemlist[i].count}</td>
</tr>`;
  }
}

function updatetotal() {
  //clear the total box
  totalpartsdiv.innerHTML = ``;
  // reset the total list
  totallist = {
    totalcm: 0,
    totalparts: {
      A: 0,
      B: 0,
      C: 0,
      D: 0,

      I: 0,
      II: 0,
      III: 0,
      IV: 0,
      V: 0,
      VI: 0,
      VII: 0,
      VIII: 0,

      S: 0,
      M: 0,
      X: 0,
      Z: 0,

      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
      6: 0,
      7: 0,
      8: 0,
      9: 0,
    },
  };

  // calculate the total

  for (var i = 0; i < itemlist.length; i++) {
    // add parts to total list
    Object.keys(productdata[itemlist[i].name]).forEach(function (key) {
      totallist.totalparts[key] +=
        Number(productdata[itemlist[i].name][key]) * itemlist[i].count;
    });
  }
  console.log(totallist.totalparts);

  // update total box ui
  let ii = 1;
  Object.keys(totallist.totalparts).forEach(function (key) {
    if (totallist.totalparts[key] != 0) {
      // update total cm
      totallist.totalcm += woodlength[key] * totallist.totalparts[key];
      // update total table ui
      totalpartsdiv.innerHTML += `<tr>
      <th scope="row">${ii}</th>
      <td>${key}</td>
      <td>${totallist.totalparts[key]}</td>
</tr>`;
      ii++;
    }
  });

  document.getElementById("totalcmui").innerText = totallist.totalcm;
}
