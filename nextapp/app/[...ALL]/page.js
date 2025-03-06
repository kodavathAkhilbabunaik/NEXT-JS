export default  async function Babu({params}){
    const id=(await params).ALL
    return(
        <div>
            babu{JSON.stringify(id)}
            
        </div>

    )
}
