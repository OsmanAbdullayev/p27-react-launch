var h1 = <h1>This is my first step towards ReactJS</h1>;
var ol = (<ol>
    <li>Step</li>
    <li>Step</li>
    <li>Step</li>
    <li>Step</li>
    <li>Step</li>
    <li>Step</li>
</ol>);
var h2 = <h2>Steps by step and suddenly I become a ReactJS developer!</h2>;

var all = (<div>
    {h1}
    {ol}
    {h2}
    {h2}
</div>);

ReactDOM.render(all, document.querySelector("#root"));