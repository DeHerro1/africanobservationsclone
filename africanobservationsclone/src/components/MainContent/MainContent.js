import React from 'react';
import "./MainContent.css";
import Content from "./M.Contents/Contents";
import quote from '../../assets/quote.99637a8d.jpg';
import word from '../../assets/word-img.bdb746c8.jpg'

function MainContent() {
    return (
        <div className="maincontent">
            <Content 
            title="Traction"
            quote='WORD OF THE DAY'
            img={word}
            close='content1'
            text='Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Officia illo tenetur unde debitis quisquam quas. Odio illo, 
            sit ipsa labore cumque nesciunt in deleniti inventore 
            repellendus amet ratione sed fugiat.Odio illo, sit ipsa labore
             cumque nesciunt in deleniti inventore repellendus amet ratione sed fugiat.' />
             <Content 
            title="Traction"
            quote='WORD OF THE DAY'
            img={quote}
            close='content2'
            text='Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Officia illo tenetur unde debitis quisquam quas. Odio illo, 
            sit ipsa labore cumque nesciunt in deleniti inventore 
            repellendus amet ratione sed fugiat.Odio illo, sit ipsa labore
             cumque nesciunt in deleniti inventore repellendus amet ratione sed fugiat.' />
        </div>
    )
}

export default MainContent;
