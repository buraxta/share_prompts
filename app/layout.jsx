import '@styles/global.css';

export const metadata = {
    title: "Promptopia",
    description: "Discover the best prompts for your next writing session."
}

const RootLayout = ( { children }) => {
  return (
    <html lang='en'>
        <body>
            <div className='main'>
                <div className='gradient' />
            </div>
            <main className='app'>
                {children}
            </main>
        </body>
    </html>
  )
}

export default RootLayout