import React from "react";

function SearchContainer(props) {
    console.log(props.results)



    return props.results ? (
        <>
            {props.results.map(({ volumeInfo }, i) => {
                return (<div key={i}>
                    <h1>{volumeInfo.title}</h1>
                    <h2>{volumeInfo.authors}</h2>
                    <img src={volumeInfo.imageLinks.thumbnail} alt="book" />
                    <p>{volumeInfo.description}</p>
                    <span>
                        <a href={volumeInfo.previewLink}><span>Preview Link </span></a>| 
                        <a href={volumeInfo.infoLink}><span> Info Link </span></a>| 
                    </span>
                    
                </div>)
            })}

        </>

    ) : null;
}

export default SearchContainer;

