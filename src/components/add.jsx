import React,{memo} from 'react';

const Add = memo(props => {
    const inputRef = React.createRef();
    const formRef = React.createRef();

    const onSubmit = event =>{
        event.preventDefault();
        const name = inputRef.current.value;
        name && props.onAdd(name);
        //this.inputRef.current.value='';
        formRef.current.reset();
    };

    console.log('heelo');
    return (
        <form ref ={formRef} className="add-form" onSubmit={onSubmit}>
            <input ref={inputRef} type="text" className="add-input"/>
            <button className="add-button">Add</button>
        </form>
        );
    }
    );

export default Add;



// class Add extends PureComponent {
//     inputRef = React.createRef();
//     formRef = React.createRef();
//     onSubmit = event =>{
//         event.preventDefault();
//         const name = this.inputRef.current.value;
//         name && this.props.onAdd(name);
//         //this.inputRef.current.value='';
//         this.formRef.current.reset();
//     }
//     render() {
//         console.log('heelo');
//         return (
//             <form ref ={this.formRef} className="add-form" onSubmit={this.onSubmit}>
//                 <input ref={this.inputRef} type="text" className="add-input"/>
//                 <button className="add-button">Add</button>
//             </form>
//         );
//     }
// }

// export default Add;