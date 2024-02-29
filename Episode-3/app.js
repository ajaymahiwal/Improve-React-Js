

export const Heading = ()=>{
    return(
        <div>
            <h5>Hello from Hello jii js</h5>
            <h5>Hello from React JS</h5>
            <h5>Hello from react js</h5>
        </div>
    );
}

export const Title = ()=>(
    <h1>I am a Title compo.</h1>
)


let a = 200;
// module.exports = a;
// module.exports = {
//     sum(){
//         return <h1>Sum function</h1>
//     },
//     mul(){
//         return <h1>Mul function</h1>
//     }
// };


const App = ()=>{
    return(
       <>
         <Heading></Heading>
         <h1>Hello ji i am react element created using jsx.</h1>
       </>
    );
}

export default App;