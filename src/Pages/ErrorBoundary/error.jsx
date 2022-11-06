import React, { Component } from 'react'
import './error.css'
import ErrorImg from '../../assets/error.jpg'

export default class Error extends Component {constructor(props) {
    super(props);
    this.state = {hasError : false};
}
    static getDerivedStateFromError (){
        return {hasError: true}
    }

    componentDidCatch(error,errorInfo){
        console.log("Error Occured: ", error, errorInfo)
    }

    render() {
        // const {hasError} = this.state;
        // const {children} = this.props;
        // if (hasError){
            return (
                <div className={'error-boundary'}>
                    <div className={'error-msg'}><h2>Even the things we love break at times</h2>
                        <p>Please hold on while we fix thise</p>
                        <p>Ese o</p>
                    </div>
                    <div className={'error-img'}><img src={ErrorImg} alt={'something got broken'}/></div>
                </div>
            )
        // }
        // return children;
    }
}