'use client';
import { useState } from 'react';
import {
  CallControls,
  CallParticipantsList,
  CallStatsButton,
  CallingState,
  PaginatedGridLayout,
  SpeakerLayout,
  useCallStateHooks,
} from '@stream-io/video-react-sdk';
import { useRouter, useSearchParams } from 'next/navigation';
import { Users, LayoutList } from 'lucide-react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import Loader from './Loader'; 
import EndCallButton from './EndCallButton';
import { cn } from '@/lib/utils';

type CallLayoutType = 'grid' | 'speaker-left' | 'speaker-right';

const MeetingRoom = () => {

  // For Checking Personal Meeting
  const searchParams = useSearchParams();
  // *****************************************************************
  // **            !! convert it back to a boolean value             *
  // **                 if value 'personal' => true                  *                    
  // ** if value null or any false fale that !== personal  => false  *
  // ***************************************************************** 
  const isPersonalRoom = !!searchParams.get('personal');

  const router = useRouter();

  const [layout, setLayout] = useState<CallLayoutType>('speaker-left');
  const [showParticipants, setShowParticipants] = useState(false);

  const { useCallCallingState } = useCallStateHooks();

  // for more detail about types of CallingState see: https://getstream.io/video/docs/react/ui-cookbook/ringing-call/#incoming-call-panel
  const callingState = useCallCallingState();

  // If Not Joined Until Now Add Loader Component
  if (callingState !== CallingState.JOINED) return <Loader />;

  const CallLayout = () => {
    switch (layout) {
      //users and sharing boxes at middle of screen 

      case 'grid': // grid style
        return <PaginatedGridLayout />;
      case 'speaker-right':// speaker right style
        return <SpeakerLayout participantsBarPosition="right" />;
      default:// speaker right style
        return <SpeakerLayout participantsBarPosition="left" />;
    }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden pt-4 text-white">
      <div className="relative flex size-full items-center justify-center">
        <div className=" flex size-full max-w-[1000px] items-center">
          <CallLayout />
        </div>
        <div
          className={cn('h-[calc(100vh-86px)] hidden ml-2', {
            'show-block': showParticipants,
          })}
        >
          {/* List Of Participants In The Meeting */}
          <CallParticipantsList onClose={() => setShowParticipants(false)} />
        </div>
      </div>
      {/* Video Layout And Call Controls */}
      <div className="fixed bottom-0 flex w-full items-center justify-center sm:gap-5 gap-3 flex-wrap sm:py-2 sm:px-0 px-1 py-1 sm:mb-0 mb-2  ">
        {/* Call Controls Contain video Audio Settings, Emoji Button, Share Screen ,Record Meet Button And Leave Meet Button  */}
        <CallControls onLeave={() => router.push(`/`)} />

          {/* For Setting Layout Style */}
        <DropdownMenu>
          <div className="flex items-center">
            <DropdownMenuTrigger className="cursor-pointer rounded-2xl bg-[#19232d] px-4 py-2 hover:bg-[#4c535b]  ">
              <LayoutList size={20} className="text-white" />
            </DropdownMenuTrigger>
          </div>
          <DropdownMenuContent className="border-dark-1 bg-dark-1 text-white">
            {['Grid', 'Speaker-Left', 'Speaker-Right'].map((item, index) => (
              <div key={index}>
                <DropdownMenuItem
                  onClick={() =>
                    setLayout(item.toLowerCase() as CallLayoutType)
                  }
                >
                  {item}
                </DropdownMenuItem>
                <DropdownMenuSeparator className="border-dark-1" />
              </div>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Call Status Button */}
        <CallStatsButton />
        <button onClick={() => setShowParticipants((prev) => !prev)}>
          <div className=" cursor-pointer rounded-2xl bg-[#19232d] px-4 py-2 hover:bg-[#4c535b]  ">
            <Users size={20} className="text-white" />
          </div>
        </button>
        {!isPersonalRoom && <EndCallButton />}
      </div>
    </section>
  );
};

export default MeetingRoom;