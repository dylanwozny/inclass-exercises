// npx eslint js/main2.js --fix

// Your code here...

// Part 1: fetch with async from friends

// fetch json info async
const getFriendsLink = document.querySelector('li.friends');
const outputContent = document.querySelector('div.content');

// when clicked add pure menu class to li and fetch info
getFriendsLink.addEventListener('click', () => {
  event.preventDefault();
  const friendsAll = '/friends/friends.json';

  // clear content
  outputContent.textContent = '';

  // add in selected class
  getFriendsLink.setAttribute('class', 'pure-menu-item friends pure-menu-selected');

  fetch(friendsAll, { method: 'GET' }).then((response) =>
  // put data into html
  // returns an object
    response.json()).then((responseBodyData) => {
    createFriendList(responseBodyData);

    const singleFriendLink = document.querySelectorAll('a[data-id]');

    singleFriendLink.forEach((link) => {
      link.addEventListener('click', () => {
        // clear content
        outputContent.textContent = '';
        const thisId = link.getAttribute('data-id');
        const thisJsonUrl = `/friends/${thisId}.json`;

        fetch(thisJsonUrl, { method: 'GET' }).then((response) => response.json()).then((responseBodyDataSingle) => {
          createFriendSingle(responseBodyDataSingle);
        });
      });
    });
  });
});

const createFriend = (friends, parentList) => {
  // object data
  const friendInfo = `${friends.firstName} ${friends.lastName}`;
  const thisLink = createElementNew('a', friendInfo, parentList, 'pure-menu-link', '#');

  thisLink.setAttribute('data-id', friends.id);
};

const createFriendSingle = (oneFriend) => {
  const friendDivParent = createElementNew('div', '', outputContent, 'friend', '');
  const friendDivInner = createElementNew('div', '', friendDivParent, 'identity', '');
  // img
  const fImg = createElementNew('img', '', friendDivInner, 'photo');
  fImg.setAttribute('src', `img/${oneFriend.avatar}`);

  // title
  const title = createElementNew('h2', `${oneFriend.firstName}${oneFriend.lastName}`, friendDivInner, 'name');

  // list
  const fUl = createElementNew('ul', '', friendDivInner, '');
  const fEmail = createElementNew('li', `${oneFriend.email}`, fUl, 'label');
  const fhometown = createElementNew('li', `${oneFriend.hometown}`, fUl, 'label');
  const fBio = createElementNew('p', `${oneFriend.bio}`, friendDivInner, 'bio');
};

const createFriendList = (friends) => {
  const friendDivInner = createElementNew('div', '', outputContent, 'pure-menu custom-restricted-width', '');
  createElementNew('span', 'Friends', friendDivInner, 'pure-menu-heading', '');
  createElementNew('ul', '', friendDivInner, 'pure-menu-list content-list', '');
  const friendListUl = document.querySelector('ul.content-list');

  // loop
  friends.forEach((value) => {
    const friendListLi = createElementNew('li', '', friendListUl, 'pure-menu-item friend-content');
    createFriend(value, friendListLi);
  });
};

// function for creating elements with DOM
const createElementNew = (type, content, parent, newclass = '', newhref = '') => {
  const typeCreate = document.createElement(type);
  const contentCreate = document.createTextNode(content);

  if (newclass !== '') {
    typeCreate.setAttribute('class', newclass);
  }

  if (newhref !== '') {
    typeCreate.setAttribute('href', newhref);
  }

  typeCreate.appendChild(contentCreate);
  parent.appendChild(typeCreate);
  return typeCreate;
};
