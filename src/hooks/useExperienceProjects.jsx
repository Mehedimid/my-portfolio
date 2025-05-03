import { useEffect, useState } from 'react'

const useExperienceProjects = () => {
    const [projects, setProjects] = useState(null)

    useEffect( ()=>{
       fetch('experience.json')
       .then(res=>res.json())
       .then(data=>setProjects(data))
    },[])

    return [projects]
}

export default useExperienceProjects