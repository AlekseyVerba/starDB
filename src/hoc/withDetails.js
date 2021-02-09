import React, { Component } from "react";
import Preloader from "../services/Preloader";
import { Consumer } from "../services/Context/Context";

const withDetails = (View, getData, getImg) => {
    return class extends Component {
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

            getData(personId).then(body => {
                this.setState({ person: body, isLoading: false, idImg: getImg(body) })
            })


        }

        render() {


            const allCheck = (this.state.isLoading || !this.state.person)
            const preloader = this.state.isLoading ? <Preloader /> : null
            const noPerson = !this.state.person ? <div>Select person</div> : null
            const personView = this.state.person ? <View state={this.state}> {this.props.children} </View> : null
            return (
                <>
                    {preloader}
                    {noPerson}
                    {personView}
                </>
            )
        }
    }
}

export default withDetails;