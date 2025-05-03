import { useEffect, useState } from 'react'

const useTeamProjects = () => {
    const [projects, setProjects] = useState(null)

    useEffect( ()=>{
       fetch('team-projects.json')
       .then(res=>res.json())
       .then(data=>setProjects(data))
    },[])

    return [projects]
}

export default useTeamProjects