import { useState } from "react";

const Article = () => {
    const [article, setArticle] = useState(true);

    const showArticle = () => {
        setArticle(!article);
    };
    return (
        <div className="article">
            <h2>Judul Artikel</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                mollis, turpis sed ullamcorper ullamcorper, quam ligula finibus
                nisl, a pellentesque elit nulla at nulla. Phasellus non
                imperdiet lacus. Sed eu mollis augue, sed tempus turpis.
                Praesent tellus orci, pellentesque sit amet egestas in, laoreet
                nec ipsum.
            </p>
            {article && (
                <div className="author">
                    <img className="author-img" src="../author.jpg" />
                    <code>Posted by : Fariz Ghani Fuad 06/05/2023</code>
                </div>
            )}
            <button onClick={showArticle}>
                {!article
                    ? "Munculkan Pembuat Artikel"
                    : "Sembunyikan Pembuat Artikel"}
            </button>
        </div>
    );
};

export default Article;
