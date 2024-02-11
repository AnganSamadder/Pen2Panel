import { initAuth0 } from '@auth0/nextjs-auth0';

export default initAuth0({
    secret:'1a0fd573d9e2025d01d0073eb6ec599fa0b87047a31b5d5982f922fd277b1d22',
    baseURL:'http://localhost:3000',
    issuerBaseURL:'https://dev-gjfvmprmvbpyzk5a.us.auth0.com',
    clientID:'3jRpgNoy9y8tc88x9pHs7aIw4OSI4XzC',
    clientSecret:'Fgnq15paNDNqtMWyzQ4s-U_5Bybu0NXdfIjbBVMPe_BVPzn52_2GLJzvh_tkYFCu'
});