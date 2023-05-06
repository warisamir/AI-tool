import '@styles/globals.css';
import Nav from '@components/Nav';
import Provider from '@components/Provider';
export const metadata={
  title:'Promptopia',
  description:'A prompt generator for writers using AI to generate ideas for your next story.',
}
const RootLayout = ({children}) => {
  return (
    <html lang='en'>
<body>
  <div className="main">
  <div className="gradient"/>
   </div>
   <main className="app">
   <Nav/>
    {children}
   </main>
</body>
    </html>
  )
}

export default RootLayout