import React from "react";
import { Link } from "react-router-dom";

export function PaginationBtn(){
    return(
        <Link to='/servey' className="button is-link">
            次の質問へ進む
        </Link>
    );
};