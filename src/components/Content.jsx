import home from "../img/home.jpg";
function Content(){
    return <div>
    <div className="content max-width-1 m-auto my-2">
        <div className="content-left">
            <h1>The Heaven for bloggers</h1>
            <p>sBlog is a website which lets you submit an article which upon approval will be up on our website and you can get a good amount of reach from here!</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, totam dolores nisi, porro soluta nostrum in impedit harum deserunt nulla est accusamus sequi nam non? Doloremque cumque modi temporibus voluptate.</p>
        </div>
        <div className="content-right">
            <img src={home} alt="sBlog" />
        </div>
    </div>
    <div className="max-width-1 m-auto"> <hr /> </div>
    </div>
}
export default Content;