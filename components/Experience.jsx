import {EduCard, Heading} from "../utils";
import {Companies} from "../data/data";

const Experience = () => {
    return (
        <section>
            <Heading text={'Experience'} />

            <div className='space-y-4 mt-3 lg:px-5'>
                {Companies.map((edu) => (
                    <EduCard key={edu.id} {...edu} />
                ))}
            </div>
        </section>
    );
};

export default Experience;