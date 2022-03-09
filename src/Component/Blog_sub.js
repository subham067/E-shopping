import React from "react";

function Blog_sub({d}) {
return (
<React.Fragment>
    <div className="box">
        <div class="box-img">
            <img src={d.image} alt="blog 2" className="image" />
        </div>


        <div className="content">
            <div className="icons">
                <a href="#">
                    {" "}
                    <i className="fas fa-user" /> {d.name}{" "}
                </a>
                <a href="#">
                    {" "}
                    <i className="fas fa-calendar" /> {d.time}{" "}
                </a>
            </div>
            <h3>{d.title}</h3>
            <p>
                {d.desc}
            </p>
            <a href="#" className="btn">
                read more
            </a>
        </div>
    </div>
</React.Fragment>
)
}

export default Blog_sub