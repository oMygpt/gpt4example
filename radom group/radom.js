// 创建页面元素
const title = document.createElement('h1');
title.textContent = '学生随机分组';
document.body.appendChild(title);

const studentIdsLabel = document.createElement('label');
studentIdsLabel.textContent = '学生学号 (每行一个):';
document.body.appendChild(studentIdsLabel);

const studentIdsInput = document.createElement('textarea');
studentIdsInput.placeholder = '例如：\n1\n2\n3\n4\n5';
studentIdsInput.style.width = '100%';
studentIdsInput.style.minHeight = '100px';
studentIdsInput.style.resize = 'vertical';
document.body.appendChild(studentIdsInput);

const numGroupsLabel = document.createElement('label');
numGroupsLabel.textContent = '分组数量:';
document.body.appendChild(numGroupsLabel);

const numGroupsInput = document.createElement('input');
numGroupsInput.type = 'number';
numGroupsInput.placeholder = '例如：2';
document.body.appendChild(numGroupsInput);

const generateGroupsButton = document.createElement('button');
generateGroupsButton.textContent = '生成分组';
document.body.appendChild(generateGroupsButton);

const groupContainer = document.createElement('div');
document.body.appendChild(groupContainer);

// 随机分组函数
function randomGrouping(studentIds, numGroups) {
  studentIds.sort(() => Math.random() - 0.5);
  const groupSize = Math.floor(studentIds.length / numGroups);
  const remainder = studentIds.length % numGroups;
  const groups = [];

  let currentIdx = 0;
  for (let i = 0; i < numGroups; i++) {
    const currentGroupSize = i < remainder ? groupSize + 1 : groupSize;
    groups.push(studentIds.slice(currentIdx, currentIdx + currentGroupSize));
    currentIdx += currentGroupSize;
  }

  return groups;
}

// 生成分组函数
function generateGroups() {
  const studentIds = studentIdsInput.value.trim().split(/\s+/).map((id) => parseInt(id, 10));
  const numGroups = parseInt(numGroupsInput.value, 10);
  const groups = randomGrouping(studentIds, numGroups);

  groupContainer.innerHTML = '';

  groups.forEach((group, index) => {
    const groupDiv = document.createElement('div');
    groupDiv.style.margin = '10px';
    groupDiv.style.padding = '10px';
    groupDiv.style.border = '1px solid';
    groupDiv.style.backgroundColor = `hsl(${(index * 360) / numGroups}, 100%, 90%)`;

    const groupTitle = document.createElement('h2');
    groupTitle.textContent = `组${index + 1}`;
    groupDiv.appendChild(groupTitle);

    const groupMembers = document.createElement('p');
    groupMembers.textContent = group.join(', ');
    groupDiv.appendChild(groupMembers);

    groupContainer.appendChild(groupDiv);
  });
}

// 为按钮添加事件监听器
generateGroupsButton.addEventListener('click', generateGroups);
