const data = {
  items: [
    {
      name: "user1",
      group: 1,
    },
    {
      name: "user2",
      group: 1,
    },
    {
      name: "user3",
      group: 2,
    },
  ],
};

const buttons = document.getElementsByTagName('button');

for(let i = 0; i < 3; i++) {
    buttons[i].name = data.items[i].name;
    buttons[i].group = data.items[i].group;
    buttons[i].addEventListener('click', activateItem);
}

function activateItem() {
    alert(`Hi, ${this.name}! You are in group${this.group}`);
}