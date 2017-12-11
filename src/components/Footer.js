import React from "react";
import {Footer} from "react-materialize";

const FooterSect = () =>{
  return (
  <div>
    <Footer id="page-footer">
        <div class="row">
          <div class="col s12" id="footerContent">
            <h6 class="white-text">HiScholar.com</h6>
          </div>
        </div>
        <div id="footer-copyright">
          <div class="row">
            <div class="col s12">
              © 2017 BRSS
            </div>
          </div>
        </div>
     </Footer>
   </div>
  );
}


export default FooterSect;
