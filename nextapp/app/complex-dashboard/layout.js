const ComplexDashboardLayout=({children,users,revenue})=>{
    return(
        <div>
            <div >{children}</div>
            <div style={{backgroundColor:"lightpink",margin:"50px",padding:"50px",height:"50px",width:"100px"}}
            >{users}</div>
            <div style={{backgroundColor:"lightseagreen",margin:"50px",padding:"50px",height:"50px",width:"120px"}}>{revenue}</div>
        </div>
    )

}
export default ComplexDashboardLayout;