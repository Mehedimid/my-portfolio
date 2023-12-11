import React, { useEffect, useState } from 'react';

function useProjects(props) {

    const [projects, setProjects] = useState(null)

    useEffect( ()=>{
       fetch('projects.json')
       .then(res=>res.json())
       .then(data=>setProjects(data))
    },[])

    return [projects]
}

export default useProjects;