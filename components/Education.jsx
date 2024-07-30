import {EduCard, Heading} from "../utils";
import {Institutions} from "../data/data";

const Education = () => {
    return (
        <section>
            <Heading text={'Education'} />

            <div className='space-y-4 mt-3 lg:px-5'>
                {Institutions.map((edu) => (
                    <EduCard key={edu.id} {...edu} />
                ))}
            </div>
        </section>
    );
};

export default Education;