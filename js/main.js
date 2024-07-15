import data from './data.js';

console.log(data);

function updateDataList(sortedData) {
    sortedData.forEach((key, index) => {
        document.getElementById(`data${index + 1}`).textContent = data[key].content;
    });
}

document.addEventListener('DOMContentLoaded', () => {
    updateDataList();
});

function filterDataByCategory(category) {
    Object.keys(data).forEach(key => {
        const element = document.getElementById(`data${key.slice(4)}`);
        if (data[key].category === category) {
            element.style.display = 'block';
        } else {
            element.style.display = 'none';
        }
    });
}

function resetDataList() {
    Object.keys(data).forEach(key => {
        const element = document.getElementById(`data${key.slice(4)}`);
        element.style.display = 'block';
    });
}

function sortDataAZ() {
    let sortedData = Object.keys(data).sort((a, b) => {
        if (typeof data[a].content === 'string' && typeof data[b].content === 'string') {
            return data[a].content.localeCompare(data[b].content, 'th', { sensitivity: 'base' });
        }
        return 0;
    });
    updateDataList(sortedData);
}

function sortDataZA() {
    let sortedData = Object.keys(data).sort((a, b) => {
        if (typeof data[a].content === 'string' && typeof data[b].content === 'string') {
            return data[b].content.localeCompare(data[a].content);
        } else {
            return 0;
        }
    });
    updateDataList(sortedData);
}

function sortDataNumberDesc() {
    let sortedData = Object.keys(data).sort((a, b) => data[b].content.length - data[a].content.length);
    updateDataList(sortedData);
}

function sortDataNumberAsc() {
    let sortedData = Object.keys(data).sort((a, b) => data[a].content.length - data[b].content.length);
    updateDataList(sortedData);
}

document.getElementById('sortByAZ').addEventListener('click', sortDataAZ);
document.getElementById('sortByZA').addEventListener('click', sortDataZA);
document.getElementById('sortByNumberDesc').addEventListener('click', sortDataNumberDesc);
document.getElementById('sortByNumberAsc').addEventListener('click', sortDataNumberAsc);

document.getElementById('data1').textContent = data.data1.content;
document.getElementById('data2').textContent = data.data2.content;
document.getElementById('data3').textContent = data.data3.content;
document.getElementById('data4').textContent = data.data4.content;
document.getElementById('data5').textContent = data.data5.content;
document.getElementById('data6').textContent = data.data6.content;

document.querySelector('.form-select').addEventListener('change', function(event) {
    let selectedCategory = event.target.value;
    if (selectedCategory) {
        filterDataByCategory(selectedCategory);
    } else {
        resetDataList();
    }
});

resetDataList();

function Opensearch() {
    var searchForm = document.querySelector('.searchbar-show');

    if (searchForm.style.display === 'block') {
        searchForm.style.display = 'none';
    } else {
        searchForm.style.display = 'block';
    }
}
