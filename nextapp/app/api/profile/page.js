import CredentialsProvider from "next-auth/providers/credentials";
export default async  function Auth(){
    providers:[
        CredentialsProvider({
            name:"email",
            credentials:{
                username:{label:"username",type:"text",placeholder:"akhilbabu"},
                password:{label:"password",type:"text"}
            },
            async authorize(credentials,req){
                const user={
                    userid:"1",
                    name:"akhil",
                    username:"akhilbabu",
                    email:"akhil@gmail.com"
                }
                if(user){
                    return user
                }else{
                    return null
                }
            }
        })
    ]
}