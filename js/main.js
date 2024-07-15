import data from './data.js';

console.log(data);

function sortDataAZ() {
    let sortedData = Object.keys(data).sort((a, b) => {
        if (typeof data[a] === 'string' && typeof data[b] === 'string') {
            return data[a].localeCompare(data[b], 'th', { sensitivity: 'base' });
        }
        return 0;
    });
    updateDataList(sortedData);
}

function sortDataZA() {
    let sortedData = Object.keys(data).sort((a, b) => {
        if (typeof data[a] === 'string' && typeof data[b] === 'string') {
            return data[b].localeCompare(data[a]);
        } else {
            return 0;
        }
    });
    updateDataList(sortedData);
}


function sortDataNumberDesc() {
    let sortedData = Object.keys(data).sort((a, b) => data[b] - data[a]);
    updateDataList(sortedData);
}

function sortDataNumberAsc() {
    let sortedData = Object.keys(data).sort((a, b) => data[a] - data[b]);
    updateDataList(sortedData);
}

function updateDataList(sortedData) {
    sortedData.forEach((key, index) => {
        document.getElementById(`data${index + 1}`).textContent = data[key];
    });
}

document.getElementById('sortByAZ').addEventListener('click', sortDataAZ);
document.getElementById('sortByZA').addEventListener('click', sortDataZA);
document.getElementById('sortByNumberDesc').addEventListener('click', sortDataNumberDesc);
document.getElementById('sortByNumberAsc').addEventListener('click', sortDataNumberAsc);

document.getElementById('data1').textContent = data.data1;
document.getElementById('data2').textContent = data.data2;
document.getElementById('data3').textContent = data.data3;
document.getElementById('data4').textContent = data.data4;
document.getElementById('data5').textContent = data.data5;
document.getElementById('data6').textContent = data.data6;


function Opensearch() {
    var searchForm = document.querySelector('.searchbar-show');

    if (searchForm.style.display === 'block') {

        searchForm.style.display = 'none';
    } else {
        
        searchForm.style.display = 'block';
    }
}
