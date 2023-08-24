
var score = 0;
let wicket = 0;
let ballwiseresult = [];
let hit = 0;
let inputRef = React.createRef();

function addscore(num) {
    hit = num;
    rootelement.render(<App />);
}


function clickwkt() {
    hit = "W"
    rootelement.render(<App />);

}


// function to prevent default submit button event we apply that function in form 
function handlesubmit(event) {
    event.preventDefault();
    if (hit == "W") {
        wicket++;
    }
    else {
        score = hit + score;
    }

    // ballwiseresult.unshift(<span>{hit}{","}{inputRef.current.value}</span> )
    //another method
   

    ballwiseresult.unshift(<span>{`${hit} ${inputRef.current.value}`}</span>)
    hit = 0;
    inputRef.current.value = '';

    rootelement.render(<App />);

}

// create scorebutton component

function Scorebutton() {
    return (
        <>
            <div>
                <button onClick={() => addscore(0)}>0</button>
                <button onClick={() => addscore(1)}>1</button>
                {/* <button onClick ={function() { addscore(2); }}>2 </button> */}
                <button onClick={() => addscore(2)} >2</button>
                <button onClick={() => addscore(3)} >3</button>
                <button onClick={() => addscore(4)} >4</button>
                <button onClick={() => addscore(5)} >5</button>
                <button onClick={() => addscore(6)} >6</button>
                <button onClick={clickwkt} >wicket</button>

            </div>
        </>
    )

}

//to show overwise result 
// function OverResult() {
//     return (

//         <div>
//             {ballwiseresult.map((res, index) => (
//                 <>
//                     {index % 6 === 0 ? <br /> : null}
//                     <span key={index}>{res === 0 ? <strong>. </strong> : res}</span>  &nbsp; &nbsp;

//                 </>))}


//         </div>

//     )
// }



function Form() {
    return (
        <>
            <form onSubmit={handlesubmit}>
                <span> <input value={hit} /> &nbsp;
                    <input ref={inputRef} /> &nbsp;
                    <button>submit</button>
                </span>
            </form>

        </>
    )
}




function App() {
    return (
        <>
            <hr />
            <h1>SCORE KEEPER</h1>
            <h2>score : {score}/{wicket}</h2>
            <Scorebutton />
            <br />
            <Form />
            <hr />
            <div>
                {ballwiseresult.map((res, index) => (
                    <p key={index}> {res}</p>
                ))}
            </div>
        </>
    )
}



const rootelement = ReactDOM.createRoot(document.getElementById('root'))
rootelement.render(<App />);