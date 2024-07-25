import Nav from "../components/Nav"
import Footer from "../components/Footer"

function Layout({children, cart, setCart}){

return(
    <div className="min-h-screen flex flex-col">
    <Nav cart={cart} setCart={setCart}/>
    <main className="flex-1">
        {children}
    </main>
    <Footer/>
    </div>
)

}
export default Layout