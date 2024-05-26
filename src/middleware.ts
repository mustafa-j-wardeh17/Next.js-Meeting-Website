import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

//selected protected routes to make to hiding them when user not authenticated
const protectedRoute = createRouteMatcher([
    '/',
    '/upcoming',
    '/meeting(.*)',
    '/previous',
    '/recordings',
    '/personal-room',
]);


// to make this route does not showing when the user doesn't authenticated
export default clerkMiddleware((auth, req) => {
    if (protectedRoute(req)) auth().protect();//protect routes by auth
});

export const config = {
    matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};