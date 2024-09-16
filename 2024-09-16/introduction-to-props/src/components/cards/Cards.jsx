import Card from '../card/Card.jsx';

const Cards = () => {

    const GenerateCards = () => {
        const data = [
            { heading: 'Instant Server Start', text: 'On demand file serving over native ESM, no bundling required!'},
            { heading: 'Lightning Fast HMR', text: 'Hot Module Replacement (HMR) that stays fast regardless of app size.'},
            { heading: 'Rich Features', text: 'Out-of-the-box support for TypeScript, JSX, CSS and more.'},
            { heading: 'Optimized Build', text: 'Pre-configured Rollup build with multi-page and library mode support.'},
            { heading: 'Universal Plugins', text: 'Rollup-superset plugin interface shared between dev and build.'},
            { heading: 'Fully Typed APIs', text: 'Flexible programmatic APIs with full TypeScript typing.'},
        ];

        // const result = [];
        // for(let i = 0; i < data.length; i++) {
        //     result[result.length] = <div className="col-4">
        //         <h4>{data[i].heading}</h4>
        //         <p>{data[i].text}</p>
        //     </div>;        
        // }

        // return data.map((value, index) =>         
        //     <div key={index} className="col-4">
        //         <h4>{value.heading}</h4>
        //         <p>{value.text}</p>
        //     </div>
        // );

        const result = data.map((value, index) => 
            <Card key={index} data={value} />
        )

        // const masyvas = [
        //     <div key="a"></div>,
        //     <div key="b"></div>,
        //     <div key="c"></div>
        // ]

        return result;
    }

    return (
        <div className="row">
            <GenerateCards />
        </div>
    );
}

export default Cards;