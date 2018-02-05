var greeting = React.createElement('h1', {}, 'I am a react project');
var clock = React.createElement('h2', {}, `It is ${new Date().toLocaleTimeString()}`);
var app = React.createElement('div', {}, greeting, clock);

ReactDOM.render(
  app,
  document.getElementById('react-app-root')
);
