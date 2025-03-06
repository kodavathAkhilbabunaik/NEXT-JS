export default  async function({params}){
    const data=await fetch(`https://jsonplaceholder.typicode.com/users/${params.userid}`);
    const response=await data.json();
    return(
        <div>
            {
                response.name
            }
        </div>
    )
}