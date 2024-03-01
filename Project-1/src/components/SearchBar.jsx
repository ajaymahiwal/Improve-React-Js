


const SearchBar = () => {
    //SOME basic setup code
   function handleSubmit(e){
        e.preventDefault();
        console.log("form submitted but it will not redirect to the action url");
   }
    return (
        <div className='search-bar'>
            <form id='search-form' onSubmit={handleSubmit}>
                <div>
                    <input type='text' name="searchValue" placeholder='Enter Restaurant Name' />
                    <button className='green-btn' >Search</button>
                </div>
            </form>
        </div>

        
    )
}

export default SearchBar;