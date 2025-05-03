import Title from '../../components/Title';
import Experience from '../../components/Experience';
import useExperienceProjects from '../../hooks/useExperienceProjects';

function HomeProjectSection() {
    const [projects] = useExperienceProjects()

    return (
        <section id='homeProjects'>

            <div className="">

                <div className="text-center"><Title>Recent Experiences</Title></div>
                <p className="-mt-5 md:w-1/2 mx-auto text-center text-slate-300">I have gain some experience during my latest team projects. You can explore my projects to know circumstantial information</p>

                <div className='size my-20 grid grid-cols-1 md:grid-cols-2 gap-5 lg:grid-cols-3 gap-'>
                  {projects?.slice(0,3).map((experience,idx)=> <Experience key={idx} experience={experience}></Experience>)}
                </div>

            </div>
            
        </section>
    );
}

export default HomeProjectSection;