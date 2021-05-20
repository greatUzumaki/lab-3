let Arr = [[]];

// Заполнение массива нолями "заглушками"
const generateTable = () => {
  for (let i = 0; i < 8; i++) {
    Arr[i] = [];
    for (let j = 0; j < 8; j++) {
      if (i == j) Arr[i][j] = 1;
      else Arr[i][j] = 0;
    }
  }

  createTable(Arr);
};

// Генерация таблицы
const createTable = (arr) => {
  let html = '<table border="1">';

  html += '<tr><td></td>';
  for (let i = 0; i < 8; i++) {
    html += `<td class="tableElem">x${i + 1}</td>`;
  }
  html += '</tr>';

  for (let i = 0; i < 8; i++) {
    html += `<tr><td class="tableElem">x${i + 1}</td>`;
    for (let j = 0; j < 8; j++) {
      if (i == j)
        html += `<td><input type="number" value="${arr[i][j]}" readonly/></td>`;
      else
        html += `<td><input type="number" onchange="autoFill(${i}, ${j}, this.value)" value="${arr[i][j]}"/></td>`;
    }
    html += '</tr>';
  }

  html += '</table>';

  document.getElementById('content').innerHTML = html;
};

// Симметричное автозаполнение
const autoFill = (i, j, e) => {
  let res;
  Arr[i][j] = e;
  if (e == 0) res = 0;
  else res = 1 / e;
  Arr[j][i] = res;
  Arr = Arr.map((subArr) => subArr.map((x) => Number(x)));
  createTable(Arr);
  vectors();
};

// Векторы
function vectors() {
  vectorK(Arr);
}

// Вектор K
function vectorK(arr) {
  let s = [];
  for (i = 0; i < 8; i++) {
    let sum = 0;
    for (let j = 0; j < 8; j++) {
      sum += arr[j][i];
    }
    s.push(sum);
  }

  for (let i = 0; i < 8; i++) {
    document.getElementById(`k${i}`).innerHTML = s[i];
  }
}
