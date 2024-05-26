'use server';

import { currentUser } from '@clerk/nextjs/server';
import { StreamClient } from '@stream-io/node-sdk';

const STREAM_API_KEY = process.env.NEXT_PUBLIC_STREAM_API_KEY;
const STREAM_API_SECRET = process.env.STREAM_SECRET_KEY;

export const tokenProvider = async () => {
    // currentUser method for backend use from clerk
    const user = await currentUser();

    if (!user) throw new Error('User is not authenticated');
    if (!STREAM_API_KEY) throw new Error('Stream API key secret is missing');
    if (!STREAM_API_SECRET) throw new Error('Stream API secret is missing');

    //createing stream client
    const streamClient = new StreamClient(STREAM_API_KEY, STREAM_API_SECRET);

    const expirationTime = Math.floor(Date.now() / 1000) + 3600;//Time for end a meet
    const issuedAt = Math.floor(Date.now() / 1000) - 60; //Time of Create a meet


    //create a token for created client stream
    const token = streamClient.createToken(user.id, expirationTime, issuedAt);

    return token;
};