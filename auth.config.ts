// import type { NextAuthConfig } from 'next-auth';
 
// export const authConfig = {
//   pages: {
//     signIn: '/login',
//   },
//   callbacks: {
//     authorized({ auth, request: { nextUrl } }) {
//       const isLoggedIn = !!auth?.user;
//       const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');
//       if (isOnDashboard) {
//         if (isLoggedIn) return true;
//         return false; // Redirect unauthenticated users to login page
//       } else if (isLoggedIn) {
//         return Response.redirect(new URL('/dashboard', nextUrl));
//       }
//       return true;
//     },
//   },
//   providers: [], // Add providers with an empty array for now
// } satisfies NextAuthConfig;


// import type { NextAuthConfig } from 'next-auth';
// import type { NextRequest } from 'next/server';

// export const authConfig: NextAuthConfig = {
//   pages: {
//     signIn: '/login',
//   },
//   callbacks: {
//     authorized({ auth, request }: { auth: any; request: NextRequest }) {
//       const isLoggedIn = !!auth?.user;
//       const isOnDashboard = request.nextUrl.pathname.startsWith('/dashboard');

//       if (isOnDashboard) {
//         if (isLoggedIn) return true;
//         return false; // Redirect unauthenticated users to login page
//       } else if (isLoggedIn) {
//         return Response.redirect(new URL('/dashboard', request.nextUrl));
//       }

//       return true;
//     },
//   },
//   providers: [], // Add providers with an empty array for now
// };

import type { NextAuthConfig } from 'next-auth';
import type { NextRequest } from 'next/server';

export const authConfig: NextAuthConfig = {
  providers: [], // Add providers with an empty array for now
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async redirect({ url, baseUrl }) {
      // If the URL starts with the base URL, allow it
      return url.startsWith(baseUrl) ? url : `${baseUrl}/dashboard`;
    },
    authorized({ auth, request }: { auth: any; request: NextRequest }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = request.nextUrl.pathname.startsWith("/dashboard");

      if (isOnDashboard) {
        return isLoggedIn; // Only allow if logged in
      }
      return true; // Allow other pages
    },
  },
};