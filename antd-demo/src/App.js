import React, { Component } from 'react';
import { Upload, message, Button, Icon } from 'antd';
import './App.css';

const props = {
    name: 'file',
    action: 'http://www.baidu.com',
    headers: {
        authorization: 'authorization-text',
    },
    onChange(info) {
        if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
            message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    },
};
class App extends Component {
    render() {
        return ( 
            <div className = "App" >
                <Upload {...props}>
                    <Button>
                        <Icon type="upload" /> Click to Upload
                    </Button>
                </Upload>
            </div>
        );
    }
}

export default App;