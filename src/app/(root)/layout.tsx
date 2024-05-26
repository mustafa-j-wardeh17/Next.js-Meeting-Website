import React, { ReactNode } from 'react'
import ClientVideoProvider from '../../../Providers/StreamChatProvider'

const layout = ({ children }: { children: ReactNode }) => {
    return (
        <div className='bg-dark-2'>
            <ClientVideoProvider >
                {children}
            </ClientVideoProvider>
        </div>
    )
}

export default layout