import React from 'react';
import useProjects from '../../hooks/useProjects';

function HomeProjectSection(props) {
    const [projects] = useProjects()
    console.log(projects)

    return (
        <section id='homeProjects'>

            <div className="bg-black min-h-screen">

                <h1 className="text-4xl text-white text-center">Latest Projects</h1>

                <div>

                </div>

            </div>
            
        </section>
    );
}

export default HomeProjectSection;