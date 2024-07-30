import {Awards} from "../data/data";
import { AwardCard, Heading } from "../utils";

const Award = () => {
    return (
        <section>
            <Heading text={'Honors & Awards'} />

            <div className='space-y-4 mt-3 lg:px-5'>
                {Awards.map((item) => (
                    <AwardCard key={item.id} {...item} />
                ))}
            </div>
        </section>
    );
};

export default Award;