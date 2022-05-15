import SectionHeader from "./SectionHeader";

const TrendingSection = () => {
    return (
        <div className="section">
            <SectionHeader
                logo={TrendingLogo()}
                title="Trending"
                subtitle="All the GIFs"
            ></SectionHeader>
            <SectionHeader
                logo={ArtistsLogo()}
                title="Artists"
                subtitle="All Gifster Artists"
            ></SectionHeader>
        </div>
    );
};

const TrendingLogo = () => {
    return (
        <svg
            width="25"
            height="20"
            viewBox="0 0 25 20"
            xmlns="http://www.w3.org/2000/svg"
        >
            <defs>
                <linearGradient
                    x1="5.615%"
                    y1="77.472%"
                    x2="100%"
                    y2="26.124%"
                    id="trending"
                >
                    <stop stop-color="#3191FF" offset="0%"></stop>
                    <stop stop-color="#0CF" offset="100%"></stop>
                </linearGradient>
            </defs>
            <path
                d="M25.333 4.635l-6.45-.032a.47.47 0 00-.471.468l.004 1.575.008.085a.47.47 0 00.462.383h2.94l-7.544 8.101-3.878-3.125a1.119 1.119 0 00-1.631-.009l-7.584 7.73a1 1 0 00-.002 1.4l.288.295a1 1 0 001.431 0L9.652 14.6l3.782 3.042.093.1c.442.442.964.541 1.498.145l8.43-8.998v3.103c0 .25.197.456.446.468l1.407.069a.47.47 0 00.491-.446V5.104a.47.47 0 00-.466-.469z"
                fill="url(#trending)"
                fill-rule="nonzero"
                transform="rotate(-5 -21.505 23.157)"
            ></path>
        </svg>
    );
};

const ArtistsLogo = () => {
    return (
        <svg
            width="21"
            height="26"
            viewBox="0 0 21 26"
            xmlns="http://www.w3.org/2000/svg"
        >
            <defs>
                <linearGradient
                    x1="15.313%"
                    y1="100%"
                    x2="84.687%"
                    y2="0%"
                    id="artists"
                >
                    <stop stop-color="#E646B6" offset="0%"></stop>
                    <stop stop-color="#FF6666" offset="100%"></stop>
                </linearGradient>
            </defs>
            <path
                d="M3.9 23.67c-.636-.46-.798-1.112-.485-1.958l2.36-7.256H1.308a1.34 1.34 0 01-1.126-.614c-.244-.379-.244-.998 0-1.377L7.334.613C7.547.233 7.974 0 8.46 0h10.226c.457 0 .883.234 1.126.613.244.38.213.876-.03 1.255l-4.991 7.649h3.201c.548 0 1.004.32 1.217.788.183.467.061.992-.304 1.343L6.25 23.493c-.274.263-1.396.866-2.35.177zm-.88-11.117h3.886c.426 0 1.007-.053 1.285.525.222.324.222.74 0 1.25l-2.094 6.026a.2.2 0 00.33.207l8.8-8.797a.2.2 0 00-.142-.341h-1.61 0c-.457 0-.963.13-1.405-.468-.442-.598-.243-1.174 0-1.554l5.115-7.419a.2.2 0 00-.164-.313l-7.67-.001a.3.3 0 00-.258.146L2.85 12.25a.2.2 0 00.172.303z"
                transform="translate(1 1)"
                fill="url(#artists)"
                fill-rule="nonzero"
                stroke="url(#b)"
                stroke-width=".1"
            ></path>
        </svg>
    );
};

export default TrendingSection;
