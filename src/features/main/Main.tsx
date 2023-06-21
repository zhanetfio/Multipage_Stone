import React from 'react';
import {Prime} from "../prime/Prime";
import {Advantages} from "../advantages/Advantages";
import {Products} from "../products/Products";
import {Catalog} from "../catalog/Catalog";
import {Ideas} from "../ideas/Ideas";
import {Contacts} from "../contacts/Contacts";
import {Footer} from "../../common/components/footer/Footer";


export const Main = () => {
    return (
        <div>
            <Prime/>
            <Advantages/>
            <Products/>
            <Catalog/>
            <Ideas/>
            <Contacts/>
            <Footer/>
        </div>
    );
};


