 import { useEffect, useState } from 'react'
 
 const useSoloProjects = () => {
    const [projects, setProjects] = useState(null)

    useEffect( ()=>{
       fetch('solo-projects.json')
       .then(res=>res.json())
       .then(data=>setProjects(data))
    },[])

    return [projects]
 }
 
 export default useSoloProjects