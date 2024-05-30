'use client'
import React from 'react'
import { useGetCallById } from '../../../../../hooks/useGetCallById';
import { useToast } from '@/components/ui/use-toast';
import { useStreamVideoClient } from '@stream-io/video-react-sdk';
import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';

const PersonalRoom = () => {
    const router = useRouter();
    const { user } = useUser();
    const client = useStreamVideoClient();
    const { toast } = useToast();

    const meetingId = user?.id;

    const { call } = useGetCallById(meetingId!);

    const startRoom = async () => {
        if (!client || !user) return;

        // value! => ts the value is not null or undefined
        const newCall = client.call("default", meetingId!);

        if (!call) {
            await newCall.getOrCreate({
                data: {
                    starts_at: new Date().toISOString(),
                },
            });
        }

        router.push(`/meeting/${meetingId}?personal=true`);
    };

    const meetingLink = `${process.env.NEXT_PUBLIC_BASE_URL}/meeting/${meetingId}?personal=true`;
    return (
        <div className='flex size-full flex-col gap-10 text-white'>
            <h1 className='text-3xl font-bold'>
                Personal Meeting Room
            </h1>
            <div className="flex w-full flex-col gap-8 xl:max-w-[900px]">
                <div className="flex flex-col items-start gap-2 xl:flex-row">
                    <h1 className="text-base font-medium text-sky-1 lg:text-xl xl:min-w-32">
                        Topic:
                    </h1>
                    <h1 className="truncate text-sm font-bold max-sm:max-w-[320px] lg:text-xl">
                        {user?.username}
                    </h1>
                </div>
                <div className="flex flex-col items-start gap-2 xl:flex-row">
                    <h1 className="text-base font-medium text-sky-1 lg:text-xl xl:min-w-32">
                        Meeting ID:
                    </h1>
                    <h1 className="truncate text-sm font-bold max-sm:max-w-[320px] lg:text-xl">
                        {user?.id}
                    </h1>
                </div>
                <div className="flex flex-col items-start gap-2 xl:flex-row">
                    <h1 className="text-base font-medium text-sky-1 lg:text-xl xl:min-w-32">
                        Invite Link:
                    </h1>
                    <h1 className="truncate text-sm font-bold max-sm:max-w-[320px] lg:text-xl">
                        {meetingLink}
                    </h1>
                </div>
            </div>
            <div className="flex gap-5">
                <Button className="bg-blue-1" onClick={startRoom}>
                    Start Meeting
                </Button>
                <Button
                    className="bg-dark-3"
                    onClick={() => {
                        navigator.clipboard.writeText(meetingLink);
                        toast({
                            title: "Link Copied",
                        });
                    }}
                >
                    Copy Invitation
                </Button>
            </div>
        </div>
    )
}

export default PersonalRoom