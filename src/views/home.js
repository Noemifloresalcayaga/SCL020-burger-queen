import {Link} from "react-router-dom";


function Home() {
    return (
        <>
          <main>
            <h2>Ingresa</h2>
            <button id="postres"><Link to="/Chef">Chef</Link></button>
            <button id="postres"><Link to="/Mesero">Mesero</Link></button>
          </main>
          {/* <nav>
            <Link to="/about">About</Link>
          </nav> */}
        </>
      );
      
    }
    export default Home

