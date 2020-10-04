import React from 'react'
import './SerachPageResult.css'
import useGoogleSearch from './useGoogleSearch';
import response from './response';
import Search from './Search';
import {Link} from 'react-router-dom'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import RoomIcon from '@material-ui/icons/Room';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import ImageIcon from '@material-ui/icons/Image';
import DescriptionIcon from '@material-ui/icons/Description';
import SearchIcon from '@material-ui/icons/Search';
import { useStateValue } from './Stateprovider';
function SerachResultPage({serachText,setserachText}) {
    const [ {term}] = useStateValue();
     const {data} = useGoogleSearch(term);
//  const   data = response;
    console.log(data);

    return (
        <div className="serachresultpage">
           
               <div className="serach_page_header">
               <Link className="serachpage_header" to="/">

<img alt="google logo" src="data:image/png;base64,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"></img>
</Link>


<div className="serachpage__header">
<Search setserachText={setserachText} serachText={serachText}/>
<div className="serachresultpage_header">
<div className="serachresulrpage_options_left">
 <div className="serachresultpage_option serachresultpage_option-active">
     <SearchIcon></SearchIcon>
     <p>All</p>
 </div>
 <div className="serachresultpage_option">
     <DescriptionIcon></DescriptionIcon>
     <p>News</p>
 </div>
 <div className="serachresultpage_option">
    <ImageIcon></ImageIcon>
     <p>Images</p>
 </div>
 <div className="serachresultpage_option">
 <LocalOfferIcon></LocalOfferIcon>
     <p>Images</p>
 </div>
 <div className="serachresultpage_option">
 <RoomIcon></RoomIcon>
     <p>Maps</p>
 </div>

 <div className="serachresultpage_option">
<MoreVertIcon></MoreVertIcon>
     <p>More</p>
 </div>
</div>
<div className="serachresulrpage_options_right">
<p>Settings</p>
<p>Tools</p>
</div>
</div>
</div>
               </div>
           {
               term && data &&(
                <div className="result_page">
                <p className="result_page_info">About {data?.searchInformation.totalResults} results ({data?.searchInformation.searchTime} seconds)</p>
                {data?.items.map(item =>(
                    <div  className="display_result_page">
                      <a className="result_page_image" href={item.link}>
                      {item.pagemap?.cse_image?.length>0 && 
                        item.pagemap?.cse_image[0]?.src &&(
                            <img alt="" src={item.pagemap?.cse_image[0]?.src}></img>
                        )
                       }
                      </a>
                     <a className="result_page_link" href={item.displayLink}>
                         {item.displayLink}
                     </a>
                     <a className="result_page_title" href={item.link}>
                         <h2>{item.title}</h2>
                     </a>
                <p className="result_page_snappet">{item.snippet}</p>
                    </div>
                ))}
           </div>
               )
           }
        </div>
    )
}

export default SerachResultPage
