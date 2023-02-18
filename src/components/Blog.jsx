import { Link } from "react-router-dom";
import art from "../img/11.svg";
import arti from "../img/arti.jpg";
import k1 from "../img/k1.jpg";
import k2 from "../img/k2.jpg";
function Blog(){
    return (
        <>
            <div className="post-img">
                <img src={art} alt="blogpost" />
            </div>
            <div className="m-auto blog-post-content max-width-2 my-2">
                <h1 className="font1">The Heaven for bloggers</h1>
                <div className="blogpost-meta">
                    <div className="author-info">
                        <div><b>Author - Neha Surana (Scientific Assistant IMD)</b></div>
                        <div>4 January. 6 min read</div>
                    </div>
                    <div className="social">
                    <svg style={{width:"29" ,height:"29"}} className="hk"><path d="M22.05 7.54a4.47 4.47 0 0 0-3.3-1.46 4.53 4.53 0 0 0-4.53 4.53c0 .35.04.7.08 1.05A12.9 12.9 0 0 1 5 6.89a5.1 5.1 0 0 0-.65 2.26c.03 1.6.83 2.99 2.02 3.79a4.3 4.3 0 0 1-2.02-.57v.08a4.55 4.55 0 0 0 3.63 4.44c-.4.08-.8.13-1.21.16l-.81-.08a4.54 4.54 0 0 0 4.2 3.15 9.56 9.56 0 0 1-5.66 1.94l-1.05-.08c2 1.27 4.38 2.02 6.94 2.02 8.3 0 12.86-6.9 12.84-12.85.02-.24 0-.43 0-.65a8.68 8.68 0 0 0 2.26-2.34c-.82.38-1.7.62-2.6.72a4.37 4.37 0 0 0 1.95-2.51c-.84.53-1.81.9-2.83 1.13z"></path></svg>

                    <svg style={{background: "black",borderRadius: "21px", width:"29", height:"29", viewBox:"0 0 29 29", fill:"none"}} className="hk"><path d="M5 6.36C5 5.61 5.63 5 6.4 5h16.2c.77 0 1.4.61 1.4 1.36v16.28c0 .75-.63 1.36-1.4 1.36H6.4c-.77 0-1.4-.6-1.4-1.36V6.36z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M10.76 20.9v-8.57H7.89v8.58h2.87zm-1.44-9.75c1 0 1.63-.65 1.63-1.48-.02-.84-.62-1.48-1.6-1.48-.99 0-1.63.64-1.63 1.48 0 .83.62 1.48 1.59 1.48h.01zM12.35 20.9h2.87v-4.79c0-.25.02-.5.1-.7.2-.5.67-1.04 1.46-1.04 1.04 0 1.46.8 1.46 1.95v4.59h2.87v-4.92c0-2.64-1.42-3.87-3.3-3.87-1.55 0-2.23.86-2.61 1.45h.02v-1.24h-2.87c.04.8 0 8.58 0 8.58z" fill="#fff"></path></svg>

                    <svg style={{width:"29" ,height:"29"}} className="hk"><path d="M23.2 5H5.8a.8.8 0 0 0-.8.8V23.2c0 .44.35.8.8.8h9.3v-7.13h-2.38V13.9h2.38v-2.38c0-2.45 1.55-3.66 3.74-3.66 1.05 0 1.95.08 2.2.11v2.57h-1.5c-1.2 0-1.48.57-1.48 1.4v1.96h2.97l-.6 2.97h-2.37l.05 7.12h5.1a.8.8 0 0 0 .79-.8V5.8a.8.8 0 0 0-.8-.79"></path></svg>
                    </div>
                </div>
                <p className="font1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae rerum at cum sed, recusandae exercitationem similique, voluptates incidunt tempore veniam ex quibusdam sint maxime. Perspiciatis doloribus hic suscipit nam, impedit officia natus quae minus numquam debitis tenetur, dignissimos atque. Sed consectetur unde temporibus tempora dolor, ut eligendi nihil sequi doloremque ducimus cum voluptatem aliquam, similique modi, fugiat sint perferendis nam quaerat? Ullam culpa modi, consectetur perferendis temporibus minus quos quasi voluptas ex recusandae suscipit doloremque labore fugit dolor officiis blanditiis doloribus adipisci dolores totam corporis eum non fuga? Pariatur ipsam optio iure, assumenda voluptate a doloremque harum, aperiam atque placeat ratione sequi autem explicabo unde tenetur saepe laudantium quae quaerat quod nemo distinctio ab iste incidunt! Quam magni cupiditate, corporis unde, natus laborum officia veritatis molestiae eum tenetur architecto libero, ut distinctio odio corrupti aperiam? Sapiente perferendis aliquid impedit quod non repellat voluptatum libero alias nihil enim et nam itaque illo officia aliquam veniam laborum deserunt, sit, eaque consequatur dignissimos repudiandae. Libero velit facilis impedit veritatis, omnis harum amet voluptates nesciunt illum natus provident ex, ullam id saepe repudiandae recusandae eaque excepturi iusto nam ad laboriosam, laudantium nemo neque. Sapiente consectetur expedita, qui distinctio aut necessitatibus sint iusto obcaecati accusamus? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam laudantium deleniti reprehenderit cumque minima maiores iusto commodi nulla atque vel doloremque officiis expedita sit sequi similique, repudiandae ut repellat quam neque omnis! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus repellat quam debitis pariatur rem aperiam maiores eum inventore rerum molestiae voluptatem quaerat sequi, ea modi ipsa officiis. Vero, minus repellendus unde sunt expedita quaerat consequuntur neque voluptate nesciunt pariatur eius accusantium dolor labore. Sed quibusdam dolor assumenda illo nihil, aliquam error neque alias laudantium optio, doloremque amet consequuntur corporis. Dignissimos atque consequatur delectus fugiat dolorum, alias nobis quis aspernatur similique. Odit aut numquam tempora minima, temporibus perferendis delectus sint in, quaerat fuga asperiores similique tempore architecto. Voluptas sint, labore amet tempora nulla rerum consequuntur perspiciatis vero quidem repu lore, diandae asperiores aperiam nobis, architecto sapiente a iusto odit! Rerum assumenda officiis cumque iusto at error consectetur iure, commodi expedita explicabo vitae tempore architecto eius asperiores magnam reprehenderit hic, minus voluptatem nulla modi temporibus? Ex! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ad nesciunt, facilis similique quisquam molestias nostrum neque odio corporis culpa laudantium, mollitia nemo minus impedit explicabo. Numquam iusto inventore labore sunt repellat ullam quaerat aperiam ratione, nostrum, voluptatem possimus deserunt, alias distinctio dolore! Aperiam ipsam, architecto facilis dolorum ea voluptatem! Ipsam accusantium delectus, nihil illum facilis quos fuga reprehenderit porro ut eveniet? Veritatis quae, nisi dolor quam laborum a adipisci atque doloremque iusto earum sunt voluptatem quibusdam et debitis quisquam, modi impedit eum omnis at? Odio repudiandae reiciendis, maxime architecto nobis totam necessitatibus, ex magni aspernatur optio, perspiciatis amet quibusdam?</p>
            </div>
            <div class="max-width-1 m-auto"><hr/></div>
            <div className="home-articles max-width-1 m-auto font2 my-2">
                <h2>People who read this also read</h2>
                <div className="row">
                    <div className="home-article more-post">
                        <div className="home-article-img">
                            <img src={arti} alt="article" />
                        </div>
                        <div className="home-article-content font1 center">
                            <Link to="/blogpost" rel="noopener noreferrer"><h3>Learn more about Machine Learning techniques in India by joining this channel</h3></Link>
                            <div>Author Name</div>
                            <span>15 June | 6 min read</span>
                        </div>
                    </div>
                    <div className="home-article more-post">
                        <div className="home-article-img">
                            <img src={k1} alt="article" />
                        </div>
                        <div className="home-article-content font1 center">
                            <Link to="/blogpost" rel="noopener noreferrer"><h3>Learn more about Machine Learning techniques in India by joining this channel</h3></Link>
                            <div>Author Name</div>
                            <span>15 June | 6 min read</span>
                        </div>
                    </div>
                    <div className="home-article more-post">
                        <div className="home-article-img">
                            <img src={k2} alt="article" />
                        </div>
                        <div className="home-article-content font1 center">
                            <Link to="/blogpost" rel="noopener noreferrer"><h3>Learn more about Machine Learning techniques in India by joining this channel</h3></Link>
                            <div>Author Name</div>
                            <span>15 June | 6 min read</span>
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    )
}
export default Blog;