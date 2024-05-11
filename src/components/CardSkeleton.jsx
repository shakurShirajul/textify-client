import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
const CardSkeleton = ({ cards }) => {
    return (
        Array(cards).fill(0).map((item) =>
            <div>
                <div className="max-w-lg mx-auto">
                    <div className="p-5">
                        <div className="flex flex-col justify-between leading-normal gap-4">
                            <div className="flex justify-center items-center gap-5">
                                <Skeleton circle height={44} width={44} />
                                <div className='flex-1'>
                                    <Skeleton count={2} />
                                </div>
                            </div>
                            <Skeleton count={5} />
                        </div>
                    </div>
                </div>
            </div>
        )
    );
};

export default CardSkeleton;