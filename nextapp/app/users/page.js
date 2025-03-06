import Link from "next/link";

export default async function UserList({params,userid}){
    const data=await fetch("https://jsonplaceholder.typicode.com/users");
    const response=await data.json();
    return(
        <div>
            {
                response&&response.map(user=><h1 key={user.id}><Link href={`/users/${user.id}`}>{user.name}</Link></h1>)
            }
        </div>
    )
}

