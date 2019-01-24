import React, { Component } from 'react'
import './style.css'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Modal } from 'antd';


export class Photo_Color extends Component {
    state = {
        visible: false,
        pickedColor: '#21eac3'
    }


    showModal = () => {
        this.setState({
            visible: true,
        });
    }

    renderColors = () => {
        const colors = ['#c01d1d', '#1d9fc0', '#21eac3', '#1dc040']
        return (colors || []).map((d, index) => {
            return <div className="ColorPicker" style={{ backgroundColor: d }} onClick={()=>this.changeColor(d)}></div>
        })
    }

    changeColor = (color) => {
        this.setState({
            visible: false,
            pickedColor: color
        });
    }


    render() {
        
        return (
            <div className="PC_main">
                <div className="cameraBox">
                    <FontAwesomeIcon icon="camera" size="3x" color="#b7b7b7" />
                </div>
                <div className="PC_flexBox">
                    <div className="ColorPicker" style={{ backgroundColor: this.state.pickedColor }} onClick={this.showModal}></div>
                    <div className="PC_comment">
                        <FontAwesomeIcon icon="comment-alt" size="s" color="#b7b7b7" />
                    </div>
                </div>


                <Modal
                    title="Pick Color"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    footer={null}
                    closable={true}
                    maskClosable={true}
                    
                >
                    <div className="PC_flexBox">
                        {this.renderColors()}
                    </div>
                </Modal>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Photo_Color)
