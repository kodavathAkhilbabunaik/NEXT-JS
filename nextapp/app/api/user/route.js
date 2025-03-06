import { NextResponse ,NextRequest} from "next/server";
export default function POST(req){
    const data=req.json();
    console.log(data);
    return NextResponse.json(data);
}