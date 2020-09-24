import React, { Fragment, Component } from 'react';

class ItemList extends Component {

    state = {
        TrueOrFalse: false,
        Items:[]
    }

    Toggle = (e) => {
        let TrueOrFalse = this.state.TrueOrFalse ? false : true;
        this.setState({
            TrueOrFalse
        })
    }

    
    ListReturn = () => {
        let activeClass = this.props.activeClass;
        let activeClassAndCheck = `check ${activeClass}`; 
        return (
            <Fragment>
                <li>
                        <button className={activeClassAndCheck}
                        onClick={()=>this.props.shiftItems(this.props.ElmIndex)} >
                            <span><i className="fas fa-check"></i></span>
                        </button>

                        <div className ={activeClass}><span>{this.props.Course}</span></div>
                        <button onClick={this.Toggle} className="Edit">
                            <span>Edit</span>

                        </button>
                        <button
                         onClick={() => this.props.Delete(this.props.ElmIndex)}>
                             <span><i className="fas fa-trash"></i></span>
                        </button>
                </li>
            </Fragment>
        )
    }

    //updateValue 
    Update = (e) => { 
        e.preventDefault();
        this.props.EditItems(this.input1.value,this.props.ElmIndex)
        this.Toggle();
    }

    formReturn = () => {
        return (
            <Fragment>
                <form onSubmit={this.Update}>
                    <input type="text" defaultValue={this.props.Course} ref={(v)=> this.input1 =v}/>
                    <button type="submit"> <span>Update</span> </button>
                </form>
            </Fragment>
        )
    }

    render() {
        return (
            <Fragment>
                {this.state.TrueOrFalse ? this.formReturn() : this.ListReturn()}
            </Fragment>
        )
    }

}
export default ItemList;
