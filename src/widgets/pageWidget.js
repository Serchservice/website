import './pageWidget.css';
import { Link } from "react-router-dom";
import Images from '../config/images/images';
import {AppLinks, MainLinks} from '../config/custom/links';
import { FooterDocumentLinks, FooterLinks, SerchAppDownloadLinks, SocialMediaLinks } from './footerLinks';

export const Title = (newTitle) => {
    return document.title = newTitle;
}

export const Header = ({pagetitle, pagedescription}) => {
    return (
        <header style={{backgroundColor: "#030001", padding: pagetitle ? "0.8rem 0.9rem" : ""}} className="header-widget">
            <div style={{
                display: "flex", alignItems: "center", justifyContent: "space-between", padding: pagetitle ? "" : "0.8rem 0.9rem"
            }}>
                <div className="logo">
                    <Link to={ MainLinks.home }> <img alt="Serch Logo" src={ Images.serchLogo } width={40} height={40} /> </Link>
                </div>
                <div className="headerlinks" style={{justifyContent: "space-between",}}>
                    <Link to={ AppLinks.loginUser } style={{margin: "0.5rem", fontSize: "1rem"}}>Login</Link>
                    <Link to={ AppLinks.signupUser } style={{margin: "0.5rem", fontSize: "1rem"}}>Signup</Link>
                </div>
            </div>
            {
                pagetitle ? <>
                    <h2>{pagetitle}</h2>
                    <p>{pagedescription}</p>
                </> : null
            }
        </header>
    );
}

export const Footer = () => {
    return (
        <footer style={{backgroundColor: "#030001", width: "100%"}} className="footer">
            <div className="footer-logo" style={{display: "flex", flexWrap: "wrap",}}>
                <img alt='Serch Tagline' src={ Images.serchTagline }
                    style={{width: "150px", borderRadius: "0.8rem"}} className="upper-tagline"
                />
                <Link to={ MainLinks.home }>
                    <img alt='Serch Logo' src={ Images.serchLogoName } style={{
                        width: "150px", borderRadius: "0.8rem"
                    }} />
                </Link>
                <img alt='Serch Tagline' src={ Images.serchTagline }
                    style={{width: "150px", borderRadius: "0.8rem"}} className="lower-tagline"
                />
            </div>
            <div className='company-footer-links' style={{
                display: "flex", flexWrap: "wrap", alignItems: "flex-start", justifyContent: "space-between"
            }}>{
                FooterLinks.map((item, index) => {
                    if(item.section.includes("Help")){
                        return <div style={{
                            display: "flex",
                            flexDirection: "column",
                        }} key={index} className="company-links">
                            <h2 style={{color: "#bdbdbd"}}>{item.section}</h2>
                            {
                            item.link.map((item, index) => {
                                if(index === 1 || index === 3 || index === 4){
                                    return <a href={ item.link } key={index} className="pageLink">{item.title}</a>
                                } else {
                                    return <Link to={ item.link } key={index} className="pageLink">{item.title}</Link>
                                }
                            })
                        }
                        </div>
                    } else {
                        return <div style={{
                            display: "flex",
                            flexDirection: "column",
                        }} key={index} className="company-links">
                            <h2 style={{color: "#bdbdbd"}}>{item.section}</h2>
                            {
                                item.link.map((item, index) => {
                                    return <Link to={ item.link } key={index} className="pageLink">{item.title}</Link>
                                })
                            }
                        </div>
                    }
                })
            }</div>
            <div className='external-links' style={{
                display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between"
            }}>
                <div style={{
                    display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between",
                }}>{
                    SerchAppDownloadLinks.map((item, index) => {
                        return <a href={item.link} key={index} style={{padding: "0.2rem"}}>
                            <img className="downloadImage" alt={item.imageAlt} src={item.image} style={{width: "100%"}} />
                        </a>
                    })
                }</div>
                <div style={{display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between"}}>{
                    SocialMediaLinks.map((item, index) => {
                        return <a href={item.link} key={index} style={{padding: "0.2rem"}} target="_blank" rel="noopener noreferrer">
                            <img alt={item.imageAlt} src={item.image} className="external-links-social" style={{filter: "brightness(0) invert(1)"}} />
                        </a>
                    })
                }</div>
            </div>
            <div style={{alignItems: "center", textAlign: "center"}}>
                <div style={{display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", marginTop: "0.8rem"}}>{
                    FooterDocumentLinks.map((item, index) => {
                        return <Link to={item.link} style={{
                            color: "#bdbdbd",
                            margin: "0.5rem"
                        }} className="footer-document-link" key={index}>{item.name}</Link>
                    })
                }</div>
                <p style={{marginTop: "0.8rem", color: "#bdbdbd"}}>2022 Serch Inc. Tech.</p>
            </div>
        </footer>
    );
}