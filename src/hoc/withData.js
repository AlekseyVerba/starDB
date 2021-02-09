import React, { Component } from "react";
import Preloader from "../services/Preloader";
import style from "../components/ItemList/ItemList.module.css";


const withData = (View, getData) => {
    return class extends Component {
        constructor(props) {
            // debugger
            super(props);
            this.state = {
                persons: null
            }
        }

        componentDidMount() {
            getData().then(data => this.setState({ persons: data }))
        }

        renderItems = (items) => {
            return items.map(item => {
                let label = this.props.renderFunction(item);
                return <li key={item.id} className={style.item} onClick={() => this.props.history.push(`${this.props.match.url}/${item.id}`)}>{label}</li>
            })
        }

        render() {
            if (!this.state.persons) {
                return <Preloader />
            }

            const items = this.renderItems(this.state.persons)
            return <View {...this.props} items={items} />
        }
    }
}

export default withData;