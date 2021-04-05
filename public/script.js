async function getData() {
  const request = await fetch('/api/dining');
  const data = await request.json();
  return data;
}

async function dataHandler() {
  const targetTable = document.querySelector('.target-table');
  const table = document.querySelector('.table');
  const diningrequest = await fetch('/api/dining');
  const diningdata = await diningrequest.json();
  diningdata.data.forEach((item) => {
    const appendItem = document.createElement('tr');
    appendItem.classList.add('td');
    appendItem.innerHTML = `
    <tr>
    <td>${item.hall_id}</td>
    <td>${item.hall_name}</td>
    <td>${item.hall_address}</td>
    </tr>`;
    targetTable.append(appendItem);
  });
}
async function windowActions() {
  await dataHandler();
  console.log('window loaded');
  //   const targetList = document.querySelector('.target-list');
}
window.onload = windowActions;