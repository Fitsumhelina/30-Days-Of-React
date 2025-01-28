function Signup() {
    return (
        <>
            <h1>Sign Up</h1>
        </>
    )
}
function Logout () {
    return (
        <>
            <h1>Logout</h1>
        </>
    )
}
function App () {

   const  status ={
        isLoggedIn: false,
    }

    return (
        <>
       { status.isLoggedIn ? <Logout /> : <Signup />  }
       

        </>
    )
}

export default App;