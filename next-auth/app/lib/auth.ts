import CredentialsProvider  from "next-auth/providers/credentials";

export const NEXT_AUTH = {
    providers: [
        CredentialsProvider({
            name: "Email",
            credentials: {
                username: { label: 'email', type: 'text', placeholder: 'abc@gmail.com' },
                password: { label: 'passwod', type: 'password', placeholder: '' }
            },
            async authorize(credentials: any) {
                // const username = credentials.username;
                // const  password = credentials.password;
                // console.log(username);
                // const user = await prisma.user.findOne({
                //     where: {
                //         email: username,
                //         password: password
                //     }
                // })

                // // if no user exist 
                // if(!user) {
                //     return null;
                // }

                // check if the password is correct 

                // if password is correct 
                console.log(credentials);
                return {              
                    id: "abc123",
                    name: "manishprasad",
                    email: "manish@gmail.com"
                }
            }
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        jwt: ({token, user}: any) => {
            console.log("token", token);
            token.userId = 'flakfal';
            token.type = 'admin';
            console.log("token", token);
            return token;
        },
        session: ({session, user, token}: any) => {
            console.log(session)
            if(session && session.user) {
                session.user.id = token.sub;        // getting error as `id` doesnot exist on user's type so creating a next-auth.d.ts file to fix it or you can use `any` as types
            }
            return session;
        }

        // signIn: ({user}) => {
        //     if(user.email == 'email_with_specific_domain@domain.com') {
        //         return false;
        //     }
        //     return true;
        // }

    }
}