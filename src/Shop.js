import React from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators} from "./state/index";

const Shop = ()=>{
    const dispatch = useDispatch();
    //const actions = bindActionCreators(actionCreators,dispatch);
    const {depositeAmount, withdrawAmount} = bindActionCreators(actionCreators,dispatch);
    return(
        <div>
            {/* <h2>Deposite/Withdraw Amount by 100</h2>
            <button className="btn btn-outline-primary mx-2" onClick={()=>{dispatch(actionCreators.withdrawAmount(100))}}>-</button>
            Update Balance
            <button className="btn btn-outline-primary mx-2" onClick={()=>{dispatch(actionCreators.depositeAmount(100))}}>+</button> */}
            <h2>Deposite/Withdraw Amount by 100</h2>
            <button className="btn btn-outline-primary mx-2" onClick={()=>{withdrawAmount(100)}}>-</button>
            Update Balance
            <button className="btn btn-outline-primary mx-2" onClick={()=>{depositeAmount(100)}}>+</button>
        </div>
    )
}

export default Shop