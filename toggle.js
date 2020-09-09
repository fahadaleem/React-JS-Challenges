
let check = false;

const isClicked = ()=>{
    check = !check;

    render_template();
}



const rootApp = document.getElementById("app");



const render_template = ()=>{
    // Write JSX

    const template = (
        <div>
        <h1>Toggler View</h1>
        <button onClick={isClicked}>{check===true?'Hide Details':'Show Details'}</button>
        {check && <p>Hey, there are some details you can see now!</p>}
        </div>
    )
    
ReactDOM.render(template, rootApp);
}



render_template();