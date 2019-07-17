const user = 'Bob';
const num = 17;
const txt = 'Hello, ' + user + ' you have ' + num + ' letters in your inbox';

const txt2 = `Hello ${ 2 + 2 } you have ${Date.now()} letter in your inbox`;
console.log(txt2);

const html = 
'<ul>' +
'<li>Item One</li>' +
'<li>Item Two</li>' +
'</ul>';

const items = ['tea', 'coffee'];

const html2 = `
  <ul>
    <li>${items[0]}</li>
    <li>${items[1]}</li>
  </ul>
`;

console.log(html2);