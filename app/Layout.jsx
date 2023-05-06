import "@styles/globals.css";
export const metadata={
  title:'Promptopia',
  description:'A prompt generator for writers using AI to generate ideas for your next story.',
}
const RootLayout = () => {
  return (
    <html lang='en'>
<body>
  <div className="main">
  <div className="gradient"/>
   </div>
   <main className="app">
    {children}
   </main>
</body>
    </html>
  )
}

export default RootLayout