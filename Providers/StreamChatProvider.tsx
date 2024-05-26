'use client'
import { useUser } from '@clerk/nextjs';
import { StreamVideo, StreamVideoClient } from '@stream-io/video-react-sdk';
import { Loader } from 'lucide-react';
import { ReactNode, useEffect, useState } from 'react';
import { tokenProvider } from '../actions/stream.actions';

const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY; // the API key can be found in the "Credentials" section



export default function ClientVideoProvider({ children }: { children: ReactNode }) {

    const [clientVideo, setClientVideo] = useState<StreamVideoClient>()

    const { user, isLoaded } = useUser()

    // using useEffect to add clerk user data and image to StreamVideoClient
    useEffect(() => {
        if (!isLoaded || !user) return;
        if (!apiKey) throw new Error('Stream API key is missing');
        const client = new StreamVideoClient({
            apiKey: apiKey,
            user: {
                id: user?.id,
                name: user?.username || user?.id,
                image: user?.imageUrl,
            },
            tokenProvider,//create it in backend actions in server
        });

        setClientVideo(client);
    }, [user, isLoaded])

    
    if (!clientVideo) return <Loader />
    return (
        <StreamVideo client={clientVideo}>
            {children}
        </StreamVideo>
    );
}


