import Feed from '@components/Feed';
const Home = () => {
  return (
    <div>
      <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Share 
        <br className="max-md:hidden"/>
        <span className="orange_gradient text-center">AI-Powered Promots</span>
      </h1>
      <p className="desc text-center" >
        Promptopia is a prompt generator for writers using AI to generate ideas for your next story.
      </p>
     <Feed/>
      </section>
    </div>
  )
}

export default Home
// Path: app\page.jsx