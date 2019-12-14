import React, {useEffect} from "react";
import {
  MDBView,
  MDBMask,
} from "mdbreact";
import { JumbStyles } from "../stylesheets/style";
import url from '../libs/url.json'
import { useRouter } from 'next/router'
const Jumbo = () => {
  const pathname = useRouter().pathname.split('/')[1];
  const jumb1 = require(`../images/Jumbo-2.jpg`);
  return (
    <JumbStyles>
      <MDBView>
        <img src={jumb1} className="img-fluid imaged" alt=""/>
        <MDBMask overlay="black-light" className="flex-center">
            <div className=" white-text text-center">
              <h1 className="h1-responsive">
              {url[pathname]}
                </h1>
            </div>
        </MDBMask>
      </MDBView>
    </JumbStyles>
  );
};

export default Jumbo;
