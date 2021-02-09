import React from "react";

const BlockFlex = (props) => {
    return (
        <>
            <div style={{ display: "flex", marginTop: "35px" }}>
                {props.left}
                {props.right}
            </div>
        </>
    )
}

export default BlockFlex;