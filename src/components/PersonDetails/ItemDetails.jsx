import React, { Component } from "react";
import style from "./ItemDetails.module.css";
import ItemView from "./ItemView/PersonView";
import Preloader from "../../services/Preloader";


const Record = (props) => {
    return (
        <li className={style.item}>
            {props.label}: {props.item[props.field]}
        </li>
    )
}

export {
    Record
}

class ItemDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            person: null,
            isLoading: false,
            idImg: null
        }
    }

    componentDidMount() {
        this.updatePerson(this.props.personId)
    }

    componentDidUpdate(prevProps) {
        if (this.props.personId !== prevProps.personId) {
            this.updatePerson(this.props.personId)
        }
    }

    updatePerson = (personId) => {
        if (!personId) {
            return
        }
        this.setState({
            isLoading: true
        })

        this.props.getData(personId).then(body => {
            this.setState({ person: body, isLoading: false, idImg: this.props.updateImg(body) })
        })


    }

    render() {
        const allCheck = (this.state.isLoading || !this.state.person)
        const preloader = this.state.isLoading ? <Preloader /> : null
        const noPerson = !this.state.person ? <div>Select person</div> : null
        const personView = !allCheck ? <ItemView state={this.state}> {this.props.children} </ItemView> : null

        return (
            <>
                {preloader}
                {noPerson}
                {personView}
            </>
        )
    }
}
export default ItemDetails;