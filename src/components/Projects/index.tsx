import { Title } from '../Common/Title';
import { Project } from './Project';
import data from '@/data';

export const Projects = () => {
    return (
        <div className="md:ml-20" id="work">
            <Title num={2} title="What I've worked on" />
            <div className="flex flex-col">
                {data.projects.map((project, i) => (
                    <Project key={i} project={project} />
                ))}
            </div>
        </div>
    );
};
