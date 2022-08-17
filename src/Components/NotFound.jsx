import { useEffect, useState } from 'react'
import { Link, useNavigate } from "react-router-dom";

function NotFound() {
  const navigation = useNavigate();
  const [counter, setbCounter] = useState(0);

 
  
  useEffect(() => {
   

    const timer = setTimeout(() =>navigation("/"), 6000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className='Authorizedcompnent'>
    <h1>404</h1>
    <h2>Not found</h2>
    <Link  to={"/"}>Back to the home page</Link>
</div>
  )

}

export default NotFound


