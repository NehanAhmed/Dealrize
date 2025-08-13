

export const Statistic = () => {
    const stats = [
        {
            title: '92%',
            slogan: 'faster replies'
        }
        , {
            title: '3x',
            slogan: 'More Collabs'
        }
        , {
            title: '85%',
            slogan: 'Less Clutter'
        }
        , {
            title: '100+',
            slogan: 'Influencers on Board'
        }

    ]
    return (

        <div class="my-10 px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 font-poppins">
            <div class="max-w-3xl mb-10 md:mx-auto sm:text-center">
                <h2 class="mb-6 text-3xl font-bold tracking-tight text-orange sm:text-6xl md:mx-auto text-center">
                    Proven Results for Influencers
                </h2>
                <p class="text-center text-base text-blue md:text-lg">
                    We are proud of our achievements and the impact we have made in the influencer marketing space.
                </p>
            </div>
            <div class="grid row-gap-8 sm:grid-cols-4 my-5 items-center">
                {stats.map((Statistics, index) => (
                    <div>
                        <div class="text-center" key={index}>
                            <h6 class="text-5xl text-orange font-extrabold text-deep-purple-accent-400">{Statistics.title}</h6>
                            <p class="font-extrabold">{Statistics.slogan}</p>
                        </div>
                        
                    </div>
                ))}
            </div>
        </div>
    );
};