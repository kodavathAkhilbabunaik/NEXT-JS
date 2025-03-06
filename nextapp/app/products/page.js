import Link from "next/link";
const  Main=()=>{
    const productID=[1,2,3];
    return(
        <div>
            <Link href={`products/${productID[0]}`}><li>PRODUCT 1</li></Link>
            <Link href={`products/${productID[1]}`}><li>PRODUCT 2</li></Link>
            <Link href={`products/${productID[2]}`}><li>PRODUCT 3</li></Link>
        </div>
    )
};
export default Main;