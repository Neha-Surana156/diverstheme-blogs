import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
// import 'bootstrap/dist/css/bootstrap.css';
import logo from "../img/logo.png";
// function Header(){
//     const [name,setName]=useState("");
//     const navigate=useNavigate();
//     const handleSubmit=(event)=>{
//         event.preventDefault();
//         navigate("/search");
//     }
//     return (
//     <>
//         <nav class="navbar navbar-expand-lg bg-body-tertiary">
//             <div class="container-fluid">
//                 <Link class="navbar-brand" to="/"><span><img src={logo} alt="logo" style={{width:"80px"}} /></span></Link>
//                 <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                 <span class="navbar-toggler-icon"></span>
//                 </button>
//                 <div class="collapse navbar-collapse" id="navbarSupportedContent">
//                 <ul class="navbar-nav me-auto mb-2 mb-lg-0">
//                     <li class="nav-item">
//                     <Link class="nav-link active" aria-current="page" to="/">Home</Link>
//                     </li>
//                     <li class="nav-item dropdown">
//                     <Link class="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//                         Category
//                     </Link>
//                     <ul class="dropdown-menu">
//                         <li><Link class="dropdown-item" to="/">Action</Link></li>
//                         <li><Link class="dropdown-item" to="/">Another action</Link></li>
//                         <li><hr class="dropdown-divider" /></li>
//                         <li><Link class="dropdown-item" to="/">Something else here</Link></li>
//                     </ul>
//                     </li>
//                     <li class="nav-item">
//                     <Link class="nav-link active" aria-current="page" to="/about">About</Link>
//                     </li>
//                     <li class="nav-item">
//                     <Link class="nav-link active" aria-current="page" to="/contact">Contact</Link>
//                     </li>
//                     <li class="nav-item">
//                     <Link class="nav-link active" aria-current="page" to="/signin">Signin</Link>
//                     </li>
//                     <li class="nav-item">
//                     <Link class="nav-link active" aria-current="page" to="/signup">Signup</Link>
//                     </li>
//                     <li class="nav-item">
//                     <Link class="nav-link active" aria-current="page" to="/">Logout</Link>
//                     </li>
//                     {/* <li><Link to="/">Home</Link></li>
//                     <li><Link to="/about">About</Link></li>
//                     <li><Link to="/contact">Contact</Link></li>                 */}
//                 </ul>
//                 <form class="d-flex" role="search">
//                     <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
//                     <button class="btn btn-outline-success" type="submit">Search</button>
//                 </form>
//             </div>
//         </div>
//     </nav>
//     <div className="max-width-1 m-auto">
//         <hr />
//     </div>
//     </>
//     );
// }
function Header(){
    const [name,setName]=useState("");
    const navigate=useNavigate();
    const handleSubmit=(event)=>{
        event.preventDefault();
        navigate("/search");
    }
    return (
    <>
    <nav className="navigation max-width-1 m-auto">
        <div className="nav-left">
            <Link to="/"><span><img src={logo} alt="logo" style={{width:"80px"}} /></span></Link>
            {/* <span>sBlog</span> */}
            <ul>
                <li><Link to="/">Home</Link></li>
                <li class="nav-item dropdown">
                    <Link class="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Category
                    </Link>
                    <ul class="dropdown-menu">
                         <li><Link class="dropdown-item" to="/">Action</Link></li>
                         <li><Link class="dropdown-item" to="/">Another action</Link></li>
                        <li><hr class="dropdown-divider" /></li>
                         <li><Link class="dropdown-item" to="/">Something else here</Link></li>
                    </ul>
                </li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>                
            </ul>
        </div>
        <div className="nav-right">
            <form method="get"  onSubmit={handleSubmit}>
                <input className="form-input" type="text" value={name} onChange={(e)=>setName(e.target.value)} name="query" placeholder="Article Search" />
                <button className="btn" type='submit'>Search</button>
            </form>          
        </div>
    </nav>
    <div className="max-width-1 m-auto">
        <hr />
    </div>
    </>
    );
}
export default Header;