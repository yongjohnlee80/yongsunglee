import { BuildBanner } from "./underconstruction.styles";

const myFavQuotes = [
    {
        quote: "“Whatever good things we build end up building us.”",
        author: "— Jim Rohn",
    },
    {
        quote: "“Simplicity, carried to the extreme, becomes elegance.”",
        author: "— Jon Franklin",
    },
    {
        quote: "“The best way to predict the future is to implement it.”",
        author: "— David Heinemeier Hansson",
    },
    {
        quote: "“Commenting your code is like cleaning your bathroom — you never want to do it, but it really does create a more pleasant experience for you and your guests.”",
        author: "— Ryan Campbell",
    },
    {
        quote: "“We have to stop optimizing for programmers and start optimizing for users.”",
        author: "— Jeff Atwood",
    },
];

const QuoteCard = ({ item }) => {
    return (
        <>
            <h4
                style={{
                    margin: "10% 15% 5% 15%",
                    textAlign: "center",
                    color: "#202020aa",
                }}
            >
                {item.quote}
            </h4>
            <h5
                style={{
                    textAlign: "center",
                    color: "#101010",
                }}
            >
                {item.author}
            </h5>
        </>
    );
};

const Underconstruction = () => {
    return (
        <>
            <BuildBanner.Container>
                <BuildBanner.Message>Build in Progress...</BuildBanner.Message>
            </BuildBanner.Container>
            {myFavQuotes.map((item) => (
                <QuoteCard key={item.author} item={item} />
            ))}
            <div style={{padding:"5%"}}/>
        </>
    );
};

export default Underconstruction;
