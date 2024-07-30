import { Papers } from "../data/data";
import { PaperCard, Heading } from "../utils";

const Publication = () => {
    return (
        <section>
            <Heading text={'Publications'} />

            <div className='space-y-4 mt-3 lg:px-5'>
                {Papers.map((item) => (
                    <PaperCard key={item.id} {...item} />
                ))}
            </div>
        </section>
    );
};

export default Publication;