"use client"
import { useRouter } from "next/navigation";
const Order=()=>{
    const router=useRouter();
    const handleclick=()=>{
        router.push("/");
    }
    return(
        <div>
            <button onClick={handleclick}>HOME-PAGE</button>
        </div>
    )
}
export default Order;