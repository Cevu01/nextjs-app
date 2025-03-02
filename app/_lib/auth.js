import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

const authConfig = {
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
  callbacks: {
    authorized({ auth, request }) {
      return !!auth?.user; // ako ima usera onda je ovo true, ako ne onda je false, pa zbog false ne mozemo da pristupimo /account iz middleware.js
    },
  },
  //ovako navigiramo korisnika na /login stranicu kada on pokusa da klikne protected rutu
  pages: {
    signIn: "/login",
  },
};

export const {
  auth,
  signIn,
  signOut,
  handlers: { GET, POST },
} = NextAuth(authConfig);
