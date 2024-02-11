import { handleAuth } from '@auth0/nextjs-auth0';
import { redirect } from 'next/dist/server/api-utils';

export const GET = handleAuth();

// export function Route({params}: {params: {auth0: string}}) {
//   if(params.auth0 === 'callback') {
//     return {
//       redirect: {
//         destination: '/projects',
//         permanent: true,
//       },
//     }
//   }
// }