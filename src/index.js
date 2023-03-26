import React from 'react';
import ReactDOM from 'react-dom/client';
import {headerlinks,contentLinks,navItems} from "./header";
import {services} from "./serviceIntro";
import {designIntors} from "./designIntro";
import {whyusaccordians} from "./whyus";
import {clients} from "./clients";
import {decorationLists} from "./decorationList";
import {blogposts} from "./blog";
import {footernavItems,footercontacts,recentNews} from "./footer";
import {ourteams,aboutwhychooses} from "./about";
import './style.css';

// window.addEventListener("scroll",function(){
//     console.log(this.scrollY)
//     var getwindowscroll = this.scrollY;
//     if(getwindowscroll > 100) {
//         document.querySelector(".navbar").classList.add("active");
//     }else {
//         document.querySelector(".navbar").classList.remove("active");
//     }
// })


function Header(){
    return (
        <header className='header_container'>
            <div>
                <div className='py-3 banner_header'>
                    <div className='container d-flex justify-content-between ailgn-items-center'>
                        <div className='d-flex'>
                            {
                                headerlinks.map(function(headerlink){
                                    let id = Math.floor(Math.random()*1000);
                                    return (
                                        <HeaderLeft key={id} {...headerlink}/>
                                    )
                                })
                            }
                        </div>
                        <div className='d-flex'>
                            {
                                contentLinks.map(function(contentLink){
                                    let id = Math.floor(Math.random()*1000);
                                    return (
                                        <HeaderRight key = {id} {...contentLink} />
                                    ) 
                                })
                            }
                        </div>   
                    </div>
                </div>
                <nav className='navbar mt-0 navbar-expand-lg container'>
                    <a href='#' className='nav-brand'>
                        <h5 className='display-6 text-capitalize fw-light'>Interior</h5>
                    </a>
                    <button className='navbar-toggler' data-bs-target = "#mynav" data-bs-toggle = "collapse">
                        <div></div>
                        <div></div>
                        <div></div>
                    </button>
                    <div id='mynav' className='navbar-collapse collapse justify-content-end'>
                        <ul className='navbar-nav '>
                            {
                                navItems.map(function(navItem){
                                    let id = Math.random()*10000
                                    return (
                                        <NavBarMenu key = {id} {...navItem}/>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </nav>
            </div>
            <div className='container banner_container'>
                <div className='text-center  banner_content'>
                    <h5 className='text-uppercase fw-light'>Interior Design Company</h5> 
                    <h1>Experience Interior Design</h1>  
                </div>
                          
            </div>
            
        </header>
        
        
    )
    function HeaderLeft(props){
        const {icon} = props;
        // console.log(icon);
        return(
            <a href='#' className='me-3 nav-link'><i className={icon}></i></a>
        )
    }
    function HeaderRight(props){
        const {icon ,content} = props;
        return(
                <a href='#' className='ms-3 nav-link'><i className={icon} ></i>{content}</a>
        )
    }

    function NavBarMenu(props){
        const {cla,navLink,contentlink,icon,navMenu_1,navMenu_2,navMenu_3,navMenu_4} = props ;
        return (
            <li className={cla}><a href={contentlink} className=''>{navLink}<i className={icon}></i></a>
                <ul className='list-unstyled nav_secondary_menu'>
                    <li><a href='#' className='nav-link'>{navMenu_1}</a></li>
                    <li><a href='#' className='nav-link'>{navMenu_2}</a></li>
                    <li><a href='#' className='nav-link'>{navMenu_3}</a></li>
                    <li><a href='#' className='nav-link'>{navMenu_4}</a></li>
                </ul>
            </li>
        )
    } 
}

function ServiceIntro(){
    // console.log(services[0])
    return (
        <section className=' service_Intro  '>
            <div className='container py-5 service_Intro_container'>
                <div className='row '>
                    {
                        services.map(function(service){
                            let id = Math.random()*1000;
                            return (
                                <Service_intos key = {id} {...service} />
                            )
                        })
                    }
                </div>
                
            </div>
            
        </section>
    )
    function Service_intos(props){
        const {cla,icon,title,paragraph} = props;
        // console.log(icon);
        return (
            <div className='col-lg-4 col-md-12 mb-3'>
                <a href='#' className={cla}>
                    <span className='service_intro_icon'><i class={icon}></i></span>
                    <div className='mt-3 d-flex flex-column justify-content-between align-items-start text-start ser_intro_contents'>
                        <span className='d-block text-capitalize'>{title}</span>
                        <p className='p-0'>{paragraph}</p>
                    </div>
                </a>
            </div>
        )
    }
}

function Designintro(){
    return(
        <section className='py-5 design_intro'>
            <div className='container'>
                <div className='row'>
                    {
                        designIntors.map(function(designIntor){
                            let id = Math.random()*10000;
                            return (
                                <DesignItems key = {id} {...designIntor}/>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
    function DesignItems(props){
        const {cla,icon,title,paragraph} = props;
        return(
            <div className='col-lg-4 col-md-12 mb-3'>
                <a href='#' className={cla}>
                    <span className='design_intro_icon'><i class={icon}></i></span>
                    <div className='mt-3 d-flex flex-column justify-content-between align-items-start text-start design_intro_content'>
                        <span className='d-block text-capitalize'>{title}</span>
                        <p className='p-0 text-muted'>{paragraph}</p>
                    </div>
                </a>
            </div>
        )
    }
}



function Whyus(){

    return (
        <section className='py-5 why_us_section'>
            <div className='container'>
                <div className="row">
                    <div className='col-lg-6 col-md-12 mb-3 '>
                        <div className='why_us_img_container'>
                            <div className='why_us_img'></div>
                        </div>
                    </div>
                    <div className='col-lg-6 col-md-12 mb-3'>
                        <div className='why_us_content_container'>
                            <div className='why_us_content'>
                                <div className='content_header'>
                                    <span className='text-uppercase content_sub_title'>Why Us</span>
                                    <h4 className='mt-2 mb-5'>Why Us</h4>
                                </div>
                                
                                <div className='why_us_accordian_container'>
                                    {
                                        whyusaccordians.map(function(whyusaccordian){
                                            let id = Math.random()*1000;
                                            return(
                                                <Whyusaccordian key={id} {...whyusaccordian} />
                                            )
                                        })
                                    }

                                </div>
                            </div>

                        </div>
                    </div>

                </div>
                
            </div>
        </section>
    )
    function Whyusaccordian(prop){
        const {title , para} = prop;

        return (
            <div>
                <h3 className='why_us_accor_title'><span>{title}</span></h3>
                <div className='why_us_accor_para'>
                    <p>{para}</p>
                </div>
            </div>
            
        )
    }


}


function Clients(){
    return (
        <section className='py-5 clients_section'>
            <div className='text-center content_header'>
                <span className='text-uppercase content_sub_title'>HAPPY CLIENTS</span>
                <h3 className='mt-2 mb-5 fw-semibold'>Testimonials</h3>
            </div>
            <div className='container'>
                <div className='row'>
                    {
                        clients.map(function(client){
                            let id = Math.random()*10000;
                            return(
                                <ClientShow key = {id} {...client} />
                            )
                        })
                    }
                </div>

            </div>
        </section>
    )
    function ClientShow(props){
        const {cal,name,company,para} = props;
        return (
            <div className='col-lg-4 col-md-12 '>
                <div className='d-flex flex-column justify-content-center align-items-center text-center client_content_container'>
                    <div className={cal}></div>
                    <h5>{name}</h5>
                    <span className='text-uppercase'>{company}</span>
                    <p className='text-muted'>{para}</p>
                </div>
            </div>
        )
    }
}

function DecorationList(){
    return (
        <section className='py-5 decoration_list'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-6 col-md-12 mb-3 '>
                        <div className='why_us_img_container decoration_list_img_container'>
                            <div className='why_us_img decoration_list_img'></div>
                        </div>
                    </div>
                    <div className='col-lg-6 col-md-12 mb-3 d-flex justify-content-center align-items-center'>
                        <div className='row'>
                            {
                                decorationLists.map(function(decorationList){
                                    let id = Math.floor(Math.random()*10000);
                                    return (
                                        <div key={id} className='col-md-6 col-sm-12 mb-4'>
                                            <Decorations key={id} {...decorationList} />
                                        </div>
                                        
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
    function Decorations(props){
        const {icon , title} = props;
        return (
            <div className='decoration_content_container'>
                <div className='text-center decoration_content'>
                    <span><i className={icon}></i></span>
                    <h5 className='mt-3 text-capitalize'>{title}</h5>
                </div>
            </div>
        )
    }
}

function Blog(){
    return (
        <section className='py-5 blog_section'>
            <div className='text-center content_header'>
                <span className='text-uppercase content_sub_title'>NEWS & UPDATE</span>
                <h3 className='mt-2 mb-5 fw-semibold'>Our Blog Posts</h3>
            </div>
            <div className='container'>
                <div className='row'>
                    {
                        blogposts.map(function(blogpost){
                            let id = Math.floor(Math.random()*10000);
                            return (
                                <Blogposts key = {id} {...blogpost} />
                                
                            )
                        })  
                    }
                </div>

            </div>
        </section>
    )
    function Blogposts(props){
        const {cla,date,content} = props ;
        return (
            <div className='col-lg-4 col-md-6 px-4'>
                <div className='blog_post_content_container'>
                    <div className='blog_img_container'>
                        <div className={cla}></div>
                    </div>
                    
                    <span className='text-muted'>{date}</span>
                    <p>{content}</p>
                </div>
            </div>
        )
    }
}



function AboutUs(){
    return (
        <section id='about_us_section' className='py-5 about_us_section'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-6 col-md-12'>
                        <div className='about_us_img'>
                            <div className='about_us_experience'>
                                <h5>
                                    <span>27</span>
                                    <span>yrs.</span><br/>
                                    <span className='text-uppercase'>of experience</span>
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-6 col-md-12 '>
                        <div className=' d-flex flex-column justify-content-start align-items-start about_us_content'>
                            <div className='content_header'>
                                <span className='text-uppercase content_sub_title'>ARCHITECTURAL DESIGN</span>
                                <h4 className='mt-2 mb-5'>Architectural Design Co.</h4>
                                
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate fuga ipsum commodi aliquid aspernatur reiciendis enim cum voluptas id itaque, asperiores modi, voluptatibus sed voluptate nulla et ratione aliquam! Quaerat.
                            </p>
                            <div className='mt-5 d-flex justify-content-start'>
                                <a href='#' className=' btn rounded-0'>Read More About Us</a>
                            </div>
                            
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
    )
}

function Ourteam(){
    return (
        <section className='py-5 our_team_section'>
            <div className='container'>
                <div className='text-center content_header'>
                    <span className='text-uppercase content_sub_title'>MEET OUR TEAM</span>
                    <h3 className='mt-2 mb-5 fw-semibold'>Our Team</h3>
                </div>
                <div className='row'>
                    {
                        ourteams.map(function(ourteam){
                            let id = Math.random()*1000
                            return(
                                <OurTeam key={id} {...ourteam}/>
                            )
                        }) 
                    }
                </div>
            </div>
        </section>
    )
    function OurTeam(props){
        const {cla,name,position} = props;
        return (
            <div className='col-lg-3 col-md-6 col-sm-12 mb-2'>
                <div className='ourteam_content_container'>
                    <div className={cla}>
                        <div className='d-flex justify-content-center align-items-center our_team_content_link'>
                            <a href='#'><span><i className='fab fa-facebook-f'></i></span></a>
                            <a href='#'><span><i className='fab fa-instagram'></i></span></a>
                            <a href='#'><span><i className='fab fa-google'></i></span></a>
                        </div>
                    </div>
                    <h5>{name}</h5>
                    <h6 className='text-uppercase'>{position}</h6>
                </div>
            </div>
        )
    }
}

function WhyChooseUs(){
    return(
        <section className='why_choose_us_section'>
            <div className=' row'>
                <div className='col-lg-10'>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <div className='why_choose_img'>
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='why_choose_content_container'>
                                <div className='why_choose_content'>
                                    <div className='content_header'>
                                        <span className='text-uppercase content_sub_title'>ARCHITECTURAL DESIGN</span>
                                        <h4 className='mt-2 mb-5'>Why Choose Us</h4>
                                    </div>
                                    <div className='text-muted'>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus aliquid eius facilis voluptatem eligendi magnam accusamus vel commodi asperiores sint rem reprehenderit nobis nesciunt veniam qui fugit doloremque numquam quod.
                                    </p>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur tempora distinctio ipsam nesciunt recusandae repellendus asperiores amet.
                                    </p>
                                    <ul className='list-unstyled'>
                                        {
                                            aboutwhychooses.map(function(aboutwhychoose){
                                                let id = Math.random()*1000;

                                                return (
                                                    <li key={id} >{aboutwhychoose}</li>
                                                )
                                            })

                                        }
                                    </ul>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

function ContactUs(){
    return(
        <section id='contact_us_section' className='py-5 contact_us_section'>
            <div className='container'>
                <h1 className='mb-5 text-uppercase'>Say <span className='fw-bold'>Hello</span></h1>
                <div className='contact_us_form'>
                    <form action='' method=''>
                        <div className='form-group mb-3'>
                            <label for = "fullname">Full Name</label>
                            <input type={"text"} name="fullname" id='fullname' className='form-control rounded-0 p-2' placeholder='Full Name' />
                        </div>
                        <div className='form-group mb-3'>
                            <label for = "Email">Email</label>
                            <input type={"email"} name="Email" id='Email' className='form-control rounded-0 p-2' placeholder='Full Address'/>
                        </div>
                        <div className='form-group mb-3'>
                            <label for = "fullname">Message</label>
                            <textarea className='form-control rounded-0 p-2' placeholder='Say Hello to Us'></textarea>
                        </div>
                        <button type='submit' className='btn py-2 px-3 rounded-0'>Send</button>
                    </form>
                </div>
            </div>
            
        </section>
    )
}

function Footer(){
    return (
        <footer className='py-5 footer_section'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-3 col-md-12'>
                        <div className='footer_content_container'>
                            <div className='mb-4 footer_title'>
                                <h5>Navigation</h5>
                            </div>
                            <div className='footer_content'>
                                <div className='row'>
                                    <ul className='col-lg-6 list-unstyled'>
                                        {
                                            footernavItems.map(function(footernavItem){
                                                let id = Math.random()*1000;
                                                return (
                                                    <li key={id}><a href='#' className='nav-link'>{footernavItem}</a></li> 
                                                )
                                            })
                                        }
                                    </ul>
                                    <ul className='col-lg-6 list-unstyled'>
                                        {
                                            footercontacts.map(function(footercontact){
                                                let id = Math.random()*1000;
                                                return (
                                                    <li key={id} ><a href='#' className='nav-link'>{footercontact}</a></li> 
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-12'>
                        <div className='footer_content_container'>
                            <div className='mb-5 footer_title'>
                                <h5>Recent News</h5>
                            </div>
                            <div className='footer_content'>
                                <div className='recent_content_container'>
                                    {
                                        recentNews.map(function(recentNew){
                                            let id = Math.floor(Math.random()*10000);

                                            return (
                                                <>
                                                    <RecentPost key={id} {...recentNew} />
                                                </>
                                            )
                                        })
                                    }
                                </div>
                                
                            </div>

                        </div>
                    </div>
                    <div className='col-lg-4 col-md-12'>
                        <div className='footer_content_container'>
                            <div className='mb-4 footer_title'>
                                <h5>Subscribe Newsletter</h5>
                            </div>
                            <div className='footer_content'>
                                <div className='subscribe_letter'>
                                    <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit minima minus odio.
                                    </p>
                                    <form action='' method='' className='mt-4'>
                                        <div className='d-flex form_group'>
                                            <div className='input_box'>
                                                <input type={"email"} name="sub_email" id="sub_email" className='' placeholder='Enter Email' />
                                            </div>
                                            <button type="submit" className=' rouned-0'>Send</button>
                                        </div>
                                    </form>
                                    <h5 className='mt-5'>Follow Us</h5>
                                    <div className='sub_links'>
                                        <a className=''><i className='fab fa-facebook-f'></i></a>
                                        <a className=''><i className='fab fa-twitter'></i></a>
                                        <a className=''><i className='fab fa-instagram'></i></a>
                                    </div>
                                    
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
    function RecentPost(props){
        const {date,content} = props;

        return (
            <div className='mb-3 d-flex justify-content-between recent_post_content'>
                <div className='me-3 recent_post_img'></div>
                <div>
                    <span className='text-uppercase'>{date}</span>
                    <p>{content}</p>
                </div>
            </div>
        )
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <main>
        <Header/>
        <ServiceIntro/>
        <Designintro/>
        <Whyus/>
        <Clients/>
        <DecorationList />
        <Blog />
        <AboutUs/>
        <Ourteam/>
        <WhyChooseUs/>
        <ContactUs/>
        <Footer/>
        
    </main>
);
