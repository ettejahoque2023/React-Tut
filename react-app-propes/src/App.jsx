import Card from './components/Card'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
    <Navbar/>
    <Card
    title="Cat"
    discription="orem ipsum dolor sit amet consectetur adipisicing elit. Voluptate incidunt aperiam, 
        possimus veritatis nihil excepturi doloremque et perferendis. Assumenda maxime voluptatem officiis cupiditate id quo nemo eos nobis nesciunt vero."/>
    <Card title="Dog"
     discription="orem ipsum dolor sit amet consectetur adipisicing elit. Voluptate incidunt aperiam, 
        possimus veritatis nihil excepturi doloremque et perferendis. Assumenda maxime voluptatem officiis cupiditate id quo nemo eos nobis nesciunt vero." />
    <Card title="Rabbit"
    discription="orem ipsum dolor sit amet consectetur adipisicing elit. Voluptate incidunt aperiam, 
        possimus veritatis nihil excepturi doloremque et perferendis. Assumenda maxime voluptatem officiis cupiditate id quo nemo eos nobis nesciunt vero."/>
    <Footer/>
    </>
  )
}

export default App
